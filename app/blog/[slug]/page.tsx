import { notFound } from "next/navigation"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
// Import the BlogContent component
import BlogContent from "@/components/blog-content"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = createClient()

  const { data: post } = await supabase.from("blog_posts").select("title, excerpt").eq("slug", params.slug).single()

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Cybersecurity Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("is_published", true)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <a href="/blog" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Blog
          </a>
        </Button>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <time dateTime={post.published_at}>
                {formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
              </time>
              <div className="flex flex-wrap gap-2">
                {post.tags &&
                  post.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
              </div>
            </div>

            {post.cover_image && (
              <div className="relative h-[300px] md:h-[400px] mb-8 cyber-border rounded-lg overflow-hidden">
                <Image src={post.cover_image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            )}
          </div>

          {/* Replace the div that renders the blog content with BlogContent component */}
          <div className="cyber-card p-8 rounded-lg">
            <BlogContent content={post.content} />
          </div>
        </article>
      </div>
    </div>
  )
}
