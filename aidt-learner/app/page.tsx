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
    thumbnail: "https://picsum.photos/seed/gpt-actions/480/270",
    isPopular: true,
  },
  {
    id: "2",
    title: "Build Your Own GPTs",
    author: "AI Expert",
    duration: "46m",
    thumbnail: "https://picsum.photos/seed/build-gpts/480/270",
    isPopular: true,
  },
  {
    id: "3",
    title: "Building a React Project with Google Bard and PaLM2",
    author: "Ray Villalobos",
    duration: "1h 21m",
    thumbnail: "https://picsum.photos/seed/react-bard-palm2/480/270",
    isPopular: true,
  },
  {
    id: "4",
    title: "ChatGPT: Publishing GPTs on the GPT Store",
    author: "Morten Rand-Hendriksen",
    duration: "20m",
    thumbnail: "https://picsum.photos/seed/gpt-store/480/270",
    isPopular: true,
  },
  {
    id: "5",
    title: "AI Workshop: Chatbot Development",
    author: "Axel Sirota",
    duration: "2h 15m",
    thumbnail: "https://picsum.photos/seed/ai-chatbot/480/270",
    isPopular: true,
  },
  {
    id: "11",
    title: "Machine Learning Fundamentals",
    author: "Sarah Mitchell",
    duration: "3h 45m",
    thumbnail: "https://picsum.photos/seed/ml-fundamentals/480/270",
    isPopular: true,
  },
  {
    id: "12",
    title: "Advanced TypeScript Patterns",
    author: "Michael Chen",
    duration: "2h 30m",
    thumbnail: "https://picsum.photos/seed/typescript-adv/480/270",
    isPopular: true,
  },
  {
    id: "13",
    title: "Docker for Developers",
    author: "Carlos Rodriguez",
    duration: "4h 15m",
    thumbnail: "https://picsum.photos/seed/docker-dev/480/270",
    isPopular: true,
    isUpdated: true,
  }
]

const topCourses = [
  {
    id: "6",
    title: "Metasploit Essential Training",
    author: "Lisa Bock",
    duration: "4h",
    thumbnail: "https://picsum.photos/seed/metasploit/480/270",
    isPopular: true,
  },
  {
    id: "7",
    title: "Enterprise Architecture in Practice",
    author: "Jane Doe",
    duration: "58m",
    thumbnail: "https://picsum.photos/seed/enterprise-arch/480/270",
    isPopular: true,
    isUpdated: true,
  },
  {
    id: "8",
    title: "Maya 2024 Essential Training",
    author: "George Maestri",
    duration: "4h 17m",
    thumbnail: "https://picsum.photos/seed/maya-2024/480/270",
    isPopular: true,
  },
  {
    id: "9",
    title: "Learning Kubernetes",
    author: "Kim Schlesinger",
    duration: "1h 28m",
    thumbnail: "https://picsum.photos/seed/kubernetes/480/270",
    isPopular: true,
    isUpdated: true,
  },
  {
    id: "10",
    title: "C#: Interfaces and Generics",
    author: "Joe Marini",
    duration: "1h 45m",
    thumbnail: "https://picsum.photos/seed/csharp-interfaces/480/270",
    isPopular: true,
  },
  {
    id: "14",
    title: "React Performance Optimization",
    author: "Emma Thompson",
    duration: "2h 50m",
    thumbnail: "https://picsum.photos/seed/react-perf/480/270",
    isPopular: true,
  },
  {
    id: "15",
    title: "AWS Solutions Architecture",
    author: "James Wilson",
    duration: "5h 30m",
    thumbnail: "https://picsum.photos/seed/aws-solutions/480/270",
    isPopular: true,
    isUpdated: true,
  },
  {
    id: "16",
    title: "Python for Data Science",
    author: "Nina Patel",
    duration: "4h 45m",
    thumbnail: "https://picsum.photos/seed/python-data/480/270",
    isPopular: true,
  }
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

