import businessData from '../../public/data/business.json'
import educationData from '../../public/data/education.json';
import opinionData from '../../public/data/opinion.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import financeData from '../../public/data/finance.json';
import CategoryFeatured from '@/components/CategoryFeatured';
import ArticleGrid from '@/components/ArticleGrid';

interface Sub {
  title: string;
  descr: string;
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
  author?: {
    name: string;
    role?: string;
  };
}


const allData: Record<string, NewsItem[]> = {
  business: businessData,
  world: worldData,
  finance: financeData,
  education: educationData,
  health: healthData,
  politics: politicsData,
  opinion: opinionData  
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));

}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data = allData[category];
const filteredData = data
  if (!data) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          404 – Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The category you’re looking for doesn’t exist.
        </p>
      </main>
    );
  }

  const gridArticles = filteredData.slice(4).map((item, index) => ({
    id: item.slug || index.toString(),
    category: item.category,
    headline: item.title,
    credit: "The Texas Tribune",
    byline: item.author?.name ? `BY *${item.author.name.toUpperCase()}*` : "TEXAS TRIBUNE STAFF",
    date: (item.date || "").toUpperCase(),
    image: item.image
  }));

  return (
    <>
      <CategoryFeatured articles={filteredData} />
      {gridArticles.length > 0 && (
        <ArticleGrid 
          articles={gridArticles} 
          columns={4} 
          initialCount={12}
          title="RECENT NEWS" 
          showCategory={false}
          buttonText="LOAD MORE"
        />
      )}
    </>
  );
}