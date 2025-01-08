import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

// Mock data - replace with real data in production
const relatedCourses = [
  {
    id: "2",
    title: "Building AI-Powered Applications",
    instructor: "Sarah Johnson",
    duration: "2h 15m",
    thumbnail: "https://picsum.photos/seed/ai-course/320/200"
  },
  {
    id: "3",
    title: "Machine Learning Fundamentals",
    instructor: "David Chen",
    duration: "1h 45m",
    thumbnail: "https://picsum.photos/seed/ml-course/320/200"
  },
  {
    id: "4",
    title: "Deep Learning with Neural Networks",
    instructor: "Maria Garcia",
    duration: "3h 30m",
    thumbnail: "https://picsum.photos/seed/deep-learning/320/200"
  },
  {
    id: "5",
    title: "Natural Language Processing Essentials",
    instructor: "James Wilson",
    duration: "2h 45m",
    thumbnail: "https://picsum.photos/seed/nlp-course/320/200"
  },
  {
    id: "6",
    title: "Computer Vision and Image Recognition",
    instructor: "Emily Zhang",
    duration: "4h 00m",
    thumbnail: "https://picsum.photos/seed/cv-course/320/200"
  },
  {
    id: "7",
    title: "Reinforcement Learning: From Theory to Practice",
    instructor: "Alex Thompson",
    duration: "3h 15m",
    thumbnail: "https://picsum.photos/seed/rl-course/320/200"
  }
]

export function RelatedCourses() {
  return (
    <Card>
      <div className="p-4 border-b">
        <h3 className="font-semibold">Related Courses</h3>
      </div>
      <div className="p-4 space-y-4">
        {relatedCourses.map((course) => (
          <Link 
            key={course.id} 
            href={`/courses/${course.id}`}
            className="flex gap-3 hover:bg-muted/50 rounded-lg p-2 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative h-20 w-32 flex-shrink-0">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            {/* Course info */}
            <div className="flex flex-col justify-between py-1">
              <div>
                <h4 className="font-medium line-clamp-2">{course.title}</h4>
                <p className="text-sm text-muted-foreground">{course.instructor}</p>
              </div>
              <p className="text-xs text-muted-foreground">{course.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  )
}

