"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"

type Project = {
  id: string
  title: string
  slug: string
  description: string
  image_url: string
  github_url: string | null
  demo_url: string | null
  technologies: string[]
  featured: boolean
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createClient()

      const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching projects:", error)
      } else {
        setProjects(data || [])
      }

      setLoading(false)
    }

    fetchProjects()
  }, [])

  // Placeholder projects for initial render
  const placeholderProjects = [
    {
      id: "1",
      title: "No Database Connection or NO projects in the database - these are placeholders",
      slug: "network-vulnerability-scanner",
      description:
        "An automated tool for scanning networks and identifying security vulnerabilities with detailed reporting and remediation suggestions.",
      image_url: "/placeholder.svg?height=300&width=500",
      github_url: "https://github.com/username/network-scanner",
      demo_url: "https://demo-scanner.example.com",
      technologies: ["Python", "Nmap", "Docker", "Flask"],
      featured: true,
    },
    {
      id: "2",
      title: "Secure Authentication System",
      slug: "secure-authentication-system",
      description:
        "A robust authentication system implementing multi-factor authentication, JWT, and advanced encryption techniques.",
      image_url: "/placeholder.svg?height=300&width=500",
      github_url: "https://github.com/username/secure-auth",
      demo_url: null,
      technologies: ["Node.js", "Express", "JWT", "Biometrics"],
      featured: true,
    },
    {
      id: "3",
      title: "Threat Intelligence Dashboard",
      slug: "threat-intelligence-dashboard",
      description:
        "Real-time dashboard for monitoring and analyzing cybersecurity threats and vulnerabilities across systems.",
      image_url: "/placeholder.svg?height=300&width=500",
      github_url: "https://github.com/username/threat-dashboard",
      demo_url: "https://threat-intel.example.com",
      technologies: ["React", "D3.js", "GraphQL", "ElasticSearch"],
      featured: true,
    },
    {
      id: "4",
      title: "Malware Analysis Toolkit",
      slug: "malware-analysis-toolkit",
      description:
        "A collection of tools for analyzing malicious software, extracting indicators of compromise, and generating threat reports.",
      image_url: "/placeholder.svg?height=300&width=500",
      github_url: "https://github.com/username/malware-toolkit",
      demo_url: null,
      technologies: ["Python", "Assembly", "YARA", "Cuckoo Sandbox"],
      featured: false,
    },
    {
      id: "5",
      title: "Secure File Encryption Tool",
      slug: "secure-file-encryption",
      description:
        "End-to-end encrypted file sharing application with zero-knowledge architecture and secure key management.",
      image_url: "/placeholder.svg?height=300&width=500",
      github_url: "https://github.com/username/secure-file-encryption",
      demo_url: "https://encrypt-share.example.com",
      technologies: ["Rust", "WebAssembly", "AES-256", "React"],
      featured: false,
    },
    {
      id: "6",
      title: "IoT Security Framework",
      slug: "iot-security-framework",
      description:
        "A comprehensive security framework for Internet of Things devices, focusing on secure communication, authentication, and firmware updates.",
      image_url: "/placeholder.svg?height=300&width=500",
      github_url: "https://github.com/username/iot-security",
      demo_url: null,
      technologies: ["C/C++", "MQTT", "TLS", "ARM TrustZone"],
      featured: false,
    },
  ]

  const displayProjects = loading || projects.length === 0 ? placeholderProjects : projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayProjects.map((project) => (
        <Card key={project.id} className="cyber-card overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image
              src={project.image_url || "/placeholder.svg?height=300&width=500"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {project.github_url && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.demo_url && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Link>
              </Button>
            )}
            <Button asChild size="sm">
              <Link href={`/projects/${project.slug}`}>Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
