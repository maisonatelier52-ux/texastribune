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

interface SideArticleProps {
  imageUrl: string;
  credit?: string;
  headline?: string;
  byline?: string;
  date?: string;
  href?: string;
}

export default function SideArticle({ imageUrl, credit, headline, byline, date, href }: SideArticleProps) {
  const validImageSrc = imageUrl || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop";

  const content = (
    <article className="flex flex-col w-full group cursor-pointer">

      <div className="w-full relative overflow-hidden bg-gray-100">
        <Image 
          src={validImageSrc} 
          alt={headline?.substring(0, 50) || "Side article image"} 
          width={600}
          height={500}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover w-full aspect-[3/2]"
        />
      </div>
      
      <h2 className="text-[20px] md:text-[21px] font-bold font-pt-serif leading-none mt-2 text-black group-hover:text-gray-700 transition-colors">
        {headline}
      </h2>

      <div className="text-[11px] mt-3 font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center flex-wrap gap-[6px]">
        <span className="text-gray-500">{renderByline(byline || "")}</span>
        <span className="text-gray-500 font-normal">{date}</span>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href} className="block w-full">{content}</Link>;
  }

  return content;
}
