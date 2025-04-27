import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import BlogCard from "./blog-card"

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
    <BlogCard key={post.id} post={post} />
  ))}
</div>
  )
}
