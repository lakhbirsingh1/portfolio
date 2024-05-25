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

// Array of objects containing image URLs and links
const images = [
  { icon: <Linkedin className='' size={18} />, link: 'https://www.linkedin.com/in/lakhbir-singh-643b5418b/' },
  { icon: <Github className='' size={20} />, link: 'https://github.com/lakhbirsingh1' },
  { icon: <Behance className='' size={20} />, link: 'https://www.behance.net/lakhbirsingh6' },
  { icon: <Dribbble className='' size={18} />, link: 'https://dribbble.com/singh11w' },
];

export default function Home() {
  const [title, setTitle] = useState('');
  const titles = ['Web Designer', 'Web Developer', 'Motion Graphic'];
  const [titleIndex, setTitleIndex] = useState(0);
  const intervalDuration = 100;
  const cursorBlinkDuration = 500;

  useEffect(() => {
    let charIndex = 0;
    let typingIntervalId: NodeJS.Timeout;
    let cursorIntervalId: NodeJS.Timeout;

    const startTyping = () => {
      if (charIndex <= titles[titleIndex].length) {
        setTitle(titles[titleIndex].slice(0, charIndex) + '|');
        charIndex++;
      } else {
        clearInterval(typingIntervalId);
        setTimeout(() => {
          cursorIntervalId = setInterval(() => {
            setTitle((prevTitle) => (prevTitle.endsWith('|') ? prevTitle.slice(0, -1) : prevTitle + '|'));
          }, cursorBlinkDuration);
        }, cursorBlinkDuration);
      }
    };

    typingIntervalId = setInterval(startTyping, intervalDuration);

    return () => {
      clearInterval(typingIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, [titleIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, titles.length * intervalDuration * 2);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex p-5 min-h-screen flex-col items-center justify-between bg-no-repeat bg-cover bg-[url('/images/banner-bg.png')]">
      <div className="absolute -z-1 right-0 top-0 w-1/2 h-1/2  bg-gradient-to-r from-gray-800/30 from-10% via-green-500/20 via-30% to-green-800/30 to-90% blur-xl rounded-full bg-blend-darken"></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2  bg-gradient-to-r from-green-500/30 from-10% via-green-500/30 via-30% to-gray-800/30 to-90% blur-3xl rounded-full bg-blend-darken"></div>
      <div className="container relative">
        <div className="lg:flex pt-20 lg:pt-0">
          <div className="rounded-3xl lg:h-auto h-96 w-full col-span-1 relative glitch transform rotate-y-6 overflow-hidden lg:max-w-lg flex-auto">
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="bg-[url('/images/dp.png')] glitch-item"></div>
            <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 bg-gradient-to-t from-gray-900 to-black-500">
              <h2 className="w-full text-center text-4xl mb-2 font-extrabold">Lakhbir Singh</h2>
              <h4 className="w-full text-center text-2xl mb-4 font-bold text-green-400">{title}</h4>
              <div className="flex gap-4 items-center justify-center pb-5">
                {images.map((image, index) => (
                  <Link key={index} href={image.link}>
                    {image.icon}
                  </Link>
                ))}
              </div>
              <div className="flex justify-between border-t border-slate-400">
                <button className="w-1/2 p-3">
                  <Link href="/documents/resume.pdf" download className="flex gap-3 uppercase font-semibold justify-center">
                    Download CV
                    <CloudDownload className='' size={20} />
                  </Link>
                </button>
                <Link href="tel:+919466667767" className="w-1/2 border-l border-slate-400 p-3 flex gap-3 uppercase font-semibold justify-center">
                  Contact Me
                  <Telephone className='' size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
      <CursorFollow />
    </main>
  );
}
