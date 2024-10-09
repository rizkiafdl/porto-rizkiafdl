"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const setCanvasSize = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    // Set canvas size to match parent element (container div)
    w = canvas.offsetWidth;
    h = canvas.offsetHeight;
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.filter = `blur(${blur}px)`;

    // Clear the canvas before redrawing
    ctx.clearRect(0, 0, w, h);
  };

  const init = () => {
    setCanvasSize();
    nt = 0; // Reset noise offset on initialization
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"
  ];

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.clearRect(0, 0, w, h); // Ensure the canvas is cleared on each render
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  let resizeTimeout: number;

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout) {
        cancelAnimationFrame(resizeTimeout);
      }
      resizeTimeout = requestAnimationFrame(() => {
        setCanvasSize();
        nt = 0; // Reset noise offset to ensure smooth transition after resizing
      });
    };

    init();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "w-full h-[100vh] flex items-center justify-center", // Make the background take full width and height of the screen
        containerClassName
      )}
      style={{ zIndex: 0 }} // Keep it in normal layout flow, no need for high z-index
    >
      <canvas
        className="w-full h-full" // Let the canvas expand to full width and height of parent container
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      ></canvas>
      <div className={cn("absolute inset-0 z-10 flex items-center justify-center", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
