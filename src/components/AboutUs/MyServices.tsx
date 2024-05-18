import Image from "next/image";

// Define an array of service objects
const services = [
  {
    title: "UI/UX",
    description: "Ability to conduct user research and testing to inform design decisions Proven track record of delivering high-quality designs that meet business goals and exceed customer expectations.",
    icon: "pen.svg",
    width: 30,
    height: 30
  },
  {
    title: "Frontend Development",
    description: "Experience specializing in frontend development and ReactJs. Adept at identifying opportunities to enhance front-end design and improve the UX.",
    icon: "development.svg",
    width: 35,
    height: 35
  },
  {
    title: "Visual & Motion Graphics",
    description: "I have love to Create a Motion and Visual effects like video effects, logo animations, typography effects with smooth transitions. ",
    icon: "pen.svg",
    width: 30,
    height: 30
  },
  {
    title: "3D & 4D Modeling",
    description: "I have love to create a 3D Modeling also and animating too, And i have learn best practises for this in blender. I thanks to blender for this to give us for free opportunities to learn the 3d world.",
    icon: "3d.svg",
    width: 35,
    height: 35,
    badge: "Coming Soon" // Add badge only for the last service
  },
  // Add more service objects as needed
];

export default function MyServices() {
    return (
        <>
            <div className="border-b border-slate-700/50 p-6">
                <h2 className="text-2xl">My Services</h2>
            </div>
            <div className="grid grid-cols-2">
                {services.map((service, index) => (
                    <div key={index} className="p-8 border-r border-b border-slate-700/50">
                        <div className="card relative border border-slate-700/50 px-4 py-6 bg-gray-800/10 rounded-3xl">
                            <div className="icon rounded-full bg-green-900/10 w-16 h-16 flex items-center justify-center mb-3">
                                <Image src={service.icon} alt="" width={service.width} height={service.height} className=""/>
                            </div>
                            <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                            <p className="text-sm">{service.description}</p>
                            {index === services.length - 1 && ( // Conditionally render badge only for the last service
                              <span className="badge overflow-hidden absolute top-3 right-3 bg-green-500/10 border border-green-500 rounded-md text-xs px-2 py-1 text-green-500 before:content:[''] before:opacity-5 before:absolute before:bg-white before:w-full before:h-full before:top-0">{service.badge}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
