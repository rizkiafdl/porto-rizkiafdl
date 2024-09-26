import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function ExprienceSection() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <div className="mb-8">
                        <h1 className="text-4xl my-4 font-bold">2024 Exprience</h1>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Participate As Creative Team Staff @ Techbinar : Techwinter
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <Link href={"https://www.credly.com/badges/02ecfe26-32d8-455d-b4f9-2f32ae76c0d5/linked_in?t=sa7fjn"}>
                                ✅ AWS Academy Graduate - AWS Academy Cloud Architecting
                            </Link>
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅
                            <Link href={"https://www.credly.com/badges/1b1c6877-ff5b-4b08-a16f-cc10c873422d/linked_in_profile"}>
                                AWS Academy Graduate - AWS Academy Cloud Foundations
                            </Link>

                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Achieving 3,84 GPA in odd terms
                        </div>
                    </div>




                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <div className="mb-8">
                        <h1 className="text-4xl my-4 font-bold">2023 Exprience</h1>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Developing A Product As UI/UX Designer In Biodiverse
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Joining Google Developer Student Club @Binus Bandung As Core Team
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Promoted Into Staff Of External Event Organizer Division In BNCC
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-row-3 gap-4">
                        <Image
                            src="/biodiverse/biodiverse_profile.png"
                            alt="biodiverse"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/biodiverse/biodiverse_ig.jpg"
                            alt="feature template"
                            width={200}
                            height={200}
                            className="rounded-lg  object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/biodiverse/movie_ui.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg  object-contain row-span-3 h-[75%] md:h-[50%] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/biodiverse/fotbar_bio.jpg"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-[75%] md:h-[50%] lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2022",
            content: (
                <div>
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">2022 Exprience</h1>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Joined Bina Nusantara University
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Joined BNCC As an Activist
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Maintaining 3.54 Gpa In 2022 first year of my college.
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
