import React from 'react';
import Link from 'next/link';

export interface RelatedArticleItem {
  id: string | number;
  slug: string;
  category: string;
  headline: string;
  date: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticleItem[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-8 mt-2">
      <h2 className="text-[15px] font-bold font-sans text-black mb-5">
        Related
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
        {articles.slice(0, 3).map((article, i) => {
          // Capitalize category properly
          const displayCategory = article.category
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          // Ensure date looks real
          const displayDate = article.date.includes("a.m.") || article.date.includes("p.m.") 
            ? article.date 
            : `${article.date}, 5:00 a.m. Central`;

          return (
            <div key={article.id || i} className="flex flex-col">
              <Link href={`/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`} className="group mb-2">
                <h3 className="text-[17px] sm:text-[18px] font-[Arial,sans-serif] font-bold text-black leading-[1.3]">
                  <span className="underline decoration-[#93c5d8] decoration-[2.5px] underline-offset-[2px] group-hover:decoration-[#0e7c9f] transition-colors">
                    {article.headline}
                  </span>
                </h3>
              </Link>
              <div className="text-[13.5px] text-[#222] font-sans mt-auto leading-tight mb-0.5">
                {displayDate}
              </div>
              <div className="text-[13.5px] text-gray-500 font-sans leading-tight">
                In &quot;{displayCategory}&quot;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
