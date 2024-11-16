import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  return (
    <div className="relative w-64">
      <Input type="search" placeholder="Search..." className="pl-10" />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
  )
} 