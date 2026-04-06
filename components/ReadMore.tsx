import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface ReadMoreItem {
  id: string | number;
  slug: string;
  category: string;
  headline: string;
  date: string;
  image: string;
}

interface ReadMoreProps {
  articles: ReadMoreItem[];
}

export default function ReadMore({ articles }: ReadMoreProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6">
      <h2 className="text-[18px] font-bold font-sans uppercase tracking-[0.05em] text-black mb-4">
        READ MORE
      </h2>
      <div className="flex flex-col space-y-7">
        {articles.slice(0, 4).map((article, i) => {
          // Process date to look like screenshot if possible
          let displayDate = article.date || "APRIL 3, 2026";
          displayDate = displayDate.toUpperCase();
          if (i < 2 && !displayDate.includes('UPDATED')) {
             displayDate = `UPDATED: ${displayDate}`;
          }

          return (
            <article key={article.id || i} className="flex flex-row gap-5 group cursor-pointer">
              <Link href={`/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`} className="w-[38%] sm:w-[32%] shrink-0 block">
                <div className="w-full aspect-[3/2] relative bg-gray-100 overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.headline} 
                    fill
                    className="object-cover border border-gray-100" 
                  />
                </div>
              </Link>
              <div className="flex flex-col w-[62%] sm:w-[68%] pt-0.5">
                <Link href={`/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`} className="block">
                  <h3 className="text-[17px] sm:text-[21px] font-bold font-pt-serif leading-[1.1] text-black group-hover:text-gray-700 transition-colors mb-1.5">
                    {article.headline}
                  </h3>
                </Link>
                <div className="text-[10px] text-gray-500 font-sans uppercase tracking-wide">
                  {displayDate}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
