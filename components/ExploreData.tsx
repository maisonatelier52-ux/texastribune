import React from 'react';
import Link from 'next/link';

interface articles {
  title: string;
  shortdescription: string;
  slug: string;
  category: string;
}
interface ExploreDataProps {
  articles?: articles[];
}

export default function ExploreData({ articles }: ExploreDataProps) {
 

  return (
    <div className="w-full flex flex-col pt-2">
      
      {/* Header with asymmetrical black lines */}
      <div className="flex items-center w-full mb-8">
        <div className="w-[50px] h-[4px] bg-black"></div>
        <h3 className="px-5 text-[13px] font-black uppercase tracking-widest font-[Arial,sans-serif] text-black shrink-0">
          Explore Our Data
        </h3>
        <div className="flex-1 h-[4px] bg-black"></div>
      </div>

      {/* List items */}
      <div className="flex flex-col gap-10 mb-10">
        
        {articles?.map((item: articles, i: number) => (
          <div key={i} className="group cursor-pointer">
            <h4 className="text-[19px] md:text-[21px] font-bold font-pt-serif text-black mb-2 leading-[1.1] group-hover:text-gray-700 transition-colors">
              <Link href={`/${item.category}/${item.slug}`}>
                {item.title}
              </Link>
            </h4>
            <p className="text-[13px] md:text-[14px] text-gray-800 leading-[1.3] font-pt-serif">
              {item.shortdescription}
            </p>
          </div>
        ))}

      </div>

      {/* Info Call-To-Action Box */}
      <div className="bg-[#ffcc00] p-6 pb-8 text-center flex flex-col items-center select-none shadow-sm">
        <p className="text-black font-extrabold text-[15px] leading-[1.3] mb-5 max-w-[210px] tracking-tight">
          Our data explorers cover many Texas topics
        </p>
        <button className="bg-black text-white px-8 py-[13px] w-full font-bold uppercase tracking-widest text-[11px] hover:bg-gray-800 transition-colors rounded-none">
          Read More
        </button>
      </div>

    </div>
  );
}
