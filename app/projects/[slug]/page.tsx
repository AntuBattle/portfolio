import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"

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
  const projectContent =
    project.content ||
    `
    <h2>Project Overview</h2>
    <p>This project was developed to address critical security challenges in modern applications. It combines cutting-edge technologies with proven security practices to deliver a robust solution.</p>
    
    <h2>Key Features</h2>
    <ul>
      <li>Advanced threat detection and prevention</li>
      <li>Real-time monitoring and alerting</li>
      <li>Comprehensive logging and audit trails</li>
      <li>Secure authentication and authorization</li>
      <li>Encrypted data storage and transmission</li>
    </ul>
    
    <h2>Technical Implementation</h2>
    <p>The implementation leverages a microservices architecture with containerized components for scalability and maintainability. Security was built into every layer of the application, from the infrastructure to the user interface.</p>
    
    <h2>Challenges and Solutions</h2>
    <p>One of the main challenges was balancing security with usability. This was addressed through careful UX design and performance optimization to ensure that security measures didn't negatively impact the user experience.</p>
    
    <h2>Results and Impact</h2>
    <p>The project successfully improved security posture while maintaining excellent performance metrics. It has been deployed in production environments and has effectively prevented several potential security incidents.</p>
  `

  return (
    <div className="container mx-auto px-4 py-12">
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
                  <Badge key={index} variant="secondary" className="bg-secondary/50 text-sm">
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

          <div
            className="cyber-card p-8 rounded-lg prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: projectContent }}
          />
        </div>
      </div>
    </div>
  )
}
