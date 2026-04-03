import businessData from '../../public/data/business.json'
import educationData from '../../public/data/education.json';
import opinionData from '../../public/data/opinion.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import financeData from '../../public/data/finance.json';

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
const filteredData = category === "finance" ? data.slice(3) : data;
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

  return (
    <>
     
    </>
  );
}