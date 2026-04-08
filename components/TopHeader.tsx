"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return ( 
    <>
    <div className='sticky top-0 z-50'>
      <div className="hidden w-full bg-[#1c1c1c] text-white md:flex justify-center">
        <div className="w-full max-w-7xl mx-auto flex items-stretch justify-between h-[42px] px-4 md:px-8">
          <nav className="flex items-center gap-4">
            <Link href="/our-company" className="text-[11px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
              OUR COMPANY
            </Link>
            <Link href="/contact-us" className="text-[11px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
              CONTACT
            </Link>
            <Link href="/about" className="text-[11px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
              ABOUT
            </Link>
            <Link href="/our-team" className="text-[11px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
              OUR TEAM
            </Link>
            
          </nav>

          <div className="flex items-center h-full py-2">
            <p  className="flex items-center text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors pr-6">
              NEWSLETTERS
            </p>
            {/* <Link href="/donate" className="flex items-center h-full bg-[#ffcc00] hover:bg-[#e6b800] text-black px-2 text-[12px] font-bold tracking-wider transition-colors">
              DONATE
            </Link> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-white md:pt-8 md:pb-4 pt-4 pb-0 ">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* ==============================================
                          DESKTOP HEADER
            ============================================== */}
          <div className="hidden md:block">
            <div className="w-full flex items-center justify-between relative">
              <div className="w-10 invisible"></div>
              <div className="flex flex-col items-center flex-1">
                <Link href="/" className="flex items-center gap-[6px] mb-1">
              
               <h1 className="text-black font-black text-[42px] md:text-[35px] uppercase tracking-[-0.05em] leading-[0.9] pr-2 scale-y-[1.1] transform origin-bottom">
Domain Name
</h1>
                </Link>

                <span className="font-bold text-[14px] text-zinc-900 mt-2">
                  Independent news. Trusted by Domain.
                </span>
              </div>

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

            <div className="w-full h-[2px] bg-[#ffcc00] mt-4 mb-4"></div>

            <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[14px] font-medium font-open-sans text-black">
              {[
                { name: "Home", href: "/" },
                { name: "World", href: "/world" },
                { name: "U.S News", href: "/us" },
                { name: "Politics", href: "/politics" },
                { name: "Business", href: "/business" },
                { name: "Health", href: "/health" },
                { name: "Sports", href: "/sports" },
                { name: "Entertainment", href: "/entertainment" }
              ].map(item => (
                <Link key={item.name} href={item.href} className="hover:underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-all">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* ==============================================
                          MOBILE HEADER
            ============================================== */}
          <div className="block md:hidden">
            <div className="flex items-center justify-between pb-3 relative">

              <Link href="/" className="flex items-center gap-[6px] shrink-0">
               
                <h1 className="text-black font-black text-[22px] uppercase tracking-tighter leading-none scale-y-[1.1] transform origin-bottom border-b border-transparent">
                  Domain Name
                </h1>
              </Link>

              <div className="flex items-center gap-3 shrink-0 pl-2">
                {/* <Link href="/donate" className="bg-[#ffcc00] text-black px-[10px] py-[6px] text-[10px] font-bold tracking-[0.05em] hover:bg-[#e6b800] transition-colors leading-none uppercase">
                  Donate
                </Link> */}
                <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Menu" className="flex flex-col justify-center items-center w-6 h-5 space-y-[4px]">
                  <span className="w-full h-[2px] bg-black block"></span>
                  <span className="w-full h-[2px] bg-black block"></span>
                  <span className="w-full h-[2px] bg-black block"></span>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="block md:hidden border-t border-gray-100">
          <div className="relative w-full overflow-hidden flex items-center h-[38px]">
            <nav
              className="flex overflow-x-auto items-center h-full gap-x-6 text-[12px] font-normal px-4 whitespace-nowrap [&::-webkit-scrollbar]:hidden"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {[
                { name: "Home", href: "/" },
                { name: "World", href: "/world" },
                { name: "U.S News", href: "/us" },
                { name: "Politics", href: "/politics" },
                { name: "Business", href: "/business" },
                { name: "Health", href: "/health" },
                { name: "Sports", href: "/sports" },
                { name: "Entertainment", href: "/entertainment" }
              ].map(item => (
                 <Link key={item.name} href={item.href} className="text-[#555]">
                   {item.name}
                 </Link>
              ))}
              <div className="pr-4 shrink-0"></div>
            </nav>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/50 overflow-hidden md:hidden">
          <div className="w-[80%] max-w-sm h-full bg-black text-white flex flex-col p-6 overflow-y-auto" style={{ animation: 'slideIn 0.3s forwards' }}>
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[12px] font-bold text-[#ffcc00] border border-[#ffcc00] px-2 py-1 flex items-center gap-1 hover:bg-[#ffcc00] hover:text-black transition-colors"
              >
                <span className="text-[14px]">✕</span> CLOSE
              </button>
            </div>
            
            <div className="relative mb-8 text-black">
              <input 
                type="text" 
                placeholder="Search ..." 
                className="w-full h-10 px-3 pr-10 text-[14px] rounded-none outline-none"
              />
              <svg className="w-5 h-5 absolute right-2 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            
            <nav className="flex flex-col space-y-6 text-[13px] font-bold tracking-widest mb-8 uppercase">
              <Link href="/our-company" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Our Company</Link>
              <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Contact</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">ABOUT</Link>
              <Link href="/our-team" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Our Team</Link>
              <Link href="/editorial-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Editorial Policy</Link>
              <Link href="/correction-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Correction Policy</Link>
              <Link href="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms-and-conditions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Terms and Conditions</Link>
            </nav>
            
            
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
          `}} />
        </div>
      )}
    </>

  );
}
