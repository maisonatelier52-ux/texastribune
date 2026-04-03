import React from 'react';

interface HorizontalArticleProps {
  imageUrl: string;
  credit: string;
  headline: string;
  summary: string;
  author: string;
  date: string;
}

export default function HorizontalArticle({ imageUrl, credit, headline, summary, author, date }: HorizontalArticleProps) {
  return (
    <article className="flex flex-col md:flex-row gap-6 md:gap-8 group cursor-pointer w-full">
      {/* Image Side */}
      <div className="md:w-[45%] lg:w-[48%] shrink-0">
        <div className="w-full aspect-[3/2] bg-gray-100 overflow-hidden">
          <img src={imageUrl} alt={headline} className="object-cover w-full h-full" />
        </div>
        <div className="flex items-center text-[10px] text-gray-500 mt-2 font-sans font-semibold">
           <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#888" className="mr-[5px] shrink-0">
             <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
             <circle cx="12" cy="13" r="4" fill="white"></circle>
           </svg>
           {credit}
        </div>
      </div>

      {/* Text Side */}
      <div className="md:w-[55%] lg:w-[52%] flex flex-col pt-1">
        <h2 className="text-[24px] md:text-[26px] font-bold font-[Georgia,serif] leading-[1.1] text-black group-hover:text-gray-700 transition-colors">
          {headline}
        </h2>
        
        <p className="text-[14px] md:text-[14px] text-gray-800 mt-3 md:mt-4 leading-[1.6] font-[Arial,sans-serif]">
          {summary}
        </p>
        
        <div className="text-[11px] mt-4 md:mt-5 font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center gap-[8px]">
          <span className="text-gray-500">BY <span className="text-[#0e7c9f] hover:underline cursor-pointer">{author}</span></span>
          <span className="text-gray-500 font-normal">{date}</span>
        </div>
      </div>
    </article>
  );
}
