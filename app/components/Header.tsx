import Link from 'next/link'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <nav className="space-x-4">
          <Link href="/about" className="text-lg font-medium hover:text-blue-600 transition-colors">
            About me
          </Link>
          <Link href="/blog" className="text-lg font-medium hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </nav>
        <SearchBar />
      </div>
    </header>
  )
} 