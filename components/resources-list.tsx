"use client"

import { useEffect, useState } from "react"
import ResourceCard from "./resource-card"
import { createClient } from "@/lib/supabase/client"
import { AlertCircle } from "lucide-react"

// Placeholder resources as fallback
const placeholderResources = [
  {
    id: "1",
    slug: "web-security-academy",
    title: "PortSwigger Web Security Academy",
    description:
      "A free online training platform for web security vulnerabilities with hands-on labs and detailed learning materials.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://portswigger.net/web-security",
    category: "Training Platform",
    topics: ["Web Security", "Penetration Testing"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    slug: "practical-malware-analysis",
    title: "Practical Malware Analysis",
    description:
      "The hands-on guide to dissecting malicious software. Learn to analyze, debug, and disassemble malware.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://nostarch.com/malware",
    category: "Book",
    topics: ["Malware Analysis", "Reverse Engineering"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    slug: "hack-the-box",
    title: "Hack The Box",
    description: "An online platform to test and advance your skills in penetration testing and cybersecurity.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://www.hackthebox.com/",
    category: "Training Platform",
    topics: ["Penetration Testing", "Web Security", "Network Security"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    slug: "owasp-top-ten",
    title: "OWASP Top Ten",
    description:
      "The standard awareness document for developers and web application security, representing the most critical security risks to web applications.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://owasp.org/www-project-top-ten/",
    category: "Reference",
    topics: ["Web Security", "Software Security"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    slug: "the-tangled-web",
    title: "The Tangled Web",
    description: "A guide to securing modern web applications by understanding the complexities of the web platform.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://nostarch.com/tangledweb",
    category: "Book",
    topics: ["Web Security", "Software Security"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "6",
    slug: "tryhackme",
    title: "TryHackMe",
    description: "A cybersecurity training platform with hands-on exercises and learning paths for all skill levels.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://tryhackme.com/",
    category: "Training Platform",
    topics: ["Penetration Testing", "Web Security", "Network Security"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "7",
    slug: "web-application-hackers-handbook",
    title: "The Web Application Hacker's Handbook",
    description: "A comprehensive guide to finding and exploiting security flaws in web applications.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url:
      "https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472",
    category: "Book",
    topics: ["Web Security", "Penetration Testing"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "8",
    slug: "cloud-security-alliance",
    title: "Cloud Security Alliance",
    description: "Resources and guidelines for best practices in cloud security.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://cloudsecurityalliance.org/",
    category: "Web Content",
    topics: ["Cloud Security"],
    content: "",
    created_at: new Date().toISOString(),
  },
  {
    id: "9",
    slug: "mobile-security-testing-guide",
    title: "OWASP Mobile Security Testing Guide",
    description: "A comprehensive manual for mobile app security testing and reverse engineering.",
    image_url: "/placeholder.svg?height=300&width=500",
    external_url: "https://owasp.org/www-project-mobile-security-testing-guide/",
    category: "Reference",
    topics: ["Mobile Security"],
    content: "",
    created_at: new Date().toISOString(),
  },
]

interface ResourcesListProps {
  searchQuery?: string
  resourceTypes?: string[]
  securityTopics?: string[]
}

export default function ResourcesList({ searchQuery, resourceTypes, securityTopics }: ResourcesListProps) {
  const [resources, setResources] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchResources() {
      try {
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

        const { data, error: fetchError } = await query

        if (fetchError) {
          throw fetchError
        }

        setResources(data || [])
      } catch (err: any) {
        console.error("Error fetching resources:", err)
        setError(err.message || "Failed to load resources")
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [searchQuery, resourceTypes, securityTopics])

  // Show loading state
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading resources...</p>
      </div>
    )
  }

  // Show error state for database errors
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
  const displayResources = resources.length > 0 ? resources : placeholderResources

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
