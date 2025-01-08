import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CourseCard } from "@/components/course-card"

const topPicks = [
  {
    id: "1",
    title: "Creating GPTs with Actions",
    author: "Kesha Williams",
    duration: "1h 26m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
  {
    id: "2",
    title: "Build Your Own GPTs",
    author: "AI Expert",
    duration: "46m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
  {
    id: "3",
    title: "Building a React Project with Google Bard and PaLM2",
    author: "Ray Villalobos",
    duration: "1h 21m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
  {
    id: "4",
    title: "ChatGPT: Publishing GPTs on the GPT Store",
    author: "Morten Rand-Hendriksen",
    duration: "20m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
  {
    id: "5",
    title: "AI Workshop: Chatbot Development",
    author: "Axel Sirota",
    duration: "2h 15m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
]

const topCourses = [
  {
    id: "6",
    title: "Metasploit Essential Training",
    author: "Lisa Bock",
    duration: "4h",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
  {
    id: "7",
    title: "Enterprise Architecture in Practice",
    author: "Jane Doe",
    duration: "58m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
    isUpdated: true,
  },
  {
    id: "8",
    title: "Maya 2024 Essential Training",
    author: "George Maestri",
    duration: "4h 17m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
  {
    id: "9",
    title: "Learning Kubernetes",
    author: "Kim Schlesinger",
    duration: "1h 28m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
    isUpdated: true,
  },
  {
    id: "10",
    title: "C#: Interfaces and Generics",
    author: "Joe Marini",
    duration: "1h 45m",
    thumbnail: "/placeholder.svg",
    isPopular: true,
  },
]

export default function Home() {
  return (
    <div className="space-y-8 w-full max-w-[1400px] mx-auto">
      <section>
        <h2 className="mb-4 text-2xl font-bold">Top picks for you</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {topPicks.map((course) => (
              <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
                <CourseCard {...course} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">This week's top courses</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {topCourses.map((course) => (
              <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
                <CourseCard {...course} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

