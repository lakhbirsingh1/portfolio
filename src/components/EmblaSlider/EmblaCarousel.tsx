'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { Thumb } from './EmblaCarouselThumbsButton';
import useEmblaCarousel from 'embla-carousel-react';
import WrapAboutUs from '../ContentWrapper/WrapAboutUs';
import WrapResume from '../ContentWrapper/WrapResume';

import ContactUS from '../ContentWrapper/ContactUs';
import Project from '../Projects/Project';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  const handleSliderAction = (index: number) => {
    // Your slider action logic here
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slideIndex) => (
            <div className="embla__slide" key={slideIndex}>
              <div className="embla__slide__number">
                <div className="rounded-2xl rounded-br-2xl backdrop-blur-xl bg-gradient-to-r to-gray-900 border-slate-700/50 border overflow-hidden">
                  <div className="max-h-[620px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100">
                    {(slideIndex === 0 && <WrapAboutUs />) || 
                     (slideIndex === 1 && <WrapResume />) || 
                     (slideIndex === 2 && <Project />) || 
                     (slideIndex === 3 && <ContactUS />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs lg:absolute lg:top-16 lg:-left-6 lg:right-auto fixed top-0 left-0 right-0 transform rotate-y-6">
        <div className="embla-thumbs__viewport relative z-10" ref={emblaThumbsRef}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70 lg:rounded-3xl backdrop-blur-xl lg:border lg:border-gray-500"></div>
          <div className="embla-thumbs__container relative z-10 lg:flex lg:flex-col grid gap-4 grid-cols-4">
            {slides.map((slideIndex)  => (
              <Thumb
                key={slideIndex}
                onClick={() => onThumbClick(slideIndex)}
                selected={slideIndex === selectedIndex}
                index={slideIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
