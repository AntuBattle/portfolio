import { Suspense } from "react"
import BlogList from "@/components/blog-list"
import BlogSearch from "@/components/blog-search"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Blog | Cybersecurity Engineer Portfolio",
  description: "Read articles about cybersecurity, penetration testing, and secure development.",
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { q?: string; categories?: string; sort?: string }
}) {
  const searchQuery = searchParams.q || ""
  const categories = searchParams.categories ? searchParams.categories.split(",") : undefined
  const sortOrder = searchParams.sort || "newest"

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold">Security Blog</h1>
          <p className="text-muted-foreground">Insights, tutorials, and thoughts on cybersecurity</p>
        </div>

        <div className="mb-8">
          <BlogSearch />
        </div>

        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList searchQuery={searchQuery} categories={categories} sortOrder={sortOrder} />
        </Suspense>
      </div>
    </div>
  )
}

function BlogListSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-24 w-full" />
        </div>
      ))}
    </div>
  )
}
