'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from "@/components/EmblaSlider/EmblaCarousel";
import Link from "next/link";
import CursorFollow from '@/components/CursorFollow';
import { Behance, Dribbble, Github, Linkedin, CloudDownload, Telephone } from 'react-bootstrap-icons';

const OPTIONS: EmblaOptionsType = { axis: 'y' };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const images = [
  { icon: <Linkedin size={18} className="text-green-400" />, link: 'https://www.linkedin.com/in/lakhbir-singh-643b5418b/' },
  { icon: <Github size={20} className="text-green-400" />, link: 'https://github.com/lakhbirsingh1' },
  { icon: <Behance size={20} className="text-green-400" />, link: 'https://www.behance.net/lakhbirsingh6' },
  { icon: <Dribbble size={18} className="text-green-400" />, link: 'https://dribbble.com/singh11w' },
];

export default function Home() {
  const titles = ['UI/UX Designer', 'Smart with AI Tools', 'Frontend Developer', 'Animations', 'Motion Graphics', '3D Soon!'];
  const [title, setTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing animation
      if (charIndex < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setTitle((prev) => prev + currentTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeoutId = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      // Deleting animation
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setTitle((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <main className="flex p-5 min-h-screen flex-col items-center justify-center bg-no-repeat bg-cover bg-[url('/images/banner-bg.png')]">
      <div className="absolute -z-1 right-0 top-0 w-1/2 h-1/2 bg-gradient-to-r from-gray-800/30 from-10% via-green-500/20 via-30% to-green-800/30 to-90% blur-xl rounded-full"></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-r from-green-500/30 from-10% via-green-500/30 via-30% to-gray-800/30 to-90% blur-3xl rounded-full"></div>
      
      <div className="max-w-[1600px] relative">
        <div className="lg:flex pt-20 lg:pt-0">
          {/* Profile Section */}
          <div className="rounded-3xl lg:h-auto h-96 w-full relative glitch transform rotate-y-6 overflow-hidden lg:max-w-lg flex-auto before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/60 before:z-10">
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>

            <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 bg-gradient-to-t from-gray-900 to-black-500 p-5 z-10">
              <h2 className="text-center text-4xl text-white font-extrabold">Lakhbir Singh</h2>
              <h4 className="text-center text-2xl font-bold text-green-400">{title}<span className="animate-dot inline-block w-3 h-3 bg-green-400 rounded-full ml-1"></span></h4>
              
              {/* Social Icons */}
              <div className="flex gap-4 items-center justify-center py-5">
                {images.map((image, index) => (
                  <Link key={index} href={image.link} target="_blank" className="hover:scale-110 transition-transform">
                    {image.icon}
                  </Link>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between border-t border-slate-400">
                <Link href="/documents/resume.pdf" download className="w-1/2 p-3 flex gap-3 uppercase font-semibold justify-center hover:text-green-500 transition text-white">
                  Download CV
                  <CloudDownload size={20} />
                </Link>
                <Link href="tel:+919466667767" className="w-1/2 border-l border-slate-400 p-3 flex gap-3 uppercase font-semibold justify-center hover:text-green-500 transition text-white">
                  Contact Me
                  <Telephone size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="flex-1">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>

      <CursorFollow />
    </main>
  );
}
