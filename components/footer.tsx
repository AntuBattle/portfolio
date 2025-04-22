import Link from "next/link"
import { Shield, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">Antonio Battaglia</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cybersecurity engineer specializing in protecting digital assets and infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-accent">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-accent">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-accent">
                Projects
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-accent">
                Blog
              </Link>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-accent">
                Resources
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/AntuBattle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/antonio-battaglia-24a20022b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:antoniobattaglia01@gmail.com" className="text-muted-foreground hover:text-accent">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Antonio Battaglia.
          </p>
        </div>
      </div>
    </footer>
  )
}
