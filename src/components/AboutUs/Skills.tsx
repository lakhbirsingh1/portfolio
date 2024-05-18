import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

const Skills = () => {
  const sections: { title: string; content: string | string[] | Skill[] }[] = [
    { title: "Location", content: "Ambala Cantt, Haryana" },
    { title: "Languages", content: ["English", "Punjabi", "Hindi"] },
    {
      title: "Skills",
      content: [
        { name: "HTML", icon: "skills/html.svg" },
        { name: "CSS 3", icon: "skills/css.svg" },
        { name: "Bootstrap", icon: "skills/bootstrap.svg" },
        { name: "Tailwind", icon: "skills/tailwind.svg" },
        { name: "Figma", icon: "skills/figma.svg" },
        { name: "Photoshop", icon: "skills/photoshop.svg" },
        { name: "Illustrator", icon: "skills/ai.svg" },
        { name: "After Effects", icon: "skills/ae.svg" },
        { name: "Premier Pro", icon: "skills/pr.svg" },
        { name: "React JS", icon: "skills/react.svg" },
        { name: "Shopify", icon: "skills/shopify.svg" },
        { name: "Webflow", icon: "skills/webflow.svg" },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div key={index} className="flex justify-between items-start p-6">
          <span className="bg-green-500 text-sm px-2 rounded text-neutral-800">{section.title}:</span>
          <div className="flex gap-3 flex-wrap justify-end max-w-72">
            {section.title === "Skills" ? (
              (section.content as Skill[]).map((skill, index) => (
                <div key={index} className="relative group icon rounded-lg bg-green-900/20 w-9 h-9 flex items-center justify-center">
                  <Image src={skill.icon} alt={skill.name} width={20} height={20} className="m-auto" />
                  <span className="absolute w-max uppercase top-0 translate-y-0 text-sm bg-gray-800 px-2 py-1 rounded transition duration-150 ease-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-8 after:absolute after:content-[''] after:left-1/2 after:-bottom-0.5 after:w-1.5 after:h-1.5 after:bg-gray-800 after:-z-10 after:rotate-45 after:-translate-x-1/2">{skill.name.toLowerCase()}</span>
                </div>
              ))
            ) : (
              <h3 className="text-sm">{Array.isArray(section.content) ? section.content.join(", ") : section.content}</h3>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
