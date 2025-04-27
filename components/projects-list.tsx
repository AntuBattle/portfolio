import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"

type Project = {
  id: string
  title: string
  slug: string
  description: string
  image_url: string
  github_url: string | null
  demo_url: string | null
  technologies: string[]
  featured: boolean
}

export default async function ProjectsList() {
    const supabase = await createClient()

    let query = supabase.from("projects").select("*").order("created_at", { ascending: false })

    const {data: projects_list, error} = await query

    if (error) {
      console.error("Error fetching projects:", error)
    } else {
      
    if (projects_list.length === 0) {
      return (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No projects found</h3>
          <p className="text-muted-foreground mt-2">
            Please try reloading the page. If the problem persists, please contact me via the contact page. 
          </p>
        </div>
      )
    }
    }


  const displayProjects = projects_list as Project[]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayProjects.map((project) => (
        <Card key={project.id} className="cyber-card overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image
              src={project.image_url || "/placeholder.svg?height=300&width=500"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {project.github_url && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.demo_url && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Link>
              </Button>
            )}
            <Button asChild size="sm" className="bg-accent/80 ">
              <Link href={`/projects/${project.slug}`}>Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
