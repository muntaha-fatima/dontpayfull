import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black  text-sm flex flex-col md:flex-row items-center  md:justify-between p-1 md:p-1 space-y-2 md:space-y-0">
      {/* Logo Section */}
      <div className="flex items-center gap-1 md:gap-2">
        <Image
          src="/image/dontpayfull (1).png"
          alt="logo"
          width={150}
          height={50}
          className="w-full md:w-24 h-auto p-4 md:gap-7 "
        />
        <h1 className="text-white text-lg md:text-xl">DONTPAYFULL</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <Link className="text-white hover:text-blue-400" href="/mainwebsite">
          Main Website
        </Link>
        <span className="hidden md:block border-r border-gray-600 h-4"></span>
        <Link className="text-white hover:text-blue-400" href="/Forum">
          Forum
        </Link>
        <span className="hidden md:block border-r border-gray-600 h-4"></span>
        <Link className="text-white hover:text-blue-400" href="/Blog">
          Blog
        </Link>
      </nav>
    </header>
  );
}
