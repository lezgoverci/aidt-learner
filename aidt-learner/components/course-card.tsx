import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  id: string
  title: string
  author: string
  duration: string
  thumbnail: string
  isPopular?: boolean
  isUpdated?: boolean
  className?: string
}

export function CourseCard({
  id,
  title,
  author,
  duration,
  thumbnail,
  isPopular,
  isUpdated,
  className,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className={`group overflow-hidden transition-all hover:shadow-lg ${className}`}>
        <CardHeader className="relative p-0">
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={225}
            className="aspect-video object-cover"
          />
          <div className="absolute right-2 top-2 flex gap-2">
            {isPopular && (
              <Badge variant="secondary">Popular</Badge>
            )}
            {isUpdated && (
              <Badge variant="secondary">Updated</Badge>
            )}
          </div>
          <div className="absolute bottom-2 right-2">
            <Badge variant="secondary">{duration}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold group-hover:text-blue-600">{title}</h3>
          <p className="text-sm text-muted-foreground">By: {author}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

