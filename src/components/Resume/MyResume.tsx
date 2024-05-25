import Image from "next/image";

export default function MyResume() {
    const experienceSections = [
        {
            sectionTitle: "Experience",
            items: [
                {
                    tag: "2024",
                    title: "Web Designer",
                    company: "Teq Mavens",
                    description: "I have lucky to a part of the team of the TeqMavens, Love to work here. And i have learn to many things here. Whether it is related to work or other things, we work like family members. ",
                },
                {
                    tag: "2021 - 2023",
                    title: "Web Designer",
                    company: "Upbrighter Services",
                    description: "Love to work here. And i have learn to many things here. Whether it is related to work or other things, we work like family members.",
                },
                {
                    tag: "2019 - 2021",
                    title: "Web Designer",
                    company: "Aquasoft Solutions",
                    description: "That's was my startup 😊 Love to work here. And i have learn to many things here. Whether it is related to work or other things, we work like family members.",
                },
            ]
        },
    ];

    const educationSections = [
        {
            sectionTitle: "Education",
            items: [
                {
                    tag: "2008 - 2009",
                    title: "10th C.B.S.E Board",
                    company: "Ambala Cantt",
                    description: "All Subjects, We know very well. 😜",
                },
                {
                    tag: "2010 - 2011",
                    title: "12th C.B.S.E Board",
                    company: "Ambala Cantt",
                    description: "Streaming Arts.",
                }
            ]
        },
    ];

    return (
        <>
            <div className="border-b border-slate-700/50 p-6">
                <h2 className="text-2xl">Resume</h2>
            </div>
            <div className="grid grid-cols-2">
                {experienceSections.map((section, index) => (
                    <div key={index} className="p-8 pl-10 border-r border-b border-slate-700/50">
                        <h2 className="text-2xl flex gap-2 mb-3">
                            <Image src="bag.svg" alt="" width={24} height={24} className="" />
                            {section.sectionTitle}
                        </h2>
                        <div className="relative before:absolute before:top-4 before:rounded-full before:left-[-.3em] before:bg-gray-700 before:bottom:0 before:w-px before:h-full">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="card relative border border-slate-700/50 px-4 py-6 bg-gray-800/10 rounded-3xl mb-5 after:content-[''] after:absolute after:top-4 after:rounded-full after:left-[-.36em] after:bg-gray-500 first-of-type:after:bg-green-500 after:w-2 after:h-2 first-of-type:before:content-[''] first-of-type:before:absolute first-of-type:before:top-4 first-of-type:before:rounded-full first-of-type:before:left-[-.36em] first-of-type:before:bg-gray-500 first-of-type:before:bg-green-500 first-of-type:before:w-2 first-of-type:before:h-2 first-of-type:before:animate-ping">
                                    <span className="text-sm mb-2 inline-block border border-gray-600 px-2 rounded text-gray-600">{item.tag}</span>
                                    <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                                    <h6 className="text-sm text-gray-400 mb-3">{item.company}</h6>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


                {educationSections.map((section, index) => (
                    <div key={index} className="p-8 pl-10 border-r border-b border-slate-700/50">
                        <h2 className="text-2xl flex gap-2 mb-3">
                            <Image src="building.svg" alt="" width={24} height={24} className="" />
                            {section.sectionTitle}
                        </h2>
                        <div className="relative before:absolute before:top-4 before:rounded-full before:left-[-.3em] before:bg-gray-700 before:bottom:0 before:w-px before:h-full">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="card relative border border-slate-700/50 px-4 py-6 bg-gray-800/10 rounded-3xl mb-5 after:content-[''] after:absolute after:top-4 after:rounded-full after:left-[-.36em] after:bg-gray-500 after:w-2 after:h-2">
                                    <span className="text-sm mb-2 inline-block border border-gray-600 px-2 rounded text-gray-600">{item.tag}</span>
                                    <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                                    <h6 className="text-sm text-gray-400 mb-3">{item.company}</h6>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
