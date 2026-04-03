import Link from 'next/link';

export default function TopHeader() {
  return (
    <div className="hidden w-full bg-[#1c1c1c] text-white md:flex justify-center">
      <div className="w-full max-w-7xl mx-auto flex items-stretch justify-between h-[42px] px-4 md:px-8">
        <nav className="flex items-center gap-6">
          <Link href="/investigations" className="text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
            INVESTIGATIONS
          </Link>
          <Link href="/guides" className="text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
            GUIDES
          </Link>
          <Link href="/about" className="text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/events" className="text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
            EVENTS
          </Link>
          <Link href="/data" className="text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors">
            DATA
          </Link>
        </nav>

        <div className="flex items-stretch">
          <Link href="/newsletters" className="flex items-center text-[12px] font-bold tracking-wider text-gray-200 hover:text-white transition-colors pr-6">
            NEWSLETTERS
          </Link>
          <Link href="/donate" className="flex items-center bg-[#ffcc00] hover:bg-[#e6b800] text-black px-6 text-[12px] font-bold tracking-wider transition-colors">
            DONATE
          </Link>
        </div>
      </div>
    </div>
  );
}
