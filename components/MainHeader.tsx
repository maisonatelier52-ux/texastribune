import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="w-full bg-white md:pt-8 md:pb-4 pt-4 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ==============================================
                          DESKTOP HEADER
            ============================================== */}
        <div className="hidden md:block">
          {/* Top section: Logo + Search */}
          <div className="w-full flex items-center justify-between relative">
            
            {/* Invisible spacer on the left to perfectly center the logo because flex space-between */}
            <div className="w-10 invisible"></div>

            {/* Logo container strictly centered */}
            <div className="flex flex-col items-center flex-1">
              <Link href="/" className="flex items-center gap-[6px] mb-1">
                
                {/* Yellow Square with Star (Speech Bubble) */}
                <div className="relative flex items-center justify-center w-[42px] h-[42px] bg-[#ffcc00] mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" className="w-[30px] h-[30px] z-10">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  {/* Speech bubble notch */}
                  <div className="absolute -bottom-[8px] left-0 w-0 h-0 border-t-[9px] border-t-[#ffcc00] border-r-[10px] border-r-transparent"></div>
                </div>

                {/* Logo Text */}
                <h1 className="text-black font-black text-[42px] md:text-[54px] uppercase tracking-tighter leading-none pr-2 scale-y-[1.1] transform origin-bottom">
                  The Texas Tribune
                </h1>
              </Link>
              
              <span className="font-bold text-[14px] text-zinc-900 mt-2">
                Independent news. Trusted by Texans.
              </span>
            </div>

            {/* Search Icon (Far right) */}
            <button className="w-10 h-10 flex items-center justify-end text-black hover:opacity-70 transition-opacity" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* Thick Yellow Divider Line */}
          <div className="w-full h-[3px] bg-[#ffcc00] mt-6 mb-4"></div>

          {/* Secondary Topics Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[14px] font-medium text-black">
            <Link href="/topic/corpus-christi" className="hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-all">
              Corpus Christi
            </Link>
            <Link href="/topic/measles" className="hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-all">
              Measles
            </Link>
            <Link href="/topic/jail-sentences" className="hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-all">
              Jail Sentences
            </Link>
            <Link href="/topic/drag-shows" className="hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-all">
              Drag Shows
            </Link>
            <Link href="/topic/snap-restrictions" className="hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-all">
              SNAP Restrictions
            </Link>
          </nav>
        </div>


        {/* ==============================================
                          MOBILE HEADER
            ============================================== */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between pb-3 relative">
            
            {/* Left side: Logo */}
            <Link href="/" className="flex items-center gap-[6px] shrink-0">
              <div className="relative flex items-center justify-center w-[20px] h-[20px] bg-[#ffcc00] shrink-0 mt-[2px]">
                <svg viewBox="0 0 24 24" fill="white" className="w-[14px] h-[14px] z-10">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div className="absolute -bottom-[4px] left-0 w-0 h-0 border-t-[5px] border-t-[#ffcc00] border-r-[5px] border-r-transparent"></div>
              </div>
              <h1 className="text-black font-black text-[22px] uppercase tracking-tighter leading-none scale-y-[1.1] transform origin-bottom border-b border-transparent">
                The Texas Tribune
              </h1>
            </Link>

            {/* Right side: Donate button + Menu icon */}
            <div className="flex items-center gap-3 shrink-0 pl-2">
              <Link href="/donate" className="bg-[#ffcc00] text-black px-[10px] py-[6px] text-[10px] font-bold tracking-[0.05em] hover:bg-[#e6b800] transition-colors leading-none uppercase">
                Donate
              </Link>
              <button aria-label="Menu" className="flex flex-col justify-center items-center w-6 h-5 space-y-[4px]">
                <span className="w-full h-[2px] bg-black block"></span>
                <span className="w-full h-[2px] bg-black block"></span>
                <span className="w-full h-[2px] bg-black block"></span>
              </button>
            </div>
            
          </div>
        </div>

      </div>

      {/* Mobile Scrollable Topics Strip (Bottom row inside header) */}
      <div className="block md:hidden border-t border-gray-100">
        <div className="relative w-full overflow-hidden flex items-center h-[38px]">
          <nav 
            className="flex overflow-x-auto items-center h-full gap-x-6 text-[12px] font-normal px-4 whitespace-nowrap [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <Link href="/topic/corpus-christi" className="text-[#333]">
              Corpus Christi
            </Link>
            <Link href="/topic/measles" className="text-[#555]">
              Measles
            </Link>
            <Link href="/topic/jail-sentences" className="text-[#555]">
              Jail Sentences
            </Link>
            <Link href="/topic/drag-shows" className="text-[#555]">
              Drag Shows
            </Link>
            <Link href="/topic/snap-restrictions" className="text-[#555]">
              SNAP Restrictions
            </Link>
            {/* spacer to comfortably scroll past the fade */}
            <div className="pr-4 shrink-0"></div>
          </nav>
          
          {/* Fading gradient element on the right edge mimicking image fade */}
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
      
    </header>
  );
}
