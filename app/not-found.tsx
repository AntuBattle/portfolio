import Link from "next/link"
import { Shield, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <Shield className="h-16 w-16 text-accent mb-6" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="code-block mb-8 p-4 w-full max-w-md text-left">
        <pre className="text-sm terminal-text">
          <code>
            {`$ nmap -p 80 example.com
            Host is up (0.0042s latency).
            PORT   STATE    SERVICE
            80     filtered http
            
            $ Error: Connection refused
            $ System: Page not found`}
          </code>
        </pre>
      </div>
      <Button asChild className="gap-2 bg-accent/80">
        <Link href="/">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
