'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Languages() {
    // Initial array of language skills
    const initialLanguages = [
        {
            title: "Languages", // Title for the section
            name: "Punjabi",
            icon: "ekonkar.svg",
            width: 35,
            height: 35,
            percentage: 90,
            bars: Array.from({ length: 10 }, (_, index) => ({
                filled: index < Math.floor(10 * (75 / 100)) // Fill bars based on the percentage value
            }))
        },
        {
            name: "Hindi",
            icon: "india.svg",
            width: 35,
            height: 35,
            percentage: 90,
            bars: Array.from({ length: 10 }, (_, index) => ({
                filled: index < Math.floor(10 * (75 / 100)) // Fill bars based on the percentage value
            }))
        },
        {
            name: "English",
            icon: "english.svg",
            width: 35,
            height: 35,
            percentage: 85,
            bars: Array.from({ length: 10 }, (_, index) => ({
                filled: index < Math.floor(10 * (75 / 100)) // Fill bars based on the percentage value
            }))
        },
        {
            name: "Spanish",
            icon: "spanish.svg",
            width: 35,
            height: 35,
            percentage: 25,
            bars: Array.from({ length: 10 }, (_, index) => ({
                filled: index < Math.floor(10 * (75 / 100)) // Fill bars based on the percentage value
            }))
        },
        {
            name: "French",
            icon: "french.svg",
            width: 35,
            height: 35,
            percentage: 25,
            bars: Array.from({ length: 10 }, (_, index) => ({
                filled: index < Math.floor(10 * (75 / 100)) // Fill bars based on the percentage value
            }))
        },
        // Add more languages as needed
    ];

    const [languages, setLanguages] = useState(initialLanguages);

    useEffect(() => {
        // Simulate percentage change
        const interval = setInterval(() => {
            setLanguages(prevLanguages => {
                return prevLanguages.map(language => {
                    const filledBarsCount = Math.floor(10 * (language.percentage / 100)); // Calculate the number of filled bars
                    const updatedBars = language.bars.map((bar, index) => ({
                        ...bar,
                        filled: index < filledBarsCount // Update filled status based on the calculated count
                    }));
                    return {
                        ...language,
                        bars: updatedBars
                    };
                });
            });
        }, 3000); // Change percentage every 3 seconds

        return () => clearInterval(interval);
    }, []); // Run effect only once

    return (
        <>
            {languages.map((language, index) => (
                <div key={`language-${index}`} className="mb-4">
                    <h2 className="text-2xl text-white flex gap-2 mb-5">{language.title}</h2>
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-gray-500/10 rounded-xl flex items-center justify-center border border-gray-600/30">
                            <Image src={language.icon} alt="" width={language.width} height={language.height} className="" />
                        </div>
                        <div className="grow">
                            <div className="flex flex-col gap-2 w-full max-w-md">
                                <div className="flex justify-between">
                                    <h4 className="text-sm text-white">{language.name}</h4>
                                    <span className="text-sm text-white">{language.percentage}%</span>
                                </div>
                                <div className="progress-bar flex gap-2">
                                    {language.bars.map((bar, barIndex) => (
                                        <span
                                            key={barIndex}
                                            style={{ width: `${10}%` }}
                                            className={`h-3 rounded-full inline-block ${bar.filled ? 'bg-green-600' : 'bg-gray-600'}`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}




