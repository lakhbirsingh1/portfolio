"use client";

import { useEffect, useState } from "react";

const fullText = "✨ Bigger screen, better vibes \n visit us on a laptop, desktop browser! 😎🖥️";

export default function MobileWarning() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Toggle cursor blink
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="Alert min-h-screen flex justify-center items-center animated-bg">
      <h1 className="text-4xl text-white text-center font-bold px-4 whitespace-pre-wrap">
        {displayedText}
        {displayedText.length < fullText.length && (
          <span className="inline-block w-[10px] h-[30px] align-middle">
            <span className={`inline-block w-[20px] h-[20px] rounded-full bg-white ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
          </span>
        )}
      </h1>
    </div>
  );
}
