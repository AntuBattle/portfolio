"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, Loader2, X, Filter, ChevronDown, ChevronUp, BookOpen, Globe, GraduationCap, Wrench, Dumbbell, PenTool, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Define resource categories
const resourceTypes = [
  { name: "Book", icon: <BookOpen className="h-3 w-3 mr-1" /> },
  { name: "Article", icon: <FileText className="h-3 w-3 mr-1" /> },
  { name: "Course", icon: <GraduationCap className="h-3 w-3 mr-1" /> },
  { name: "Tool", icon: <Wrench className="h-3 w-3 mr-1" /> },
  { name: "Blog", icon: <PenTool className="h-3 w-3 mr-1" /> },
  { name: "Training Platform", icon: <Dumbbell className="h-3 w-3 mr-1" /> },
  { name: "Other Web Content", icon: <Globe className="h-3 w-3 mr-1" /> },
]

// Define security topics
const securityTopics = [
  "Web Security",
  "Software Security",
  "Network Security",
  "Cloud Security",
  "Mobile Security",
  "Cryptography",
  "Malware Analysis",
  "Penetration Testing",
  "Reverse Engineering",
  "OSINT",
  "Forensics",
]

export default function ResourceFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    searchParams.get("types")?.split(",").filter(Boolean) || [],
  )
  const [selectedTopics, setSelectedTopics] = useState<string[]>(
    searchParams.get("topics")?.split(",").filter(Boolean) || [],
  )
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(() => {
      const params = new URLSearchParams(searchParams)

      if (searchQuery) {
        params.set("q", searchQuery)
      } else {
        params.delete("q")
      }

      if (selectedTypes.length > 0) {
        params.set("types", selectedTypes.join(","))
      } else {
        params.delete("types")
      }

      if (selectedTopics.length > 0) {
        params.set("topics", selectedTopics.join(","))
      } else {
        params.delete("topics")
      }

      router.push(`/resources?${params.toString()}`)
    })
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTypes([])
    setSelectedTopics([])
    router.push("/resources")
  }

  const activeFiltersCount = selectedTypes.length + selectedTopics.length + (searchQuery ? 1 : 0)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSearch} className="relative flex-grow">
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3"
            disabled={isPending}
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
          </Button>
        </form>

        <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="w-full">
          <div className="flex gap-2 flex-wrap">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 relative">
                <Filter className="h-4 w-4" />
                <span className="hidden xs:inline">Filters</span>
                {activeFiltersCount > 0 && (
                  <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                    {activeFiltersCount}
                  </Badge>
                )}
                {isFilterOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-4 mt-4">
            <div className="cyber-card p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium">Filter Resources</h3>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 text-xs">
                    <X className="h-3 w-3 mr-1" /> Clear filters
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-medium mb-2">Resource Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {resourceTypes.map((type) => (
                      <Badge
                        key={type.name}
                        variant={selectedTypes.includes(type.name) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-accent/20 transition-colors text-xs flex items-center"
                        onClick={() => toggleType(type.name)}
                      >
                        {type.icon}
                        {type.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium mb-2">Security Topic</h4>
                  <div className="flex flex-wrap gap-2">
                    {securityTopics.map((topic) => (
                      <Badge
                        key={topic}
                        variant={selectedTopics.includes(topic) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-accent/20 transition-colors text-xs"
                        onClick={() => toggleTopic(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button size="sm" onClick={handleSearch} disabled={isPending}>
                  {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Filter className="h-4 w-4 mr-2" />}
                  Apply Filters
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
