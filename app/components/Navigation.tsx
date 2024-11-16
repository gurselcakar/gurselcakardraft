import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="space-x-4">
      <Link href="/about" className="hover:underline">about</Link>
      <Link href="/projects" className="hover:underline">projects</Link>
      <Link href="/blog" className="hover:underline">blog</Link>
      <Link href="/contact" className="hover:underline">contact</Link>
    </nav>
  )
} 