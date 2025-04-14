import Image from "next/image"
import Link from "next/link"
import { Shield, Lock, Server, Code, ExternalLink, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedProjects from "@/components/featured-projects"
import ProficiencyChart from "@/components/proficiency-chart"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-2">
                Cybersecurity Engineer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Securing the <span className="text-accent glow-text">Digital Frontier</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm a cybersecurity professional specializing in vulnerability assessment, penetration testing, and
                secure system architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-md">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 cyber-border rounded-full overflow-hidden mb-6">
                <Image
                  src="/images/battaglia_antonio_foto.jpg"
                  alt="Cybersecurity Professional"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-2">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors cyber-border"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 text-accent" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors cyber-border"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 text-accent" />
                </Link>
                <Link
                  href="mailto:antoniobattaglia01@gmail.com"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors cyber-border"
                  aria-label="Email Me"
                >
                  <Mail className="h-6 w-6 text-accent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">Discover my journey in the cybersecurity landscape</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                With over 5 years of experience in cybersecurity, I've helped organizations identify vulnerabilities,
                implement robust security measures, and respond to incidents effectively.
              </p>
              <p>
                My expertise spans across network security, application security, and cloud security. I'm passionate
                about staying ahead of emerging threats and continuously enhancing my skills to protect digital assets.
              </p>
              <p>
                When I'm not securing systems, I enjoy contributing to open-source security tools and sharing knowledge
                through my blog and community engagements.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/blog">
                    Read My Blog
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="cyber-card">
                <CardHeader className="pb-2">
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Security Audits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive security assessments to identify vulnerabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader className="pb-2">
                  <Lock className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Penetration Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Simulated attacks to test security defenses</p>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader className="pb-2">
                  <Server className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Secure Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Designing robust security infrastructure</p>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader className="pb-2">
                  <Code className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Secure Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Implementing security best practices in development</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">Showcasing my work in cybersecurity and secure development</p>
          </div>

          <FeaturedProjects />

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/projects">
                View All Projects
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Proficiency Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">My proficiency across various cybersecurity domains</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ProficiencyChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="cyber-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">Web Security</h3>
              <p className="text-sm text-muted-foreground">
                Expert in identifying and mitigating web vulnerabilities including XSS, CSRF, SQL injection, and
                securing web applications.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">OSINT</h3>
              <p className="text-sm text-muted-foreground">
                Skilled in open-source intelligence gathering, digital footprint analysis, and reconnaissance
                techniques.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">Reverse Engineering</h3>
              <p className="text-sm text-muted-foreground">
                Experience in analyzing malware, binary exploitation, and understanding software vulnerabilities through
                code analysis.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">Cryptography</h3>
              <p className="text-sm text-muted-foreground">
                Knowledge of encryption algorithms, cryptographic protocols, and implementing secure communication
                channels.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">Blockchain Security</h3>
              <p className="text-sm text-muted-foreground">
                Understanding of smart contract vulnerabilities, blockchain architecture security, and decentralized
                application security.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">System Admin/PrivEsc</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in system hardening, privilege escalation techniques, and securing infrastructure against
                unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
