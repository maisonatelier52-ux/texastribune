import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface EventsAndLatestItem {
  id: string | number;
  slug: string;
  category: string;
  headline: string;
  author: string;
  date: string;
  image?: string;
  shortdescription?: string;
}

interface EventsAndLatestProps {
  articles: EventsAndLatestItem[];
}

export default function EventsAndLatest({ articles }: EventsAndLatestProps) {
  if (!articles || articles.length === 0) return null;

  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-8 flex flex-col lg:flex-row gap-8 lg:gap-10 border-t border-gray-200 items-start">
      
      <Link href={`/${(featuredArticle.category || 'news').toLowerCase().replace(/\s+/g, '-')}/${featuredArticle.slug}`} className="w-full lg:w-[60%] bg-[#242424] p-5 sm:p-7 pb-7 flex flex-col group cursor-pointer">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-[#ffcc00] w-3 h-3 mr-3 shadow-sm"></div>
          <h2 className="text-white font-bold text-[18px] sm:text-[20px] tracking-tight font-sans uppercase">
      {featuredArticle.category || 'News'}</h2>
        </div>
        
        {/* Image Area */}
        <div className="relative w-full mb-5">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-gray-800 border-[3px] border-transparent transition-colors rounded-sm">
            <Image 
              src={featuredArticle.image || "/don_huffines_portrait.png"} 
              alt={featuredArticle.headline}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Article Details */}
        <div className="mt-1 flex-grow flex flex-col">
          <h3 className="text-white font-pt-serif font-bold text-2xl sm:text-[32px] mb-4 leading-none tracking-tight group-hover:text-gray-300 transition-colors">
            {featuredArticle.headline}
          </h3>
         
          <div className="mt-auto">
            <div className="text-white font-sans text-[12px] sm:text-[13px] font-bold uppercase tracking-wide opacity-90 mb-1">
              BY <span className="text-[#087f9b]">{featuredArticle.author}</span>
            </div>
            <div className="text-gray-400 font-sans text-[11px] sm:text-[12px] uppercase tracking-wide">
              {featuredArticle.date.toUpperCase()}
            </div>
          </div>
        </div>
      </Link>

      {/* Right Side: Latest News List */}
      <div className="w-full lg:w-[40%] flex flex-col pt-2 lg:pt-0">
        {/* Section Header */}
        <div className="flex items-center mb-7">
          <div className="w-[40px] h-[6px] bg-black shrink-0"></div>
          <h2 className="mx-4 text-[15px] font-sans font-bold uppercase tracking-widest text-[#111] whitespace-nowrap">
            LATEST FROM OUR REPORTERS
          </h2>
          <div className="flex-grow h-[6px] bg-black"></div>
        </div>
        
        {/* Articles list */}
        <div className="space-y-7 sm:space-y-8">
          {remainingArticles.map((article) => (
            <div key={article.id} className="flex flex-col group cursor-pointer">
              <h3 className="text-[19px] sm:text-[21px] font-pt-serif font-bold leading-[1.1] text-black group-hover:text-gray-600 transition-colors mb-2">
                <Link href={`/${(article.category || 'news').toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}>
                  {article.headline}
                </Link>
              </h3>
              <div className="text-[11px] font-sans text-gray-500 uppercase tracking-wider leading-relaxed">
                BY <span className="font-bold text-[#087f9b] hover:underline cursor-pointer">{article.author}</span>
                <span className="mx-2 lg:mx-3 text-gray-400">
                  {article.date.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
