import Image from "next/image";
import React from "react";
import { CircularProgress } from "@nextui-org/react";

const ToolStackData = [
    {
        icon: "photoshop.svg",
        text: "Photoshop",
        progress: {
            value: 80,
        }
    },
    {
        icon: "ai.svg",
        text: "illustrator",
        progress: {
            value: 70,
        }
    },
    {
        icon: "figma.svg",
        text: "Figma",
        progress: {
            value: 85,
        }
    },
    {
        icon: "ae.svg",
        text: "After Effects",
        progress: {
            value: 50,
        }
    },
    {
        icon: "p-pro.svg",
        text: "Premier Pro",
        progress: {
            value: 70,
        }
    },
    {
        icon: "webflow.svg",
        text: "Webflow",
        progress: {
            value: 70,
        }
    },
    {
        icon: "shopify.svg",
        text: "Shopify",
        progress: {
            value: 80,
        }
    },
    {
        icon: "nextjs.svg",
        text: "Next JS",
        progress: {
            value: 60,
        }
    },

];

export default function ToolStack() {
    return (
        <>
            <div className="border-b border-slate-700/50 p-6">
                <h2 className="text-2xl">Tool Stack</h2>
            </div>
            <div className="grid grid-cols-4 gap-8 p-6">
                {ToolStackData.map((tool, index) => (
                    <div key={index} className="p-5 py-8 border border-slate-700/50 rounded-xl text-center bg-neutral-900/30">
                        <div className="relative flex items-center flex-col">
                        <Image src={tool.icon} alt="" width={35} height={35} className="mb-[-3.3rem] m-auto" />
                        <CircularProgress
                            key={index}
                            value={tool.progress.value}
                            classNames={{
                                svg: "w-24 h-24 drop-shadow-md",
                                indicator: "stroke-green-600",
                                track: "stroke-white/10",
                                value: "text-sm text-white bottom-[-2.8rem]",
                            }}
                            strokeWidth={1.5}
                            showValueLabel={true}
                        />
                        </div>
                        <h6 className="mt-3 text-sm">{tool.text}</h6>
                
                    </div>
                ))}
            </div>
        </>
    );
}
