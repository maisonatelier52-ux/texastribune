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

  const categoryTitle = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const getCategoryDescription = (cat: string) => {
    switch(cat) {
      case 'business': return "Get the latest Texas Tribune coverage on business, including the economy, jobs, corporate news, and more.";
      case 'world': return "Get the latest Texas Tribune coverage on world news, international relations, and global events shaping our state.";
      case 'finance': return "Get the latest Texas Tribune coverage on finance, markets, personal finance, and economic policies.";
      case 'education': return "Get the latest Texas Tribune coverage on education, including public schools, higher education, research, and policy reforms.";
      case 'health': return "Get the latest Texas Tribune coverage on health, including healthcare access, public health issues, and medical news.";
      case 'politics': return "Get the latest Texas Tribune coverage on politics, elections, legislation, and government affairs.";
      case 'opinion': return "Read the latest opinions, editorials, and commentary on diverse topics from Texas Tribune contributors.";
      case 'criminal-justice': return "Get the latest Texas Tribune coverage on criminal justice, including crime, courts, law enforcement, and reforms shaping the state's justice system.";
      default: return `Get the latest Texas Tribune coverage on ${cat.replace('-', ' ')}, including recent events, policy discussions, and reforms shaping the state.`;
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-12 flex flex-col items-center">
        <div className="flex items-center w-full mb-4">
          <div className="flex-grow h-[10px] bg-[#777777]"></div>
          <span className="px-4 text-[18px] font-bold text-[#777777] uppercase tracking-[0.1em]">
            TOPICS
          </span>
          <div className="flex-grow h-[10px] bg-[#777777]"></div>
        </div>
        <h1 className="text-[36px] md:text-[48px] font-bold text-center mb-4 text-black tracking-tight leading-[1.1]">
          {categoryTitle}
        </h1>
        <p className="text-[17px] font-pt-serif text-center max-w-[800px] text-black leading-[1.6]">
          {getCategoryDescription(category)}
        </p>
      </div>

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