"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface ThreeDCardDemoProps {
    title: string;
    date: string;
    img: string;
    linkHref: string;
    tooltip: string[]; // Accept an array of strings for tooltips
}

export function ThreeDCardDemo({ title, date, img, tooltip, linkHref }: ThreeDCardDemoProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-75% sm:w-[25rem] h-auto rounded-xl p-6 border">
                <div className="text-center h-50% justify-center">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-12 overflow-hidden"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {date}
                    </CardItem>
                </div>

                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                >
                    <Image
                        src={img}
                        height="500"
                        width="500"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-16">
                    <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        {tooltip.map((tip, index) => (
                            <span key={index} className="flex flex-row my-2">
                                < span className="bg-gray-500/50 p-1.5  rounded-md" >
                                    {tip}
                                </span>
                            </span>
                        ))}
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <Link
                            href={linkHref}>
                            Details
                        </Link>
                    </CardItem>
                </div>
            </CardBody >
        </CardContainer >
    );
}
