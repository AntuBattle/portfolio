import ResourceCard from "./resource-card"
import { createClient } from "@/lib/supabase/client"
import { AlertCircle } from "lucide-react"
import { Aguafina_Script } from "next/font/google"

interface ResourcesListProps {
  searchQuery?: string
  resourceTypes?: string[]
  securityTopics?: string[]
}

interface Resource {
  id: number
  slug: string
  title: string
  description: string
  image_url: string
  external_url: string
  category: string
  topics: string[]
}


export default async function ResourcesList({ searchQuery, resourceTypes, securityTopics }: ResourcesListProps) {
      const supabase = createClient()
      let query = supabase.from("resources").select("*")

      // Apply search filter if provided
      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
      }

      // Apply resource type filter if provided
      if (resourceTypes && resourceTypes.length > 0) {
        query = query.in("category", resourceTypes)
      }

      // Apply security topic filter if provided
      if (securityTopics && securityTopics.length > 0) {
        // For each topic, check if it's in the topics array
        securityTopics.forEach((topic) => {
          query = query.contains("topics", [topic])
        })
      }

      // Order by created_at
      query = query.order("created_at", { ascending: false })

      const { data: resources , error } = await query

      if (error) {
        return (
          <div className="p-6 border border-destructive/30 rounded-lg bg-destructive/5 text-center">
            <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Error Loading Resources</h3>
            <p className="text-muted-foreground">{error}</p>
          </div>
        )
      }
  // Use placeholder data if no resources are found in the database

  if (resources.length === 0) {
    return (
      <div className="p-6 border border-destructive/30 rounded-lg bg-destructive/5 text-center">
       <h3 className="text-lg font-medium"> No resources found. Please try again later.</h3>
      </div>
    )
  }

  const displayResources = resources

  // Filter resources based on search query and filters
  let filteredResources = [...displayResources]

  // Apply search filter (client-side as well for placeholder data)
  if (searchQuery && resources.length === 0) {
    const query = searchQuery.toLowerCase()
    filteredResources = filteredResources.filter(
      (resource) => resource.title.toLowerCase().includes(query) || resource.description.toLowerCase().includes(query),
    )
  }

  // Apply resource type filter (client-side as well for placeholder data)
  if (resourceTypes && resourceTypes.length > 0 && resources.length === 0) {
    filteredResources = filteredResources.filter((resource) => resourceTypes.includes(resource.category))
  }

  // Apply security topic filter (client-side as well for placeholder data)
  if (securityTopics && securityTopics.length > 0 && resources.length === 0) {
    filteredResources = filteredResources.filter((resource) =>
      resource.topics.some((topic: string) => securityTopics.includes(topic)),
    )
  }

  // Show empty state if no resources match the filters
  if (filteredResources.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed rounded-lg">
        <h3 className="text-lg font-medium mb-2">No resources found</h3>
        <p className="text-muted-foreground">
          No resources match your current filters. Try adjusting your search criteria.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredResources.map((resource) => (
        <ResourceCard
          key={resource.id}
          id={resource.id}
          slug={resource.slug}
          title={resource.title}
          description={resource.description}
          image_url={resource.image_url}
          external_url={resource.external_url}
          category={resource.category}
        />
      ))}
    </div>
  )
}
