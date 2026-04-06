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
    <header className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-5 bg-white">
      {/* Category */}
      <div className="text-[#0e7c9f] text-[12px] font-black uppercase tracking-wider mb-3 font-sans hover:underline cursor-pointer">
        {category}
      </div>

      {/* Headline */}
      <h1 className="text-[34px] sm:text-[42px] font-bold font-pt-serif leading-none text-black mb-6">
        {headline}
      </h1>

      {/* Summary with yellow border */}
      <div className="border-l-[3px] border-[#FFCC00] pl-4 mb-7">
        <p className="text-[17px] text-[#333] font-pt-serif leading-[1.3]">
          {summary}
        </p>
      </div>

      {/* Byline and Share */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-2 pb-3">
        <div className="text-[11px] font-sans font-medium uppercase tracking-wide text-gray-500 mb-4 sm:mb-0">
          <div className="mb-1 leading-tight">
            BY {renderByline(byline)}
          </div>
          <div className="leading-tight">
            {date.toUpperCase()}
          </div>
        </div>
        <div className="flex items-center space-x-5 text-[12px] font-bold font-sans uppercase tracking-[0.05em] text-black pb-1">

          <button className="hover:text-gray-600 transition-colors">
            SHARE
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mb-3 w-full">
        <Image
          src={imageUrl}
          alt={headline}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </header>
  );
}
