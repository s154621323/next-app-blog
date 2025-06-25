import Image from 'next/image'
import Link from 'next/link'
import { BlogItem as BlogItemType } from '@/types'

const BlogItem = ({
  title,
  category,
  date,
  excerpt,
  imageUrl,
  id,
}: BlogItemType) => {
  return (
    <Link
      href={`/${id}`}
      className="group rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
        <span className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
          阅读更多 &rarr;
        </button>
      </div>
    </Link>
  )
}

export default BlogItem
