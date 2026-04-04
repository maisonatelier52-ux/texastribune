import React from 'react';
import ArticleDetailHeader from '@/components/ArticleDetailHeader';
import RelatedArticles from '@/components/RelatedArticles';
import ReadMore from '@/components/ReadMore';
import businessData from '../../../public/data/business.json';
import educationData from '../../../public/data/education.json';
import opinionData from '../../../public/data/opinion.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import worldData from '../../../public/data/world.json';
import financeData from '../../../public/data/finance.json';

const allData: Record<string, any[]> = {
  business: businessData,
  world: worldData,
  finance: financeData,
  education: educationData,
  health: healthData,
  politics: politicsData,
  opinion: opinionData
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
      {/* Rest of the article content would go here */}
      
      <RelatedArticles articles={relatedArticles} />
      <ReadMore articles={readMoreArticles} />
    </main>
  );
}
