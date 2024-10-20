import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MainImage from '@/app/images/talha.jpeg'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>
      <div className="flex justify-center mb-8">
        <Image
          src={MainImage}
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
       <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Matric From Bise Hyderabad</li>
              <li>Bachelors in Arts(BA)</li>
              <li>Currently Persuing Software Development from Governor Sindh Initiative for Artificial intelligence Web 3.0 and Metaverse</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JAVASCRIPT</Badge>
              <Badge>TYPESCRIPT</Badge>
              <Badge>NEXTS</Badge>
              <Badge>TAILWIND CSS</Badge>
              <Badge>SHADCN UI</Badge>
              <Badge>CMS</Badge>
            </div>
          </CardContent>
        </Card>
        
        
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Interests</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Web Development</li>
              <li>Software Development</li>
              <li>Artificial Intelligence</li>
              <li>Blockchain Technology</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}