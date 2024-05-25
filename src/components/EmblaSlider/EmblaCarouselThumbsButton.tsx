import React from 'react';
import Image from 'next/image'; // Import Image component from next/image
import { PersonCircle, FileEarmarkText, SuitcaseLg, Envelope } from 'react-bootstrap-icons';

const slideContent = [
  {
    icon: <PersonCircle className='text-green-500' size={24} />,
    text: "About Us"
  },
  {
    icon: <FileEarmarkText className='text-green-500' size={24} />,
    text: "Resume"
  },
  {
    icon: <SuitcaseLg className='text-green-500' size={24} />,
    text: "Project"
  },
  {
    icon: <Envelope className='text-green-500' size={24} />,
    text: "Contact Us"
  }
];

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props;
  const content = slideContent[index];

  return (
    <div
      className={`embla-thumbs__slide p-3 ${selected ? ' embla-thumbs__slide--selected' : ''}`}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number size-full"
      >
        <div className="flex items-center flex-col">
          {content.icon}
          <h6 className="mt-3 text-sm max-w-md">{content.text}</h6>
        </div>
      </button>
    </div>
  );
};
