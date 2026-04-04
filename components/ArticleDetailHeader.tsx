import React from 'react';
import Image from 'next/image';

interface ArticleDetailHeaderProps {
  category: string;
  headline: string;
  summary: string;
  byline: string;
  date: string;
  imageUrl: string;
  caption?: string; 
  credit?: string;
}

const renderByline = (text: string) => {
  if (!text) return null;
  return text.split('*').map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} className="text-[#0e7c9f] hover:underline cursor-pointer">{part.toUpperCase()}</span>;
    }
    return <span key={i}>{part.toUpperCase()}</span>;
  });
};

export default function ArticleDetailHeader({
  category,
  headline,
  summary,
  byline,
  date,
  imageUrl,
  caption = "Ashley Fairleigh escaped one Austin shooting. The trauma revisited her after the one at Buford's.",
  credit = "Kaylee Greenlee for The Austin Current"
}: ArticleDetailHeaderProps) {
  return (
    <header className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 bg-white">
      {/* Category */}
      <div className="text-[#0e7c9f] text-[12px] font-black uppercase tracking-wider mb-3 font-sans hover:underline cursor-pointer">
        {category}
      </div>

      {/* Headline */}
      <h1 className="text-[34px] sm:text-[42px] font-bold font-[Georgia,serif] leading-[1.1] text-black mb-6">
        {headline}
      </h1>

      {/* Summary with yellow border */}
      <div className="border-l-[3px] border-[#FFCC00] pl-4 mb-7">
        <p className="text-[17px] text-[#333] font-sans leading-[1.5]">
          {summary}
        </p>
      </div>

      {/* Byline and Share */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 pb-3 border-b border-gray-200">
        <div className="text-[11px] font-sans font-medium uppercase tracking-wide text-gray-500 mb-4 sm:mb-0">
          <div className="mb-1 leading-tight">
            BY {renderByline(byline)}
          </div>
          <div className="leading-tight">
            {date.toUpperCase()}
          </div>
        </div>
        <div className="flex items-center space-x-5 text-[12px] font-bold font-sans uppercase tracking-[0.05em] text-black pb-1">
          <button className="flex items-center hover:text-gray-600 transition-colors">
            REPUBLISH <span className="ml-1 text-[16px] font-normal leading-none -mt-1">↗</span>
          </button>
          <button className="hover:text-gray-600 transition-colors">
            SHARE
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mb-3 w-full">
        <img 
          src={imageUrl} 
          alt={headline} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Caption & Credit */}
      <div className="text-[12px] text-gray-500 font-sans leading-snug px-1 flex flex-col md:flex-row md:items-start md:gap-1">
        <span>{caption}</span>
        <span className="flex items-center whitespace-nowrap mt-1 md:mt-0">
          <svg className="w-[12px] h-[12px] mx-1 inline-block shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
          {credit}
        </span>
      </div>

      {/* Listen to this article (Audio Player Mock) */}
      <div className="mt-8 border border-gray-300 rounded-[4px] py-4 px-4 sm:px-5 flex items-center mx-1 hover:bg-gray-50 transition-colors cursor-pointer group shadow-sm">
        {/* Play button */}
        <div className="w-[46px] h-[46px] shrink-0 bg-[#e4e4e4] group-hover:bg-[#d4d4d4] rounded-full flex items-center justify-center mr-5 transition-colors">
          <svg className="w-[22px] h-[22px] text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        
        {/* Content */}
        <div className="flex flex-col flex-grow items-start min-w-0">
          <div className="text-[12px] text-gray-500 font-sans flex items-center gap-[6px] mb-[2px]">
            <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
            Listen to this article
          </div>
          <div className="text-[14px] text-[#0e7c9f] font-bold font-sans leading-tight pr-4 hover:underline truncate w-full">
            {headline}
          </div>
          <div className="text-[12px] text-gray-400 font-sans mt-[2px]">
            About 11 Minutes
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-col items-end justify-between self-stretch shrink-0 pl-4 border-l border-transparent">
          <div className="text-[13px] font-bold text-gray-400 mt-2 mr-1">1x</div>
          <div className="flex items-center gap-[4px] text-[11px] text-gray-400">
            <svg className="w-[12px] h-[12px] opacity-60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v20h-2V2h2zm4 4v12h-2V6h2zm-8 4v8H6v-8h2zm12-2v10h-2V8h2zM2 12v4H0v-4h2z"/></svg>
            Everlit
          </div>
        </div>
      </div>

      {/* Note below audio */}
      <p className="mt-3 mx-1 text-[12px] text-gray-500 font-sans leading-snug">
        Audio recording is automated for accessibility. Humans wrote and edited the story. See our <a href="#" className="font-bold text-[#0e7c9f] hover:underline cursor-pointer">AI policy</a>, and give us <a href="#" className="font-bold text-[#0e7c9f] hover:underline cursor-pointer">feedback</a>.
      </p>

    </header>
  );
}
