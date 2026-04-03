import React from 'react';

const renderByline = (text: string) => {
  if (!text) return null;
  return text.split('*').map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} className="text-[#0e7c9f] hover:underline cursor-pointer">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

interface MainArticleProps {
  imageUrl?: string;
  credit?: string;
  headline?: string;
  summary?: string;
  byline?: string;
  date?: string;
}

export default function MainArticle({ 
  imageUrl = "https://images.unsplash.com/photo-1623049586396-1875c7b396e9?q=80&w=1200&auto=format&fit=crop", 
  credit = "Eli Hartman/The Texas Tribune", 
  headline = "A border wall through Big Bend appears to be on hold after public outcry, but questions remain", 
  summary = "While the federal government hasn’t made a public statement about its plans, official maps show a “virtual wall” going through the region rather than a physical barrier.", 
  byline = "BY *URIEL J. GARCÍA*", 
  date = "APRIL 3, 2026" 
}: MainArticleProps) {
  return (
    <article className="flex flex-col w-full group cursor-pointer">
      {/* Image */}
      <div className="w-full aspect-[3/2] relative overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={headline?.substring(0, 50) || "Main article image"} 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Credit */}
      <div className="flex items-center text-[10px] md:text-[11px] text-gray-500 mt-2 font-sans font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#888" className="mr-1 shrink-0">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4" fill="white"></circle>
        </svg>
        {credit}
      </div>

      {/* Headline */}
      <h2 className="text-[28px] md:text-[34px] font-bold font-[Georgia,serif] leading-[1.1] mt-2 text-black group-hover:text-gray-700 transition-colors">
        {headline}
      </h2>

      {/* Summary */}
      {summary && (
        <p className="text-[15px] md:text-[16px] text-black mt-3 leading-[1.4] font-[Arial,sans-serif]">
          {summary}
        </p>
      )}

      {/* Byline */}
      <div className="text-[11px] mt-4 font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center flex-wrap gap-[6px]">
        <span className="text-gray-500">{renderByline(byline)}</span>
        <span className="text-gray-500 font-normal">{date}</span>
      </div>
    </article>
  );
}
