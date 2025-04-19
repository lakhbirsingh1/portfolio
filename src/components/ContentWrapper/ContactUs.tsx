import { Syne } from "next/font/google";
import { ArrowUpRight, Linkedin, Github, Behance, Dribbble } from 'react-bootstrap-icons';
import Link from "next/link";


// Call the Syne function and assign it to a constant outside of the component function
const SyneFont = Syne({
  weight: "800",
  subsets: ["latin"],
});

export default function ContactUS() {
  const images = [
    {
      icon: <Linkedin className='text-green-500' size={18} />,
      link: 'https://www.linkedin.com/in/lakhbir-singh-643b5418b/'
    },
    {
      icon: <Github className='text-green-500' size={18} />,
      link: 'https://github.com/lakhbirsingh1'
    },
    {
      icon: <Behance className='text-green-500' size={20} />,
      link: 'https://www.behance.net/lakhbirsingh6'
    },
    {
      icon: <Dribbble className='text-green-500' size={18} />,
      link: 'https://dribbble.com/singh11w'
    },
  ];


  const contactMethods = [
    {
      title: "Looking for a hectic designer?",
      content: "singh.lakhbir767@gmail.com",
      link: "mailto:singh.lakhbir767@gmail.com",
      icon: <ArrowUpRight className='text-green-500' size={25} />,
    },
    {
      title: "Want a more in-depth look at my history?",
      content: "+91-94666-67767",
      link: "tel:+919466667767",
      icon: <ArrowUpRight className='text-green-500' size={25} />,
    },
  ];

  return (
    <>
      <div className="border-b border-slate-700/50 p-6 flex justify-between">
        <h2 className="text-2xl text-white">Get In Touch</h2>
      </div>
      <div className="grid p-6">
        <div>
          <h2 className={`${SyneFont.className} text-5xl text-white font-black mb-3`}>Let’s work together</h2>
          <div className="flex items-center gap-3 mb-8">
            <p className="text-xl text-white">Based in India | </p>
            {images.map((image, index) => (
              <div key={index} className="icon">
                <Link href={image.link} target="_blank" rel="noopener noreferrer">
                  {image.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="card relative border border-slate-700/50 px-4 py-6 bg-gray-800/10 rounded-3xl mb-5">
              <h3 className="text-xl text-white mb-5 font-bold max-w-64">{method.title}</h3>
              <Link className="text-base text-white flex items-center justify-between" href={method.link} target="_blank" rel="noopener noreferrer">
                {method.content}
                <div className="rounded-full border border-green-500 w-12 h-12 flex items-center justify-center">
                  {method.icon}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h2 className={`${SyneFont.className} text-[85px] text-white fugza font-black `}>LAKHBIR SINGH</h2>
      </div>
    </>
  );
}
