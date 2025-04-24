import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"

export default async function BlogList({
  searchQuery,
  categories,
  sortOrder = "newest",
}: {
  searchQuery?: string
  categories?: string[]
  sortOrder?: string
}) {
  const supabase = await createClient()

  let query = supabase.from("blog_posts").select("*").eq("is_published", true)

  // Apply sorting
  if (sortOrder === "oldest") {
    query = query.order("published_at", { ascending: true })
  } else {
    // Default to newest first
    query = query.order("published_at", { ascending: false })
  }

  if (searchQuery) {
    query = query.or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`)
  }

  if (categories && categories.length > 0) {
    // Filter posts that have at least one of the selected categories
    query = query.overlaps("tags", categories)
  }

  const { data: posts, error } = await query

  if (error) {
    console.error("Error fetching blog posts:", error)
    return <div>Failed to load blog posts</div>
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No blog posts found</h3>
        <p className="text-muted-foreground mt-2">
          {searchQuery || (categories && categories.length > 0)
            ? `No results found for your search criteria. Try different filters.`
            : "Check back soon for new articles!"}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {posts.map((post) => (
    <Link key={post.id} href={`/blog/${post.slug}`}>
      <Card
        className="
          cyber-card
          group
          overflow-hidden
          transition-all duration-300
          transform hover:-translate-y-1 hover:shadow-xl
          flex flex-col h-full
          relative 
        "
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.cover_image || "/placeholder.svg?height=300&width=300"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader>
        <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: string, i: number) => (
              <Badge key={i} variant="secondary" className="bg-accent/30" >
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl md:text-2xl">{post.title}</CardTitle>
          <CardDescription>
            {formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>

        <CardFooter>
          {/* Read Now button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-sm text-accent">
            Read Now &gt;
          </button>
        </div>
        </CardFooter>
      </Card>
    </Link>
  ))}
</div>
  )
}
