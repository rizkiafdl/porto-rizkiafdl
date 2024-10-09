"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

// Text data array

type Link = {
    text: string;
    url: string;
};

type ImageData = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

type Experience = {
    year: string;
    achievements: string[];
    links?: Link[]; // Optional, because not every experience has links
    images?: ImageData[]; // Optional, because not every experience has images
};

const experienceTextData = [
    {
        year: "2024",
        achievements: [
            "Participate As Creative Team Staff @ Techbinar : Techwinter",
            "AWS Academy Graduate - AWS Academy Cloud Architecting",
            "AWS Academy Graduate - AWS Academy Cloud Foundations",
            "Achieving 3.84 GPA in odd terms",
        ],
        links: [
            {
                text: "AWS Academy Graduate - AWS Academy Cloud Architecting",
                url: "https://www.credly.com/badges/02ecfe26-32d8-455d-b4f9-2f32ae76c0d5/linked_in?t=sa7fjn",
            },
            {
                text: "AWS Academy Graduate - AWS Academy Cloud Foundations",
                url: "https://www.credly.com/badges/1b1c6877-ff5b-4b08-a16f-cc10c873422d/linked_in_profile",
            },
        ],
    },
    {
        year: "2023",
        achievements: [
            "Developing A Product As UI/UX Designer In Biodiverse",
            "Joining Google Developer Student Club @Binus Bandung As Core Team",
            "Promoted Into Staff Of External Event Organizer Division In BNCC",
        ],
        images: [
            { src: "/biodiverse/biodiverse_profile.png", alt: "biodiverse", width: 500, height: 500 },
            { src: "/biodiverse/biodiverse_ig.jpg", alt: "feature template", width: 200, height: 200 },
            { src: "/biodiverse/movie_ui.png", alt: "bento template", width: 500, height: 500 },
            { src: "/biodiverse/fotbar_bio.jpg", alt: "cards template", width: 500, height: 500 },
        ],
    },
    {
        year: "2022",
        achievements: [
            "Joined Bina Nusantara University",
            "Joined BNCC As an Activist",
            "Maintaining 3.54 GPA In 2022 first year of my college",
        ],
    },
];

type ExperienceCardProps = {
    year: string;
    achievements: string[];
    links?: Link[];
    images?: ImageData[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ year, achievements, links, images }) => {
    return (
        <div className="mb-8">
            <h1 className="text-4xl my-4 font-bold text-white">{year} Experience</h1>
            {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                    ✅ {achievement}
                </div>
            ))}
            {links && links.map((link, index) => (
                <div key={index} className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                    ✅
                    <Link href={link.url}>
                        {link.text}
                    </Link>
                </div>
            ))}

            {/* Render images if available */}
            {images && (
                <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-4">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className={`rounded-lg object-cover ${index === 2 ? "row-span-3 h-[75%] md:h-[50%]" : "h-[75%] md:h-[50%]"
                                } w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};


export function ExperienceSection() {
    return (
        <div className="w-full">
            <Timeline
                data={experienceTextData.map((item) => ({
                    title: item.year,
                    content: (
                        <ExperienceCard
                            year={item.year}
                            achievements={item.achievements}
                            links={item.links}
                            images={item.images}
                        />
                    ),
                }))}
            />
        </div>
    );
}

