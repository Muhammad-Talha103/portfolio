import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application built with Vue.js and Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/task-management-app",
    live: "https://task-management-demo.netlify.app",
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description: "A weather dashboard using React and the OpenWeatherMap API.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/weather-forecast",
    live: "https://weather-forecast-demo.vercel.app",
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "A content management system for blogs using Next.js and Strapi.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/blog-cms",
    live: "https://blog-cms-demo.vercel.app",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking app built with React Native and GraphQL.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/fitness-tracker",
    live: "https://fitness-tracker-demo.expo.io",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "A dashboard for managing multiple social media accounts using Angular and Node.js.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/social-media-dashboard",
    live: "https://social-media-dashboard-demo.herokuapp.com",
  },
  {
    id: 7,
    title: "Recipe Finder",
    description: "A recipe search and save application using React and the Spoonacular API.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/recipe-finder",
    live: "https://recipe-finder-demo.netlify.app",
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Gatsby and GraphQL.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/portfolio-website",
    live: "https://portfolio-website-demo.gatsbyjs.io",
  },
  {
    id: 9,
    title: "Movie Recommendation Engine",
    description: "A movie recommendation system using Python, Flask, and machine learning algorithms.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/movie-recommendations",
    live: "https://movie-recommendations-demo.pythonanywhere.com",
  },
  {
    id: 10,
    title: "Cryptocurrency Tracker",
    description: "A real-time cryptocurrency price tracker using React and the CoinGecko API.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/crypto-tracker",
    live: "https://crypto-tracker-demo.vercel.app",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-t-lg object-cover w-full h-48"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}