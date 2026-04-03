"use client";

import React, { useState } from 'react';

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
}

const renderByline = (text: string) => {
  return text.split('*').map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} className="text-[#0e7c9f] hover:underline cursor-pointer">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

export default function ArticleGrid({ articles, initialCount = 6 }: ArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, articles.length));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 mb-16">
      
      {/* Article Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
        {articles.slice(0, visibleCount).map((article) => (
          <article key={article.id} className="flex flex-col group cursor-pointer">
            
            {/* Image */}
            <div className="w-full aspect-[3/2] relative overflow-hidden bg-gray-100">
              <img 
                src={article.image} 
                alt={article.headline} 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Credit */}
            <div className="flex items-center text-[10px] md:text-[10px] text-gray-500 mt-2 font-sans font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#888" className="mr-[5px] shrink-0">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4" fill="white"></circle>
              </svg>
              {article.credit}
            </div>

            {/* Category */}
            <div className="text-[#0e7c9f] text-[10px] font-black uppercase tracking-wider mt-3 font-[Arial,sans-serif] hover:underline">
              {article.category}
            </div>

            {/* Headline */}
            <h2 className="text-[20px] md:text-[22px] font-bold font-[Georgia,serif] leading-[1.25] mt-2 text-black group-hover:text-gray-700 transition-colors">
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
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < articles.length && (
        <div className="w-full flex justify-center mt-12 pt-4">
          <button 
            onClick={loadMore}
            className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-bold text-[13px] tracking-wide uppercase px-12 py-[14px] transition-colors"
          >
            Load More Posts
          </button>
        </div>
      )}
      
    </section>
  );
}
