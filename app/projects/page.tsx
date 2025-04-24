import { Suspense } from "react"
import ProjectsList from "@/components/projects-list"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Projects | Cybersecurity Engineer Portfolio",
  description: "Explore my cybersecurity projects, tools, and research.",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto px-4 py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-muted-foreground">These are the projects I have worked on in the past - feel free to take a look! Hopefully they provide educational insight for you as they did for me.</p>
        </div>

        <Suspense fallback={<ProjectsListSkeleton />}>
          <ProjectsList />
        </Suspense>
      </div>
    </div>
  )
}

function ProjectsListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="flex space-x-2">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      ))}
    </div>
  )
}
