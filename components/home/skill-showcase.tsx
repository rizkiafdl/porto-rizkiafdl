"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { SiTypescript } from "react-icons/si";
export function SkillSet() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div className="flex justify-center pt-32">



            <div
                className="h-[50vh] bg-black w-[75%] rounded-md "
                ref={ref}
            >

                <div>
                    <GoogleGeminiEffect
                        title="Skill Set"
                        pathLengths={[
                            pathLengthFirst,
                            pathLengthSecond,
                            pathLengthThird,
                            pathLengthFourth,
                            pathLengthFifth,
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
