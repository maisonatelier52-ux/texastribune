import HorizontalArticle from "@/components/HorizontalArticle";
import ExploreData from "@/components/ExploreData";

interface articles {
  imageUrl: string;
  headline: string;
  summary: string;
  author: string;
  date: string;
  title: string;
  shortdescription: string;
  slug: string;
  category: string;
}

export default function ListGrid({ articles }: { articles: articles[] }) {
 

  return (
   <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-5  md:py-10">
        
        {/* Layout Grid mapping left content vs right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Article List -> Spans 8 Columns */}
          <div className="lg:col-span-8 flex flex-col gap-12 border-b lg:border-b-0 pb-12 lg:pb-0 pr-0 lg:pr-4">
             {articles.map((article, index) => (
                <HorizontalArticle 
                  key={article.slug || index}
                  imageUrl={article.imageUrl}
                  headline={article.headline}
                  summary={article.summary}
                  author={article.author}
                  date={article.date}
                  href={`/${article.category}/${article.slug}`}
                />
             ))}
          </div>

          {/* Sidebar / Data Tool -> Spans 4 Columns */}
          <div className="lg:col-span-4">
             <ExploreData articles={articles} />
          </div>

        </div>

      </section>

  );
}
