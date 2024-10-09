
"use client";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background";

export function HeroSection() {
    return (
        <main className=" items-center justify-center">
            <WavyBackground >

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-500 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto "
                >
                    <h1>Hello!<br /> I'am A Developer. <p className="text-left">My Name is</p></h1>

                    <h1 className=" text-neutral-100 dark:text-white">
                        Muhammad Rizki Afdolli.
                    </h1>
                </motion.div>

            </WavyBackground>
        </main>

    );
}
