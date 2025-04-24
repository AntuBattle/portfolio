import { Suspense } from "react"
import BlogList from "@/components/blog-list"
import BlogSearch from "@/components/blog-search"
import { Skeleton } from "@/components/ui/skeleton"
import ListSkeleton from "@/components/list-skeleton"

export const metadata = {
  title: "Blog | Cybersecurity Engineer Portfolio",
  description: "Read articles about cybersecurity, penetration testing, and secure development.",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { q?: string; categories?: string; sort?: string }
}) {
  const { q, categories, sort } = await searchParams
  const searchQuery = q || ""
  const search_categories = categories ? categories.split(",") : undefined
  const sortOrder = sort || "newest"

  return (
    <div className="mx-auto px-4 py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold">Antonio Hacking Stuff</h1>
          <p className="text-muted-foreground">My personal Cybersecurity blog. Here I post what excites me and things I discover while messing around with technologies.</p>
        </div>

        <div className="mb-8">
          <BlogSearch />
        </div>

        <Suspense fallback={<ListSkeleton />}>
          <BlogList searchQuery={searchQuery} categories={search_categories} sortOrder={sortOrder} />
        </Suspense>
      </div>
    </div>
  )
}

