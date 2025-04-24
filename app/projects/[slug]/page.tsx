import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import BlogContent from "@/components/blog-content"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const supabase = await createClient()
  const { slug } = await params;

  const { data: project } = await supabase
    .from("projects")
    .select("title, description")
    .eq("slug", slug)
    .single()

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { slug } = await params

  const { data: project, error } = await supabase.from("projects").select("*").eq("slug", slug).single()

  if (error || !project) {
    notFound()
  }

  // Placeholder project content if no content is available
  const projectContent = project.content

  return (
    <div className="mx-auto px-4 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies &&
                project.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="secondary" className="bg-accent/20 text-sm">
                    {tech}
                  </Badge>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.github_url && (
                <Button asChild variant="outline">
                  <Link
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              )}

              {project.demo_url && (
                <Button asChild>
                  <Link
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] cyber-border rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image_url || "/placeholder.svg?height=800&width=1200"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="cyber-card p-8 rounded-lg prose prose-lg dark:prose-invert max-w-none">
            <BlogContent content = {projectContent} />
          </div>
        </div>
      </div>
    </div>
  )
}
