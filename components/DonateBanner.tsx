import React from 'react';

export default function DonateBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-16">
      <div className="w-full bg-[#1f1f1f] py-12 px-6 sm:px-12 flex flex-col items-center text-center shadow-md">
        
        {/* Logo Section */}
        <div className="flex items-center gap-[8px] mb-6 select-none">
          {/* Yellow Square with Heart (Speech Bubble) */}
          <div className="relative flex items-center justify-center w-[20px] h-[20px] md:w-[24px] md:h-[24px] bg-[#ffcc00] shrink-0 mt-[2px]">
             <svg viewBox="0 0 24 24" fill="#E62C2C" className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] z-10 mt-[2px]">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
             </svg>
             {/* Speech bubble notch */}
             <div className="absolute -bottom-[5px] left-0 w-0 h-0 border-t-[6px] border-t-[#ffcc00] border-r-[7px] border-r-transparent"></div>
          </div>

          {/* Logo Text */}
          <span className="text-white font-black text-[22px] md:text-[26px] uppercase tracking-tighter leading-none pr-1 scale-y-[1.1] transform origin-bottom font-[Arial,sans-serif]">
            The Texas Tribune
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-white font-bold font-[Georgia,serif] text-[22px] md:text-[30px] lg:text-[34px] leading-tight mb-4 tracking-wide">
          Protect independent Texas journalism.
        </h2>

        {/* Description */}
        <p className="text-white text-[14px] md:text-[15.5px] font-[Arial,sans-serif] mb-8 font-medium max-w-[840px] tracking-wide">
          You deserve trusted news, and so do all Texans. Give today to support the reporting that keeps Texans informed.
        </p>

        {/* Donate Button */}
        <button className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-bold uppercase tracking-wider text-[11px] md:text-[12px] px-8 py-[12px] transition-colors mb-2 rounded-none">
          Donate Now
        </button>

      </div>
    </section>
  );
}
