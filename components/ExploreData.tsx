import React from 'react';

export default function ExploreData() {
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
        
        <div className="group cursor-pointer">
          <h4 className="text-[19px] md:text-[21px] font-bold font-[Georgia,serif] text-black mb-2 leading-tight group-hover:text-gray-700 transition-colors">
            Elected Officials Directory
          </h4>
          <p className="text-[13px] md:text-[13px] text-gray-800 leading-[1.6] font-[Arial,sans-serif]">
            To help Texans know more about their representatives, we've gathered the bios, contact information and more for the occupants of the state's highest offices.
          </p>
        </div>

        <div className="group cursor-pointer">
          <h4 className="text-[19px] md:text-[21px] font-bold font-[Georgia,serif] text-black mb-2 leading-tight group-hover:text-gray-700 transition-colors">
            Government Salaries Explorer
          </h4>
          <p className="text-[13px] md:text-[13px] text-gray-800 leading-[1.6] font-[Arial,sans-serif]">
            Review the compensation of hundreds of thousands of state and municipal employees in Texas.
          </p>
        </div>

        <div className="group cursor-pointer">
           <h4 className="text-[19px] md:text-[21px] font-bold font-[Georgia,serif] text-black mb-2 leading-tight group-hover:text-gray-700 transition-colors">
            Texas Public Schools Explorer
          </h4>
          <p className="text-[13px] md:text-[13px] text-gray-800 leading-[1.6] font-[Arial,sans-serif]">
            Review enrollment trends, demographics, teacher experience, pay and outcomes for all schools, and more.
          </p>
        </div>

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
