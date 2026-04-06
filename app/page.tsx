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
  credit: "Texas Tribune",
  byline: data.author?.name ? `BY *${data.author.name}*` : "",
  date: data.date,
  image: data.image
});

const mapDataToListArticle = (data: any, index: number) => ({
  imageUrl: data.image,
  headline: data.title,
  summary: data.shortdescription || "",
  author: data.author?.name || "",
  date: data.date,
  title: data.title,
  shortdescription: data.shortdescription || "",
  slug: data.slug || index.toString(),
  category: data.category
});


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopStories articles={businessData.slice(0, 3).map(mapDataToArticle)} />
      <ArticleGrid articles={[businessData[0], businessData[1], businessData[2]].map(mapDataToArticle)} />
      <ListGrid articles={businessData.slice(3, 6).map(mapDataToListArticle)} />
      <NewsletterBox />
      <ArticleGrid articles={[businessData[0], businessData[1], businessData[2]].map(mapDataToArticle)} />
      <DonateBanner />
      <ArticleGrid articles={[businessData[0], businessData[1], businessData[2]].map(mapDataToArticle)} />
      <BriefNewsletterBox />
      <ArticleGrid articles={[businessData[4], businessData[5], businessData[6], businessData[0], businessData[2], businessData[3], businessData[0], businessData[1]].map(mapDataToArticle)} />
    </div>
  );
}
