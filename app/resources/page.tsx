import { Suspense } from "react"
import ResourcesList from "@/components/resources-list"
import ResourceFilter from "@/components/resource-filter"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Resources | Cybersecurity Engineer Portfolio",
  description: "Recommended books, tools, and resources for cybersecurity professionals and enthusiasts.",
}

export default function ResourcesPage({
  searchParams,
}: {
  searchParams: { q?: string; types?: string; topics?: string }
}) {
  const searchQuery = searchParams.q || ""
  const resourceTypes = searchParams.types ? searchParams.types.split(",") : undefined
  const securityTopics = searchParams.topics ? searchParams.topics.split(",") : undefined

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-4xl font-bold">Resources</h1>
          <p className="text-muted-foreground">
            Recommended books, tools, and resources for cybersecurity professionals and enthusiasts
          </p>
        </div>

        <div className="mb-8">
          <ResourceFilter />
        </div>

        <Suspense fallback={<ResourcesListSkeleton />}>
          <ResourcesList searchQuery={searchQuery} resourceTypes={resourceTypes} securityTopics={securityTopics} />
        </Suspense>
      </div>
    </div>
  )
}

function ResourcesListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="flex justify-between">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      ))}
    </div>
  )
}
