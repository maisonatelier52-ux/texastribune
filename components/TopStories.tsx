import React from 'react';
import MainArticle from './MainArticle';
import SideArticle from './SideArticle';
import { Article } from './ArticleGrid';

interface TopStoriesProps {
  articles?: Article[];
}

export default function TopStories({ articles }: TopStoriesProps) {
  const mainArticleData = articles ? articles[0] : undefined;

  return (
    <section className="w-full bg-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MainArticle 
              imageUrl={mainArticleData?.image}
              credit={mainArticleData?.credit}
              headline={mainArticleData?.headline}
              byline={mainArticleData?.byline}
              date={mainArticleData?.date}
              summary={undefined}
            />
          </div>

          {/* Side Articles Stack (Spans 1 column on large screens) */}
          <div className="lg:col-span-1 flex flex-col gap-10">
            {articles && articles.length > 1 ? (
              articles.slice(1, 3).map((article, idx) => (
                <SideArticle 
                  key={article.id || idx}
                  imageUrl={article.image}
                  credit={article.credit}
                  headline={article.headline}
                  byline={article.byline}
                  date={article.date}
                />
              ))
            ) : (
              <>
                <SideArticle 
                  imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
                  credit="Leila Saidane/The Texas Tribune"
                  headline="This state agency was created to investigate Texas universities. How that works is a mystery."
                  byline="BY *JESSICA PRIEST*"
                  date="APRIL 3, 2026"
                />
                <SideArticle 
                  imageUrl="https://images.unsplash.com/photo-1584483766114-2ceaaf99d21c?q=80&w=800&auto=format&fit=crop"
                  credit="Mark Rogers for The Texas Tribune"
                  headline="At least 175 measles cases reported in Texas this year, most of them in West Texas Detention Facility"
                  byline="BY *STEPHEN SIMPSON*"
                  date="APRIL 2, 2026"
                />
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
