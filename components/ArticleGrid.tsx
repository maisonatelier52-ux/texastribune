"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Article {
  id: number | string;
  category: string;
  headline: string;
  credit: string;
  byline: string;
  date: string;
  image: string;
}

interface ArticleGridProps {
  articles: Article[];
  initialCount?: number;
  columns?: 3 | 4;
  title?: string;
  showCategory?: boolean;
  buttonText?: string;
}

const renderByline = (text: string) => {
  return text.split('*').map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} className="text-[#0e7c9f] hover:underline cursor-pointer">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

export default function ArticleGrid({ 
  articles, 
  initialCount = 6,
  columns = 3,
  title,
  showCategory = true,
  buttonText = "Load More News"
}: ArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + columns, articles.length));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 mb-0">
      
      {title && (
        <h2 className="text-[18px] font-bold font-sans uppercase tracking-[0.05em] mb-6 text-black">
          {title}
        </h2>
      )}

      {/* Article Grid Layout */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 lg:gap-8 gap-y-12`}>
        {articles.slice(0, visibleCount).map((article) => (
          <Link href={`/${article.category}/${article.id}`} key={article.id} className="block">
            <article className="flex flex-col group cursor-pointer h-full">
              
              {/* Image */}
            <div className="w-full aspect-[3/2] relative overflow-hidden bg-gray-100">
              <Image 
                src={article.image} 
                alt={article.headline} 
                fill
                className="object-cover"
              />
            </div>
            
           
            {/* Category */}
            {showCategory && (
              <div className="text-[#0e7c9f] text-[10px] font-black uppercase tracking-wider mt-3 font-[Arial,sans-serif] hover:underline">
                {article.category}
              </div>
            )}

            {/* Headline */}
            <h2 className={`${columns === 4 ? 'text-[17px] md:text-[18px]' : 'text-[20px] md:text-[21px]'} font-bold font-pt-serif leading-none mt-2 text-black group-hover:text-gray-700 transition-colors`}>
              {article.headline}
            </h2>

            {/* Byline */}
            <div className="text-[11px] mt-3 font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center flex-wrap gap-[6px]">
              <span className="text-gray-500">
                {renderByline(article.byline)}
              </span>
              <span className="text-gray-500 font-normal ml-1">{article.date}</span>
            </div>
            
          </article>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < articles.length && (
        <div className="w-full flex justify-center mt-12 pt-4">
          <button 
            onClick={loadMore}
            className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-bold text-[13px] tracking-wide uppercase px-12 py-[14px] transition-colors"
          >
            {buttonText}
          </button>
        </div>
      )}
      
    </section>
  );
}
