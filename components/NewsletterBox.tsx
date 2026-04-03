"use client";

import React from 'react';

export default function NewsletterBox() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-2 pb-16">
      <div className="w-full bg-[#fdfdfd] border border-gray-200 border-t-[4px] border-t-[#3b8599] p-6 md:p-10 md:pt-8 md:pb-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]">
        
        <h3 className="text-center text-black font-black text-[18px] md:text-[20px] tracking-wide uppercase mb-6 md:mb-8 font-[Arial,sans-serif]">
          The best of the tribune in your inbox
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Logo Area */}
          <div className="flex items-end shrink-0 select-none">
            {/* 'the' in script font */}
            <span 
              className="italic text-4xl md:text-[42px] text-zinc-800 mr-1 md:mr-2 -mb-2 md:-mb-3" 
              style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
            >
              The
            </span>
            {/* 'Y'ALL' tall and bold */}
            <span 
              className="text-black font-black text-5xl md:text-[64px] leading-none uppercase tracking-tighter" 
              style={{ transform: 'scaleY(1.15)', transformOrigin: 'bottom' }}
            >
              Y'ALL
            </span>
          </div>

          {/* Text and Form Area */}
          <div className="flex flex-col max-w-[620px]">
            <p className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed mb-4 font-[Arial,sans-serif]">
              The Y'all is a weekly dispatch about the people, places and policies that define
              the state of Texas. Produced by Texas Tribune journalists embedded in
              communities across the state.
            </p>
            
            <form className="flex w-full h-[40px] md:h-[42px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="flex-1 border border-gray-300 bg-white px-3 md:px-4 text-[13.5px] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-[#3b8599] transition-colors rounded-none"
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
