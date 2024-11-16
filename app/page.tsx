import Header from './components/Header'
import Footer from './components/Footer'
import BlogCard from './components/BlogCard'

export default function Home() {
  const blogPosts = [
    { title: "Getting Started with Next.js", date: "2023-06-01" },
    { title: "The Power of Tailwind CSS", date: "2023-06-15" },
    { title: "Building Modern Web Applications", date: "2023-07-01" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
