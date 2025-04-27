"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import BlogCard from "./blog-card"

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  cover_image: string
  published_at: string
  tags: string[]
  featured: boolean
}

export default function FeaturedBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const supabase = createClient()

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .eq("featured", true)
        .order("published_at", { ascending: false })
        .limit(3)

      if (error) {
        console.error("Error fetching blog posts:", error)
      } else {
        setPosts(data || [])
      }

      setLoading(false)
    }

    fetchPosts()
  }, [])

  const displayPosts = loading || posts.length === 0 ? [] : posts

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayPosts.map((post) => (
          <BlogCard key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}
