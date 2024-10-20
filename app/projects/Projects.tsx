import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import expencetracker from "../images/expense-tracker.png"
import weather from "../images/weather.png"
import Birthday from "../images/birthday.png"
import Calculator from "../images/calculator.png"
import Watch from "../images/Watch.png"
import jokes from "../images/Screenshot (28).png"
import Colorpicker from "../images/color-picker.png"
import Passswordjanirator from "../images/passward-anerator.png"
import tipCalculator from "../images/tip-calculator.png"
import BMICalculator from "../images/Bmi-calculator.png"




const projects = [
  {
    id: 1,
    title: "Expense Tracker App",
    description: "A Expense Tracker App with Nextjs14 , Tailwind.css and TypeScript",
    image: expencetracker,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-15",
    live: "https://project-of-30-days.vercel.app/Day-15",
  },
  {
    id: 2,
    title: "Weather",
    description: "A Weather App with Nextjs14 , Tailwind.css and TypeScript",
    image: weather,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-02",
    live: "https://project-of-30-days.vercel.app/Day-02",
  },
  {
    id: 3,
    title: "Birthday Wishes App",
    description: "A Birthday Wishes App with Nextjs14 , Tailwind.css and TypeScript",
    image: Birthday,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-03",
    live: "https://project-of-30-days.vercel.app/Day-03",
  },
  {
    id: 4,
    title: "Calculator",
    description: "A Calculator App with Nextjs14 , Tailwind.css and TypeScript.",
    image: Calculator,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-05",
    live: "https://project-of-30-days.vercel.app/Day-05",
  },
  {
    id: 5,
    title: "Digital Watch",
    description: "A Digital Watch App with Nextjs14 , Tailwind.css and TypeScript.",
    image: Watch,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-06",
    live: "https://project-of-30-days.vercel.app/Day-06",
  },
  {
    id: 6,
    title: "English and Urdu jokes Ganirator",
    description: "A English and Urdu jokes Ganirator App with Nextjs14 , Tailwind.css and TypeScript.",
    image: jokes,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-07",
    live: "https://project-of-30-days.vercel.app/Day-07",
  },
  {
    id: 7,
    title: "Color-picker",
    description: "A Color-picker App with Nextjs14 , Tailwind.css and TypeScript.",
    image: Colorpicker,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-08",
    live: "https://project-of-30-days.vercel.app/Day-08",
  },
  {
    id: 8,
    title: "Tip-Calculator",
    description: "A Tip-Calculator App with Nextjs14 , Tailwind.css and TypeScript.",
    image: tipCalculator,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-09",
    live: "https://project-of-30-days.vercel.app/Day-09",
  },
  {
    id: 9,
    title: "Passsword janirator",
    description: "A Passsword janirator App with Nextjs14 , Tailwind.css and TypeScript.",
    image: Passswordjanirator,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-10",
    live: "https://project-of-30-days.vercel.app/Day-10",
  },
  {
    id: 10,
    title: "BMI-Calculator",
    description: "A BMI-Calculator App with Nextjs14 , Tailwind.css and TypeScript.",
    image: BMICalculator,
    github: "https://github.com/Muhammad-Talha103/Project-Of-30-Days/tree/main/app/Day-11",
    live: "https://project-of-30-days.vercel.app/Day-11",
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