import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import ProjectCard from "./project-card"

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
        <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
  )
}
