import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full px-4 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-pink-500 whitespace-nowrap">
          <Image alt="logo" src={'/logo.png'} width={100} height={75} />
          BoardMates
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-pink-400 font-medium justify-center flex-1">
          <Link href="/calendar" className="hover:text-pink-600">
            Calendar
          </Link>
          <Link href="/shopping" className="hover:text-pink-600">
            Shopping
          </Link>
          <Link href="/bills" className="hover:text-pink-600">
            Bills
          </Link>
        </nav>
        <button className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full hover:bg-pink-600 transition whitespace-nowrap">
          + Add
        </button>
      </div>
    </header>
  );
}
