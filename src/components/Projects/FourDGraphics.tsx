import Image from "next/image";
import { ArrowUpRight } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";


export default function FourDGraphics() {
    const experienceSections = [
        {
            items: [
                {
                    image: "/images/projects/3.jpg",
                    company: "App",
                    description: "Investment Mobile Application",
                    url: "https://www.behance.net/lakhbirsingh6",
                },
                {
                    image: "/images/projects/1.jpg",
                    company: "App",
                    description: "Investment Mobile Application",
                    url: "https://www.behance.net/lakhbirsingh6",
                },
                {
                    image: "/images/projects/1.jpg",
                    company: "App",
                    description: "Investment Mobile Application",
                    url: "https://www.behance.net/lakhbirsingh6",
                },
            ]
        },
    ];

    const educationSections = [
        {
            items: [
                {
                    image: "/images/projects/1.jpg",
                    company: "App",
                    description: "Investment Mobile Application",
                    url: "https://www.behance.net/lakhbirsingh6",
                },
                {
                    image: "/images/projects/1.jpg",
                    company: "App",
                    description: "Investment Mobile Application",
                    url: "https://www.behance.net/lakhbirsingh6",
                },
            ]
        },
    ];

    return (
        <>
            <div className="grid grid-cols-2">
                {experienceSections.map((section, index) => (
                    <div key={index} className="p-8 border-r border-b border-slate-700/50">

                        <div className="relative">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="card group ease-in  duration-500 relative border border-slate-700/50 px-4 py-6 bg-gray-800/10 rounded-3xl mb-5">
                                    <a href={item.url}>
                                        <div className="overflow-hidden rounded-xl">
                                            {item.image && <Image src={item.image} alt="" width={100} height={100} className="w-full rounded-xl ease-in  duration-500 delay-150 group-hover:scale-110 grayscale group-hover:grayscale-0" />}
                                        </div>
                                        <h6 className="text-base text-gray-400 mb-2 mt-5">{item.company}</h6>
                                        <div className="text-base flex items-center justify-between">
                                            <h3 className="text-lg group-hover:text-green-500 ease-in  duration-500">{item.description}</h3>
                                            <div className="rounded-full border border-gray-600 group-hover:border-green-500 min-w-10 w-10 h-10 flex items-center justify-center ease-in  duration-500">
                                                <ArrowUpRight className='group-hover:text-green-500 text-gray-500 ease-in  duration-500' size={20} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {educationSections.map((section, index) => (
                    <div key={index} className="p-8 border-r border-b border-slate-700/50">

                        <div className="relative">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="card group ease-in  duration-500 relative border border-slate-700/50 px-4 py-6 bg-gray-800/10 rounded-3xl mb-5">
                                    <a href={item.url}>
                                        <div className="overflow-hidden rounded-xl">
                                            {item.image && <Image src={item.image} alt="" width={100} height={100} className="w-full rounded-xl ease-in  duration-500 delay-150 group-hover:scale-110 grayscale group-hover:grayscale-0" />}
                                        </div>
                                        <h6 className="text-base text-gray-400 mb-2 mt-5">{item.company}</h6>
                                        <div className="text-base flex items-center justify-between">
                                            <h3 className="text-lg group-hover:text-green-500 ease-in  duration-500">{item.description}</h3>
                                            <div className="rounded-full border border-gray-600 group-hover:border-green-500 min-w-10 w-10 h-10 flex items-center justify-center ease-in  duration-500">
                                                <ArrowUpRight className='group-hover:text-green-500 text-gray-500 ease-in  duration-500' size={20} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
