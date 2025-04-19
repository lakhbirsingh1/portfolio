import Image from "next/image";
import { Progress } from "@nextui-org/react";

export default function GeneralSkills() {

    // Array of skills
    const skills = [
        {
            title: "Coding", // Title for the section
            name: "HTML",
            icon: "html.svg",
            width: 24,
            height: 24,
            value: 90
        },
        {
            name: "CSS",
            icon: "css.svg",
            width: 24,
            height: 24,
            value: 90
        },
        {
            name: "Bootstrap",
            icon: "/images/bootstrap.png",
            width: 32,
            height: 32,
            value: 85
        },
        {
            name: "Tailwind",
            icon: "tailwind.svg",
            width: 27,
            height: 27,
            value: 85
        },
        {
            name: "React Js",
            icon: "react.svg",
            width: 24,
            height: 24,
            value: 70
        },
        // Add more skills as needed
    ];

    return (
        <>
            {skills.map((skill, index) => (
                <div key={`skill-${index}`} className="mb-4">
                    <h2 className="text-2xl text-white flex gap-2 mb-5">{skill.title}</h2>
                    <div className="flex gap-5">
                        <div className="w-16 h-16 bg-gray-500/10 rounded-xl flex items-center justify-center border border-gray-600/30">
                            <Image src={skill.icon} alt="" width={skill.width} height={skill.height} className="" />
                        </div>
                        <div className="grow">
                            <Progress
                                size="md"
                                radius="lg"
                                classNames={{
                                    base: "max-w-md",
                                    track: "drop-shadow-md bg-gray-700/90",
                                    indicator: "!bg-green-600",
                                    label: "tracking-wider font-medium text-lg text-white",
                                    value: "text-white font-medium text-lg text-white",
                                }}
                                label={skill.name}
                                value={skill.value}
                                showValueLabel={true}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
