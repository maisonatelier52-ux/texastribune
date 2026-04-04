import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import TopStories from "@/components/TopStories";
import NewsletterBox from "@/components/NewsletterBox";
import ArticleGrid from "@/components/ArticleGrid";
import BriefNewsletterBox from "@/components/BriefNewsletterBox";
import DonateBanner from "@/components/DonateBanner";
import businessData from '../public/data/business.json';
import ListGrid from "@/components/ListGrid";

const mapDataToArticle = (data: any, index: number) => ({
  id: data.slug || index.toString(),
  category: data.category,
  headline: data.title,
  credit: "Texas Tribune", // Provide a default or derived credit
  byline: data.author?.name ? `BY *${data.author.name}*` : "",
  date: data.date,
  image: data.image
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <TopStories articles={businessData.slice(0, 3).map(mapDataToArticle)} />
      <ArticleGrid articles={[businessData[0], businessData[1], businessData[2]].map(mapDataToArticle)} />
      <ListGrid articles={businessData.slice(3, 6).map(mapDataToArticle)} />
      <NewsletterBox />
      <ArticleGrid articles={[businessData[0], businessData[1], businessData[2]].map(mapDataToArticle)} />

      <DonateBanner />
      <ArticleGrid articles={[businessData[0], businessData[1], businessData[2]].map(mapDataToArticle)} />

      <BriefNewsletterBox />

      {/* Pass data to the reusable grid, initializing at 6 entries visible */}
      <ArticleGrid articles={[businessData[4], businessData[5], businessData[6], businessData[7], businessData[8], businessData[9], businessData[10], businessData[11]].map(mapDataToArticle)} />

    </div>
  );
}
