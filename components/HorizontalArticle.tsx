import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HorizontalArticleProps {
  imageUrl: string;
  headline: string;
  summary: string;
  author: string;
  date: string;
  href?: string;
}

export default function HorizontalArticle({ imageUrl, headline, summary, author, date, href }: HorizontalArticleProps) {
  // Ensure valid URL or default fallback if imageUrl is empty
  const validImageSrc = imageUrl || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop";

  const content = (
    <article className="flex flex-col md:flex-row gap-6 md:gap-8 group cursor-pointer w-full">
      {/* Image Side */}
      <div className="md:w-[45%] lg:w-[48%] shrink-0">
        <div className="w-full aspect-[3/2] relative bg-gray-100 overflow-hidden">
          <Image src={validImageSrc} alt={headline} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
        </div>
       
      </div>

      {/* Text Side */}
      <div className="md:w-[55%] lg:w-[52%] flex flex-col pt-1">
        <h2 className="text-[24px] md:text-[28px] font-bold font-pt-serif leading-[1.1] text-black group-hover:text-gray-700 transition-colors">
          {headline}
        </h2>
        
        <p className="text-[14px] md:text-[16px] text-gray-800 mt-3 md:mt-4 leading-[1.2] font-pt-serif">
          {summary}
        </p>
        
        <div className="text-[11px] mt-4 md:mt-5 font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center gap-[8px]">
          <span className="text-gray-500">BY <span className="text-[#0e7c9f] hover:underline cursor-pointer">{author}</span></span>
          <span className="text-gray-500 font-normal">{date}</span>
        </div>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href} className="block w-full">{content}</Link>;
  }

  return content;
}
