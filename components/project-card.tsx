import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectProps {
    title: string
    slug: string
    description: string
    image_url: string
    github_url: string | null
    demo_url: string | null
    technologies: string[]
}



interface Project {
    project: ProjectProps
}

function ProjectCard({ project, }: Project){

    return(
      <Card
        className="
          cyber-card
          overflow-hidden
          flex flex-col h-full
          relative"
        >
        <div className="relative h-48 w-full">
          <Image
            src={project.image_url || "/placeholder.svg?height=300&width=500"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tag: string, i: number) => (
                <Badge key={i} variant="secondary" className="bg-accent/30" >
                    {tag}
                </Badge>
                ))}
            </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {project.description}
          </p>
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
    )
}

export default ProjectCard;
