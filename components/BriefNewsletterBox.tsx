"use client";

import React from 'react';

export default function BriefNewsletterBox() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-4 pb-16">
      <div className="w-full bg-[#fdfdfd] border border-gray-200 border-t-[4px] border-t-[#3b8599] p-6 md:p-8 md:pt-6 md:pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]">
        
        <h3 className="text-center text-black font-black text-[18px] md:text-[20px] tracking-wide uppercase mb-6 md:mb-8 font-[Arial,sans-serif]">
          The best of the tribune in your inbox
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          
          <div className="flex items-end shrink-0 select-none">
            <div className="flex items-center justify-center bg-[#ffcc00] w-[46px] h-[46px] mb-1">
              <span 
                className="italic text-[26px] text-zinc-900 mt-1" 
                style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", transform: "rotate(-5deg)" }}
              >
                The
              </span>
            </div>
            
            <span 
              className="text-[#2b323c] font-black text-5xl md:text-[60px] leading-none uppercase tracking-tighter ml-2" 
              style={{ transform: 'scaleY(1.15)', transformOrigin: 'bottom' }}
            >
              BRIEF
            </span>
          </div>

          <div className="flex flex-col w-full max-w-[500px]">
            <p className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed mb-4 font-[Arial,sans-serif]">
              Keep tabs on Texas politics and policy with our morning newsletter.
            </p>
            
            <form className="flex w-full h-[40px] md:h-[42px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="flex-1 border border-gray-300 bg-white px-3 md:px-4 text-[13.5px] text-gray-800 placeholder:text-[#999] focus:outline-none focus:border-[#3b8599] transition-colors rounded-none"
              />
              <button 
                type="submit" 
                className="bg-black text-white px-6 md:px-8 font-bold text-[11px] md:text-[12px] uppercase tracking-wider hover:bg-gray-800 transition-colors rounded-none ml-[-1px]"
              >
                Sign Up
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
