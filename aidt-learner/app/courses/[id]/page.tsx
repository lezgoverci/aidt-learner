import { ChevronRight, Clock, Star } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedCourses } from "@/components/related-courses"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// This would typically come from an API or database
const courseData = {
  id: "1",
  title: "OpenAI API: Function Calling",
  instructor: {
    name: "Morten Rand-Hendriksen",
    role: "Senior Staff Instructor, Speaker, Web Designer, and Software Developer",
    avatar: "/placeholder.svg"
  },
  duration: "34m",
  level: "Beginner",
  rating: 4.8,
  ratingCount: 120,
  releaseDate: "12/7/2023",
  description: "OpenAI's Assistants API allows you to create custom GPT versions with their own instructions, knowledge retrieval, and actions for highly specialized and targeted functionality to incorporate into larger products. In this course you'll learn how to harness the power of custom GPT Assistants for everything from small personal tasks to large enterprise applications.",
  learningObjectives: [
    "Learn what the Assistants API is and how it works",
    "Use the OpenAI playground to work with the Assistants API",
    "Incorporate custom GPT Assistants in your applications",
    "Activate RAG (Retrieval Augmented Generation) with a simple upload"
  ],
  skills: ["OpenAI API", "Chatbot Development", "OpenAI Products"],
  videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
}

export default function CourseDetails() {
  return (
    <div className="space-y-8">
      {/* Video Player - Now outside the content grid */}
      <div className="aspect-video w-full bg-black">
        <video
          className="w-full h-full"
          controls
          poster="/placeholder.svg"
          src={courseData.videoUrl}
        />
      </div>

      {/* Main content - Now wrapped in a container */}
      <div className="flex gap-8 p-6">
        <div className="flex-1 space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{courseData.title}</span>
          </nav>

          {/* Course Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{courseData.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={courseData.instructor.avatar} />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{courseData.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{courseData.instructor.role}</p>
                </div>
              </div>
              <Button>Follow on LinkedIn</Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{courseData.duration}</span>
              </div>
              <span>•</span>
              <span>{courseData.level}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span>{courseData.rating}</span>
                <span>({courseData.ratingCount})</span>
              </div>
              <span>•</span>
              <span>Released: {courseData.releaseDate}</span>
            </div>
          </div>

          {/* Course Content */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
              <TabsTrigger value="notebook">Notebook</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">About this course</h2>
                <p className="text-muted-foreground">{courseData.description}</p>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Learning objectives</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {courseData.learningObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Skills covered</h2>
                <div className="flex gap-2">
                  {courseData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="qa">Q&A content coming soon...</TabsContent>
            <TabsContent value="notebook">Notebook content coming soon...</TabsContent>
            <TabsContent value="transcript">Transcript content coming soon...</TabsContent>
          </Tabs>
        </div>

        {/* Related Courses Sidebar */}
        <div className="w-80 flex-shrink-0">
          <RelatedCourses />
        </div>
      </div>
    </div>
  )
}

