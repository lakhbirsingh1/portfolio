import React from 'react';
import { PersonCircle, FileEarmarkText, SuitcaseLg, Envelope } from 'react-bootstrap-icons';

const slideContent = [
  {
    icon: PersonCircle,
    text: "About Us"
  },
  {
    icon: FileEarmarkText,
    text: "Resume"
  },
  {
    icon: SuitcaseLg,
    text: "Project"
  },
  {
    icon: Envelope,
    text: "Contact Us"
  }
];

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = ({ selected, index, onClick }) => {
  const content = slideContent[index];
  const IconComponent = content.icon; // Get the corresponding icon

  return (
    <div
      className={`embla-thumbs__slide p-3 transition-all duration-300 ${
        selected ? 'embla-thumbs__slide--selected' : ''
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className={`embla-thumbs__slide__number w-full transition-all duration-300 flex flex-col items-center 
          ${selected ? 'text-white scale-105' : 'text-gray-700'}
        `}
      >
        <div className="flex items-center flex-col">
          <IconComponent
            size={24}
            className={`transition-all duration-300 ${
              selected ? 'text-green-500' : 'text-gray-500'
            }`}
          />
          <h6 className={`mt-3 text-sm font-semibold ${selected ? 'text-white' : 'text-gray-500'}`}>
            {content.text}
          </h6>
        </div>
      </button>
    </div>
  );
};
