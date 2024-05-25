import Image from "next/image";
import { DiscFill, CupHotFill } from 'react-bootstrap-icons';

const funFactsData = [
    {
        icon: <DiscFill className='text-green-500' size={30} />,
        text: "100+ Albums Listened"
    },
    {
        icon: <CupHotFill className='text-green-500' size={30} />,
        text: "1 000+ Cups Of Green Tea"
    },
    {
        icon: "/football.svg", // Assuming football.svg is in the public folder
        text: "Love To Play Football",
        width: 30, // Providing numerical values for width and height
        height: 30
    },
    {
        icon: "/fitness.svg", // Assuming fitness.svg is in the public folder
        text: "Fitness",
        width: 35, // Providing numerical values for width and height
        height: 35
    }
];

export default function FunFacts() {
    return (
        <>
            <div className="border-b border-slate-700/50 p-6">
                <h2 className="text-2xl">Fun Facts</h2>
            </div>
            <div className="grid grid-cols-4">
                {funFactsData.map((fact, index) => (
                    <div key={index} className="p-5 py-8 border-r border-slate-700/50 flex items-center flex-col text-center">
                        {typeof fact.icon === 'string' ? (
                            <Image src={fact.icon} alt="" width={fact.width} height={fact.height} className="mx-auto" />
                        ) : (
                            fact.icon
                        )}
                        <h6 className="mt-3 text-sm max-w-32">{fact.text}</h6>
                    </div>
                ))}
            </div>
        </>
    );
}
