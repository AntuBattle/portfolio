"use client"

import { useEffect, useState } from "react"
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

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createClient()

      const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching projects:", error)
      } else {
        setProjects(data || [])
      }

      setLoading(false)
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading projects...</p>
      </div>
    )
  }

  const displayProjects = projects

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
            <Button asChild size="sm">
              <Link href={`/projects/${project.slug}`}>Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
