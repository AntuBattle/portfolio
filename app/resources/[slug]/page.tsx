import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import BlogContent from "@/components/blog-content"


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const supabase = await  createClient();
    const { slug } = await params; 
  
    const { data: resource } = await supabase
      .from("resources")
      .select("title, description")
      .eq("slug", slug)
      .single()
  
    if (!resource) {
          notFound()
      }

    return {
      title: `${resource.title} | Resources`,
      description: resource.description,
    }
  }
  
  export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
    const supabase = await createClient()
    const { slug } = await params
  
    // Try to fetch from database
    const { data: resource, error } = await supabase.from("resources").select("*").eq("slug", slug).single()

     if (!resource){
       return (
        <div className="p-6 border border-destructive/30 rounded-lg bg-destructive/5 text-center">
          <h3 className="text-lg font-semibold mb-2">Resource Not Found</h3>  
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
       )
     } 
  
    // Use database resource
    return renderResourcePage(resource)
  }
  
  // Helper function to render the resource page
  function renderResourcePage(resource: any) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/resources" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
  
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{resource.title}</h1>
                <Badge variant="secondary" className="bg-secondary/50">
                  {resource.category}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-6">{resource.description}</p>
  
              <Button asChild size="lg" className="mb-8">
                <a
                  href={resource.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  Access Resource
                </a>
              </Button>
            </div>
  
            <div className="relative h-[400px] cyber-border rounded-lg overflow-hidden mb-8">
              <Image
                src={resource.image_url || "/placeholder.svg?height=800&width=1200"}
                alt={resource.title}
                fill
                className="object-cover"
              />
            </div>
  
            <div className="cyber-card p-8 rounded-lg prose prose-lg dark:prose-invert max-w-none">
              <BlogContent content={resource.content} />
            </div>
          </div>
        </div>
      </div>
    )
  }  