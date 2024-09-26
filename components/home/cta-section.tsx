import React from 'react'
import { WobbleCard } from "@/components/ui/wobble-card";

export const CtaSection = () => {
    return (
        <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto w-full p-8">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[4=00px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Curriculum vitae
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Take a look at my profesional document that describe my journey as a developer.
                    </p>
                </div>
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 lg:col-span- min-h-[400px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    PDF Portofolio
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                </p>

            </WobbleCard>

            <WobbleCard containerClassName="col-span-1  bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Instagram
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1  bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        LinkedIn
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1  bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Github
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
            </WobbleCard>

        </div>
    )
}
