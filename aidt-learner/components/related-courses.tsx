import Image from "next/image"
import Link from "next/link"
import { Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const relatedCourses = [
  {
    id: "1",
    title: "Controlling ChatGPT with Custom Instructions or Actions",
    thumbnail: "https://placehold.jp/333333/ffffff/480x270.png?text=ChatGPT+Instructions",
    duration: "1h 6m",
    learners: "8,797",
  },
  {
    id: "2",
    title: "OpenAI API: Function Calling",
    thumbnail: "https://placehold.jp/333333/ffffff/480x270.png?text=Function+Calling",
    duration: "34m",
    learners: "9,157",
  },
  {
    id: "3",
    title: "OpenAI API: Speech",
    thumbnail: "https://placehold.jp/333333/ffffff/480x270.png?text=OpenAI+Speech",
    duration: "25m",
    learners: "1,442",
  },
  {
    id: "4",
    title: "OpenAI API: Moderation",
    thumbnail: "https://placehold.jp/333333/ffffff/480x270.png?text=OpenAI+Moderation",
    duration: "14m",
    learners: "1,808",
  },
]

export function RelatedCourses() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Related courses</h2>
      <div className="space-y-4">
        {relatedCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <Link href={`/courses/${course.id}`}>
              <div className="relative aspect-video">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium line-clamp-2">{course.title}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{course.duration}</span>
                  <span>{course.learners} learners</span>
                </div>
              </div>
            </Link>
            <div className="border-t p-2">
              <Button variant="ghost" size="sm" className="w-full">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

