'use client'
import { ChevronRight, Clock, Star, ChevronDown, Maximize2 } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedCourses } from "@/components/related-courses"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { useState } from 'react'

// This would typically come from an API or database
// const courseData = {
//   id: "1",
//   title: "OpenAI API: Function Calling",
//   instructor: {
//     name: "Morten Rand-Hendriksen",
//     role: "Senior Staff Instructor, Speaker, Web Designer, and Software Developer",
//     avatar: "/placeholder.svg"
//   },
//   duration: "34m",
//   level: "Beginner",
//   rating: 4.8,
//   ratingCount: 120,
//   releaseDate: "12/7/2023",
//   description: "OpenAI's Assistants API allows you to create custom GPT versions with their own instructions, knowledge retrieval, and actions for highly specialized and targeted functionality to incorporate into larger products. In this course you'll learn how to harness the power of custom GPT Assistants for everything from small personal tasks to large enterprise applications.",
//   learningObjectives: [
//     "Learn what the Assistants API is and how it works",
//     "Use the OpenAI playground to work with the Assistants API",
//     "Incorporate custom GPT Assistants in your applications",
//     "Activate RAG (Retrieval Augmented Generation) with a simple upload"
//   ],
//   skills: ["OpenAI API", "Chatbot Development", "OpenAI Products"],
//   videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//   contents: [
//     {
//       title: "Introduction",
//       items: [
//         {
//           title: "Building custom AI agents with the OpenAI Assistants API",
//           duration: "54s",
//           isCompleted: true
//         },
//         {
//           title: "How to use the exercise files",
//           duration: "3m 4s",
//           isCompleted: false
//         }
//       ]
//     },
//     {
//       title: "1. Using the Assistants API",
//       items: [
//         {
//           title: "Assistants: GPTs, but through the API",
//           duration: "3m 21s",
//           isCompleted: false
//         },
//         {
//           title: "Creating a basic assistant in the OpenAI playground",
//           duration: "4m 37s",
//           isCompleted: false
//         },
//         {
//           title: "Adding capabilities, functions, and files to an assistant",
//           duration: "4m 20s",
//           isCompleted: false
//         },
//         {
//           title: "Creating assistants, threads, and runs through the API",
//           duration: "6m 32s",
//           isCompleted: false
//         }
//       ]
//     }
//   ]
// }

const courseData = {
  id: "1",
  title: "Digital Transformation Playbook",
  instructor: {
    name: "Edwin R. Bautista",
    role: "Former CEO of Unionbank of the Philippines",
    avatar: "/erb.png"
  },
  duration: "4h 15m",
  level: "Intermediate",
  rating: 4.9,
  ratingCount: 342,
  releaseDate: "2/15/2024",
  description: "This course provides a foundational understanding of digital transformation, exploring strategies and tools to enhance business operations, innovate business models, and create customer-centric solutions. Learn how to lead successful transformation efforts in a rapidly evolving digital economy.",
  learningObjectives: [
    "Understand the key concepts of digital transformation",
    "Develop leadership skills for navigating and implementing change",
    "Optimize business processes through technology and innovation",
    "Foster a culture of continuous improvement and innovation"
  ],
  skills: ["Digital transformation strategy", "Customer-centric innovation", "Operational excellence", "Business model reengineering"],
  videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  contents: [
    {
      title: "Module 1: Foundations of Digital Transformation and Customer Focus",
      items: [
        {
          title: "Understanding the Digital Transformation Journey",
          duration: "35m",
          isCompleted: false
        },
        {
          title: "The Three Levels of Digital Transformation",
          duration: "28m",
          isCompleted: false
        },
        {
          title: "Improving Efficiency and Rethinking Business Models",
          duration: "42m",
          isCompleted: false
        },
        {
          title: "The Foundations: Digitization as the First Step",
          duration: "31m",
          isCompleted: false
        },
        {
          title: "Streamlining Systems for Success",
          duration: "38m",
          isCompleted: false
        },
        {
          title: "Customer-Centric Innovation",
          duration: "45m",
          isCompleted: false
        },
        {
          title: "Redefining the Business Model",
          duration: "40m",
          isCompleted: false
        }
      ]
    },
    {
      title: "Module 2: Leadership and Business Model Innovation",
      items: [
        {
          title: "Leading Digital Transformation",
          duration: "50m",
          isCompleted: false
        },
        {
          title: "Change Management in Digital Age",
          duration: "45m",
          isCompleted: false
        },
        {
          title: "Business Model Canvas for Digital Age",
          duration: "55m",
          isCompleted: false
        }
      ]
    },
    {
      title: "Module 3: Driving Operational Excellence Through Technology",
      items: [
        {
          title: "Technology Stack Assessment",
          duration: "40m",
          isCompleted: false
        },
        {
          title: "Process Automation and Optimization",
          duration: "48m",
          isCompleted: false
        },
        {
          title: "Data-Driven Decision Making",
          duration: "52m",
          isCompleted: false
        }
      ]
    },
    {
      title: "Module 4: Empowering People and Fostering Innovation",
      items: [
        {
          title: "Building Digital Capabilities",
          duration: "44m",
          isCompleted: false
        },
        {
          title: "Creating an Innovation Culture",
          duration: "47m",
          isCompleted: false
        },
        {
          title: "Measuring Transformation Success",
          duration: "40m",
          isCompleted: false
        }
      ]
    }
  ]
}

export default function CourseDetails() {
  const [isTheaterMode, setIsTheaterMode] = useState(false)

  return (
    <div className="space-y-8 p-6">
      {/* Video container - full width in theater mode */}
      {isTheaterMode && (
        <div className="w-full">
          <div className="relative aspect-video w-full bg-black group">
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src="/index.html" // Replace with your embed URL
                title="Embedded Content"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="absolute bottom-14 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/75 text-white"
                onClick={() => setIsTheaterMode(!isTheaterMode)}
              >
                <Maximize2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main content and sidebar container */}
      <div className="flex gap-8">
        {/* Main content column (video + content) */}
        <div className={cn(
          "space-y-8",
          isTheaterMode ? "flex-1" : "w-[calc(100%-20rem-2rem)]"
        )}>
          {/* Video Player - Only show in non-theater mode */}
          {!isTheaterMode && (
            <div className="relative aspect-video w-full bg-black group">
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="/index.html" // Replace with your embed URL
                  title="Embedded Content"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="absolute bottom-14 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 hover:bg-black/75 text-white"
                  onClick={() => setIsTheaterMode(!isTheaterMode)}
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Course content */}
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
                  <AvatarFallback>EB</AvatarFallback>
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

        {/* Sidebar - Course Contents and Related Courses */}
        <div className="w-80 flex-shrink-0 space-y-6">
          {/* Course Contents Card */}
          <Card>
            <div className="flex items-center p-4 border-b">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-semibold">Contents</span>
              </div>
            </div>
            <div className="divide-y">
              {courseData.contents.map((section, idx) => (
                <Collapsible key={idx} defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="h-4 w-4" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-1 px-4 pb-4">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className={cn(
                            "flex items-center gap-3 rounded-md p-2 text-sm hover:bg-muted/50",
                            item.isCompleted && "text-muted-foreground"
                          )}
                        >
                          <div className="flex-shrink-0">
                            {item.isCompleted ? (
                              <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                                <svg
                                  className="h-3 w-3 text-white"
                                  fill="none"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300" />
                            )}
                          </div>
                          <span className="flex-1">{item.title}</span>
                          <span className="text-muted-foreground text-xs">{item.duration}</span>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </Card>
          {/* Related Courses */}
          <RelatedCourses />
        </div>
      </div>
    </div>
  )
}

