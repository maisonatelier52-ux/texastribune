import React from 'react';
import ArticleDetailHeader from '@/components/ArticleDetailHeader';
import RelatedArticles from '@/components/RelatedArticles';
import ReadMore from '@/components/ReadMore';
import EventsAndLatest from '@/components/EventsAndLatest';
import businessData from '../../../public/data/business.json'
import usData from '../../../public/data/us.json';
import worldData from '../../../public/data/world.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import entertainmentData from '../../../public/data/entertainment.json';
import sportsData from '../../../public/data/sports.json';

const allData: Record<string, any[]> = {
  business: businessData,
  world: worldData,
  us: usData,
  health: healthData,
  politics: politicsData,
  entertainment: entertainmentData,
  sports: sportsData
};

export async function generateStaticParams() {
  const params: { category: string, slug: string }[] = [];
  
  Object.keys(allData).forEach((category) => {
    allData[category].forEach((article) => {
      if (article.slug) {
        params.push({ category, slug: article.slug });
      }
    });
  });
  
  return params;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string, slug: string }>;
}) {
  const { category, slug } = await params;
  const data = allData[category];
  
  if (!data) {
    return (
      <main className="max-w-3xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404 – Category Not Found</h1>
      </main>
    );
  }
  
  const article = data.find((item) => item.slug === slug);
  
  if (!article) {
    return (
      <main className="max-w-3xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404 – Article Not Found</h1>
      </main>
    );
  }

  // Generate appropriate byline
  const authorName = article.author?.name;
  const role = article.author?.role || 'The Texas Tribune';
  const byline = authorName ? `*${authorName}*, ${role}` : "TEXAS TRIBUNE STAFF";

  const relatedArticles = data
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item, i) => ({
      id: item.slug || i.toString(),
      slug: item.slug,
      category: item.category || category,
      headline: item.title,
      date: item.date || "March 1, 2026",
    }));

  const readMoreArticles = data
    .filter((item) => item.slug !== slug)
    .slice(3, 7)
    .map((item, i) => ({
      id: item.slug || i.toString(),
      slug: item.slug,
      category: item.category || category,
      headline: item.title,
      date: item.date || "April 3, 2026",
      image: item.image,
    }));

  const eventsAndLatestArticles = data
    .filter((item) => item.slug !== slug)
    .slice(0, 7)
    .map((item, i) => ({
      id: item.slug || i.toString(),
      slug: item.slug,
      category: item.category || category,
      headline: item.title,
      author: item.author?.name || "TEXAS TRIBUNE STAFF",
      date: item.date || "April 5, 2026",
      image: item.image,
      shortdescription: item.shortdescription,
    }));

  return (
    <main className="bg-white min-h-screen">
      <ArticleDetailHeader 
        category={article.category || category}
        headline={article.title}
        summary={article.shortdescription}
        byline={byline}
        date={article.date}
        imageUrl={article.image}
      />
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 bg-white pb-2">
    
      <div className="border max-w border-gray-300 rounded-[4px] py-4 px-4 sm:px-5 flex items-center mx-1 hover:bg-gray-50 transition-colors cursor-pointer group shadow-sm">
        <div className="w-[46px] h-[46px] shrink-0 bg-[#e4e4e4] group-hover:bg-[#d4d4d4] rounded-full flex items-center justify-center mr-5 transition-colors">
          <svg className="w-[22px] h-[22px] text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow items-start min-w-0">
          <div className="text-[12px] text-gray-500 font-sans flex items-center gap-[6px] mb-[2px]">
            <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            Listen to this article
          </div>
          <div className="text-[14px] text-[#333333] font-bold font-sans leading-tight pr-4 hover:underline truncate w-full">
            {article.title}
          </div>
          <div className="text-[12px] text-gray-400 font-sans mt-[2px]">
            About 11 Minutes
          </div>
        </div>

        <div className="flex flex-col items-end justify-between self-stretch shrink-0 pl-4 border-l border-transparent">
          <div className="text-[13px] font-bold text-gray-400 mt-2 mr-1">1x</div>
          <div className="flex items-center gap-[4px] text-[11px] text-gray-400">
            <svg className="w-[12px] h-[12px] opacity-60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v20h-2V2h2zm4 4v12h-2V6h2zm-8 4v8H6v-8h2zm12-2v10h-2V8h2zM2 12v4H0v-4h2z" /></svg>
            Everlit
          </div>
        </div>
      </div>

      <p className="mt-4 mb-6 mx-1 text-[12px] text-gray-500 font-sans leading-snug">
        Audio recording is automated for accessibility. Humans wrote and edited the story. See our <a href="#" className="font-bold text-[#0e7c9f] hover:underline cursor-pointer">AI policy</a>, and give us <a href="#" className="font-bold text-[#0e7c9f] hover:underline cursor-pointer">feedback</a>.
      </p>
        <div className="text-[17px] sm:text-[18px] font-pt-serif leading-[1.4] text-[#333]">
          {article.sub?.map((section: any, index: number) => (
            <div key={index} className="mb-8 mx-1">
              {section.title && (
                <h2 className="text-[24px] sm:text-[26px] font-bold font-pt-serif text-black mb-4">
                  {section.title}
                </h2>
              )}
              <p>
                {section.descr}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <RelatedArticles articles={relatedArticles} />
      <ReadMore articles={readMoreArticles} /> 
      <EventsAndLatest articles={eventsAndLatestArticles} />
    </main>
  );
}
