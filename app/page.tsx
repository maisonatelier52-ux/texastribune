import TopStories from "@/components/TopStories";
import NewsletterBox from "@/components/NewsletterBox";
import ArticleGrid from "@/components/ArticleGrid";
import BriefNewsletterBox from "@/components/BriefNewsletterBox";
import DonateBanner from "@/components/DonateBanner";
import worldData from '../public/data/world.json';
import businessData from '../public/data/business.json';
import politicsData from '../public/data/politics.json';
import usData from '../public/data/us.json';
import entertainmentData from '../public/data/entertainment.json';
import healthData from '../public/data/health.json';
import sportsData from '../public/data/sports.json';
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
      <TopStories articles={worldData.slice(0, 3).map(mapDataToArticle)} />
      <ArticleGrid articles={[businessData[4], businessData[3], businessData[2]].map(mapDataToArticle)} />
      <ListGrid articles={usData.slice(3, 6).map(mapDataToListArticle)} />
      <NewsletterBox imageUrl="/images/read-more-about-ad.webp" link='https://www.read-more-about.com/' />
      <ArticleGrid articles={[politicsData[0], politicsData[1], politicsData[2]].map(mapDataToArticle)} />
      <NewsletterBox imageUrl="/images/mirrorstandard-ad.webp" link='https://www.mirrorstandard.com/' />

      <ArticleGrid articles={[entertainmentData[0], entertainmentData[1], entertainmentData[2]].map(mapDataToArticle)} />
      <NewsletterBox imageUrl="/images/theopenknowledge-ad.webp" link='https://www.theopenknowledge.com/' />

      <ArticleGrid articles={[sportsData[0], sportsData[1], sportsData[2], sportsData[3], sportsData[4], sportsData[5], sportsData[6], sportsData[7]].map(mapDataToArticle)} />
    </div>
  );
}
