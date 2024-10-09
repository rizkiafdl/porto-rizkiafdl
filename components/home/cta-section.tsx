import React from 'react';
import { WobbleCard } from "@/components/ui/wobble-card";
import { SiReaddotcv } from "react-icons/si";
import { FaRegFilePdf, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TypewriterEffect } from '../ui/typewriter-effect';
import Link from 'next/link';

// Data object containing content for each card
const ctaData = [
    {
        title: "Curriculum Vitae",
        description: "My professional document that describes my journey as a developer.",
        bgClass: "bg-purple-800",
        containerClass: "col-span-1",
        minHeight: "min-h-[200px] sm:min-h-[350px] lg:min-h-[400px]",
        icon: <SiReaddotcv size={60} />,
        link: {
            url: "https://drive.google.com/file/d/1K7NHqlJuuJGaTy-ZzFuyYEtmcaLiV2UJ/view?usp=sharing",
            title: "CV Link"
        },
    },
    {
        title: "PDF Portfolio",
        description: "View my PDF portfolio showcasing my work and skills.",
        bgClass: "bg-red-700",
        containerClass: "col-span-1",
        minHeight: "min-h-[200px] sm:min-h-[350px] lg:min-h-[400px]",
        icon: <FaRegFilePdf size={60} />,
        link: {
            url: "https://drive.google.com/file/d/1RILwHM7B9vfao8o4jj5BEq6WsHjSHQ3I/view?usp=sharinghttps://",
            title: "Portfolio Link"
        },
    },
    {
        title: "Instagram",
        description: "Follow me on Instagram to see more of my work.",
        bgClass: "bg-pink-900",
        containerClass: "col-span-1",
        minHeight: "min-h-[200px] sm:min-h-[350px] lg:min-h-[400px]",
        icon: <FaInstagram size={60} />,
        link: {
            url: "https://www.instagram.com/rizkiafdl",
            title: "Instagram"
        },
    },
    {
        title: "LinkedIn",
        description: "Connect with me on LinkedIn to stay updated on my career.",
        bgClass: "bg-blue-900",
        containerClass: "col-span-1",
        minHeight: "min-h-[200px] sm:min-h-[350px] lg:min-h-[400px]",
        icon: <FaLinkedinIn size={60} />,
        link: {
            url: "https://www.linkedin.com/in/rizkiafdl/",
            title: "LinkedIn"
        },
    },
    {
        title: "GitHub",
        description: "Check out my GitHub for more open-source projects.",
        bgClass: "bg-neutral-900",
        containerClass: "col-span-1",
        minHeight: "min-h-[200px] sm:min-h-[350px] lg:min-h-[400px]",
        icon: <FaGithub size={60} />,
        link: {
            url: "https://github.com/rizkiafdl",
            title: "GitHub"
        },
    },
];

const words = [
    {
        text: "Get ",
    },
    {
        text: "To ",
    },
    {
        text: "Know",
    },
    {
        text: "Me!",
        className: "text-blue-500 dark:text-blue-500",
    },
];

export const CtaSection = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-32'>
            <div>
                <div className='max-w-7xl mx-auto pt-32 px-4 md:px-8 lg:px-10 text-7xl md:text-4xl lg:text-7xl font-bold text-neutral-200 dark:text-white leading-relaxed lg:leading-snug text-center'>
                    <TypewriterEffect words={words} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8">
                {ctaData.map((item, index) => (
                    <Link key={index} href={item.link.url} passHref>
                        <WobbleCard
                            containerClassName={`${item.containerClass} ${item.bgClass} ${item.minHeight}`}
                        >
                            <div className="max-w-sm flex flex-col justify-center items-center space-y-6 text-center">
                                <h2 className="text-base hover:text-blue-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tight text-white">
                                    {item.title}
                                </h2>
                                <div className='flex flex-col items-center space-y-8'>
                                    <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-200 max-h-16 sm:max-h-20 overflow-hidden text-ellipsis">
                                        {item.description}
                                    </p>
                                    <div className='text-white'>
                                        {item.icon}
                                    </div>
                                    <div className='text-sm text-white hover:text-blue-500 hover:underline'>
                                        {item.link.title}
                                    </div>
                                </div>
                            </div>
                        </WobbleCard>
                    </Link>
                ))}
            </div>
        </div>
    );
};
