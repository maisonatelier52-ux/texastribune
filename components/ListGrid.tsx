import HorizontalArticle from "@/components/HorizontalArticle";
import ExploreData from "@/components/ExploreData";

export default function ListGrid({ articles }: { articles: any[] }) {
 

  return (
   <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        
        {/* Layout Grid mapping left content vs right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Article List -> Spans 8 Columns */}
          <div className="lg:col-span-8 flex flex-col gap-12 border-b lg:border-b-0 pb-12 lg:pb-0 pr-0 lg:pr-4">
             {articles.map((article) => (
                <HorizontalArticle 
                  key={article.id}
                  imageUrl={article.imageUrl}
                  credit={article.credit}
                  headline={article.headline}
                  summary={article.summary}
                  author={article.author}
                  date={article.date}
                />
             ))}
          </div>

          {/* Sidebar / Data Tool -> Spans 4 Columns */}
          <div className="lg:col-span-4">
             <ExploreData />
          </div>

        </div>

      </section>

  );
}
