import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostProps {
  title: string;
  date: string;
}

export default function BlogCard({ title, date }: BlogPostProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{date}</p>
        <Link 
          href={`/blog/${title.toLowerCase().replace(/ /g, '-')}`} 
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          Read more
        </Link>
      </CardContent>
    </Card>
  )
} 