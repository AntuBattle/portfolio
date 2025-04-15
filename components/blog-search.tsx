"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, Loader2, X, Filter, ChevronDown, ChevronUp, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Define common cybersecurity categories
const categories = [
  "Web Security",
  "Reverse Engineering",
  "HackTheBox",
  "OSINT",
  "Cryptography",
  "Malware Analysis",
  "Network Security",
  "CTF Writeups",
  "Blockchain Security",
]

export default function BlogSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || [],
  )
  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "newest")
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

      if (selectedCategories.length > 0) {
        params.set("categories", selectedCategories.join(","))
      } else {
        params.delete("categories")
      }

      params.set("sort", sortOrder)

      router.push(`/blog?${params.toString()}`)
    })
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSortOrder("newest")
    router.push("/blog")
  }

  const handleSortChange = (order: string) => {
    setSortOrder(order)

    startTransition(() => {
      const params = new URLSearchParams(searchParams)
      params.set("sort", order)

      if (searchQuery) {
        params.set("q", searchQuery)
      }

      if (selectedCategories.length > 0) {
        params.set("categories", selectedCategories.join(","))
      }

      router.push(`/blog?${params.toString()}`)
    })
  }

  const activeFiltersCount = selectedCategories.length + (searchQuery ? 1 : 0)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSearch} className="relative flex-grow">
          <Input
            type="search"
            placeholder="Search articles..."
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

        <div className="flex gap-2 flex-wrap items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 h-9">
                <Clock className="h-4 w-4" />
                <span className="hidden xs:inline">Sort:</span>
                {sortOrder === "newest" ? "Newest" : "Oldest"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className={sortOrder === "newest" ? "bg-accent/10 text-accent" : ""}
                onClick={() => handleSortChange("newest")}
              >
                Newest First
              </DropdownMenuItem>
              <DropdownMenuItem
                className={sortOrder === "oldest" ? "bg-accent/10 text-accent" : ""}
                onClick={() => handleSortChange("oldest")}
              >
                Oldest First
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="w-full">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 relative h-9">
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

            <CollapsibleContent className="space-y-4 mt-4">
              <div className="cyber-card p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium">Filter by Category</h3>
                  {(selectedCategories.length > 0 || searchQuery) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 text-xs">
                      <X className="h-3 w-3 mr-1" /> Clear filters
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategories.includes(category) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-accent/20 transition-colors text-xs"
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <Button size="sm" onClick={handleSearch} disabled={isPending} className="h-8">
                    {isPending ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Filter className="h-4 w-4 mr-2" />
                    )}
                    Apply Filters
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}
