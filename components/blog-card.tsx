import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from "lucide-react";

interface PostProps {
  slug: string
  title: string
  excerpt: string
  cover_image: string
  published_at: string
  tags: string[]
}

interface PostCard {
    post: PostProps
}

function BlogCard({ post, }: PostCard){

    return(
        <Link href={`/blog/${post.slug}`}>
      <Card
        className="
          cyber-card
          group
          overflow-hidden
          transition-all duration-300
          transform hover:-translate-y-2 hover:shadow-xl
          flex flex-col h-full
          relative"
        
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.cover_image || "/placeholder.svg?height=300&width=300"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">{post.title}</CardTitle>
          <CardDescription>
            {formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag: string, i: number) => (
                <Badge key={i} variant="secondary" className="bg-accent/30" >
                    {tag}
                </Badge>
                ))}
            </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>

        <CardFooter>
          {/* Read Now button */}
        <div className="px-3 py-1 rounded-full bg-accent/20 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 flex flex-wrap items-center">
          <button className="text-foreground text-sm">
            Read Now
          </button>
          <ChevronRightIcon className="text-foreground h-4 w-4 text-sm" />
        </div>
        </CardFooter>
      </Card>
    </Link>

    )
}

export default BlogCard;