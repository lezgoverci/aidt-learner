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
    "id": "1",
    "title": "Digital Transformation Playbook",
    "author": "Edwin Bautista",
    "duration": "4h",
    "thumbnail": "/erb_course.png",
    "isPopular": true
  },
  {
    "id": "2",
    "title": "Disruptive Innovation",
    "author": "Edwin Bautista",
    "duration": "3h 30m",
    "thumbnail": "https://picsum.photos/seed/disruptive-innovation/480/270",
    "isPopular": true
  },
  {
    "id": "3",
    "title": "Customer Journey and Digital Marketing",
    "author": "Edwin Bautista",
    "duration": "3h 45m",
    "thumbnail": "https://picsum.photos/seed/customer-journey/480/270",
    "isPopular": false
  },
  {
    "id": "4",
    "title": "Transformation Leadership",
    "author": "Edwin Bautista",
    "duration": "3h",
    "thumbnail": "https://picsum.photos/seed/transformation-leadership/480/270",
    "isPopular": true
  },
  {
    "id": "5",
    "title": "Cybersecurity and Data Privacy",
    "author": "Edwin Bautista",
    "duration": "4h",
    "thumbnail": "https://picsum.photos/seed/cybersecurity/480/270",
    "isPopular": false
  },
  {
    "id": "6",
    "title": "Agile Culture and Methods",
    "author": "Edwin Bautista",
    "duration": "3h 15m",
    "thumbnail": "https://picsum.photos/seed/agile-culture/480/270",
    "isPopular": true
  },
  {
    "id": "7",
    "title": "Intrapreneurial Design Thinking",
    "author": "Edwin Bautista",
    "duration": "3h",
    "thumbnail": "https://picsum.photos/seed/design-thinking/480/270",
    "isPopular": false
  },
  {
    "id": "8",
    "title": "Open Innovation and Collaboration",
    "author": "Edwin Bautista",
    "duration": "2h 45m",
    "thumbnail": "https://picsum.photos/seed/open-innovation/480/270",
    "isPopular": false
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

