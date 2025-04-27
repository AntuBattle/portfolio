import Link from "next/link"
import Image from "next/image"
import { ExternalLink, BookOpen, Globe, GraduationCap, PenToolIcon as Tool, FileText, Server, Wrench, Dumbbell } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ResourceCardProps {
  id: string
  slug: string
  title: string
  description: string
  image_url: string
  external_url: string
  category: string
}

export default function ResourceCard({
  id,
  slug,
  title,
  description,
  image_url,
  external_url,
  category,
}: ResourceCardProps) {
  // Get the appropriate icon for the category
  const getCategoryIcon = () => {
    switch (category) {
      case "Book":
        return <BookOpen className="h-4 w-4 mr-1" />
      case "Blog":
        return <Globe className="h-4 w-4 mr-1" />
      case "Course":
        return <GraduationCap className="h-4 w-4 mr-1" />
      case "Tool":
        return <Wrench className="h-4 w-4 mr-1" />
      case "Article":
        return <FileText className="h-4 w-4 mr-1" />
      case "Training Platform":
        return <Dumbbell className="h-4 w-4 mr-1" />
      default:
        return <Globe className="h-4 w-4 mr-1" />
    }
  }

  return (
    <Card className="cyber-card overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={image_url || "/placeholder.svg?height=300&width=500"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-accent/30 backdrop-blur flex items-center">
            {getCategoryIcon()}
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/resources/${slug}`}>Details</Link>
        </Button>
        <Button asChild>
          <a href={external_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent/80">
            <ExternalLink className="h-4 w-4" />
            Access
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
