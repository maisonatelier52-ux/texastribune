import React from 'react';
import MainArticle from './MainArticle';
import Link from 'next/link';

interface Sub {
  title: string;
  descr: string;
}

interface Author {
  name: string;
  role?: string;
}

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  topic: string;
  sub: Sub[];
  author?: Author;
}

interface CategoryFeaturedProps {
  articles: NewsItem[];
}

const renderByline = (text: string) => {
  if (!text) return null;
  return text.split('*').map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} className="text-[#0e7c9f] hover:underline cursor-pointer">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

export default function CategoryFeatured({ articles }: CategoryFeaturedProps) {
  if (!articles || articles.length === 0) return null;

  const mainArticle = articles[0];
  const trendingArticles = articles.slice(1, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <h2 className="text-[18px] font-bold font-sans uppercase tracking-[0.05em] pb-[6px] mb-4 text-black">
            FEATURED STORIES
          </h2>
          <MainArticle 
            imageUrl={mainArticle.image}
            headline={mainArticle.title}
            summary=''
            byline={`BY *${mainArticle.author?.name?.toUpperCase() || 'TEXAS TRIBUNE STAFF'}*`}
            date={mainArticle.date.toUpperCase()}
            credit="Texas Tribune"
            href={`/${mainArticle.category}/${mainArticle.slug}`}
          />
        </div>

        <div className="flex flex-col mt-8 lg:mt-[48px]">
          <h2 className="text-[18px] font-bold font-sans uppercase tracking-[0.05em] pb-[6px] mb-4 text-black">
            TRENDING NOW
          </h2>
          <div className="flex flex-col space-y-7">
            {trendingArticles.map((article, i) => (
              <Link href={`/${article.category}/${article.slug}`} key={i} className="block">
              <article className="group cursor-pointer">
                <h3 className="text-[18px] md:text-[21px] font-bold font-pt-serif leading-[1.1] text-black group-hover:text-gray-700 transition-colors mb-2.5">
                  {article.title}
                </h3>
                <div className="text-[10px] font-bold font-[Arial,sans-serif] uppercase tracking-wide flex items-center flex-wrap gap-[6px] leading-tight">
                  <span className="text-gray-500">{renderByline(`BY *${article.author?.name?.toUpperCase() || 'TEXAS TRIBUNE STAFF'}*`)}</span>
                  <span className="text-gray-500 font-normal">{article.date.toUpperCase()}</span>
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
