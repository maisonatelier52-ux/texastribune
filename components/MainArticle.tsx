import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  href?: string;
}

export default function MainArticle({ 
  imageUrl = "https://images.unsplash.com/photo-1623049586396-1875c7b396e9?q=80&w=1200&auto=format&fit=crop", 
  headline = "A border wall through Big Bend appears to be on hold after public outcry, but questions remain", 
  summary = "While the federal government hasn’t made a public statement about its plans, official maps show a “virtual wall” going through the region rather than a physical barrier.", 
  byline = "BY *URIEL J. GARCÍA*", 
  date = "APRIL 3, 2026",
  href 
}: MainArticleProps) {
  const validImageSrc = imageUrl || "https://images.unsplash.com/photo-1623049586396-1875c7b396e9?q=80&w=1200&auto=format&fit=crop";

  const content = (  
    <article className="flex flex-col w-full group cursor-pointer">
      <div className="w-full aspect-[3/2] relative overflow-hidden bg-gray-100">
        <Image 
          src={validImageSrc} 
          alt={headline?.substring(0, 50) || "Main article image"} 
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
    
      <h2 className="text-[28px] md:text-[31px] font-bold font-pt-serif leading-none mt-2 text-black group-hover:text-gray-700 transition-colors">
        {headline}
      </h2>

      {summary && (
        <p className="text-[15px] md:text-[20px] font-pt-serif text-black mt-3 leading-[1.1] font-[Arial,sans-serif]">
          {summary}
        </p>
      )}

      <div className="text-[11px] mt-4 font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center flex-wrap gap-[6px]">
        <span className="text-gray-500">{renderByline(byline)}</span>
        <span className="text-gray-500 font-normal">{date}</span>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href} className="block w-full">{content}</Link>;
  }

  return content;
}
