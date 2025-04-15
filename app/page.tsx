import Image from "next/image"
import Link from "next/link"
import { Shield, Lock, Server, Code, ExternalLink, ChevronRight, Github, Linkedin, Mail, Sword } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedProjects from "@/components/featured-projects"
import ProficiencyChart from "@/components/proficiency-chart"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-2">
                Cybersecurity Engineer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find the flaws.<br></br> <span className="text-accent glow-text">Fortify the future.</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Hi! My name is Antonio Battaglia. I'm a cybersecurity professional specializing in vulnerability assessment, penetration testing, and
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
                  alt="Profile Photo"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-2">
                <Link
                  href="https://github.com/AntuBattle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors cyber-border"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 text-accent" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/antonio-battaglia-24a20022b/"
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
              I'm a master's degree student in Computer Engineering with a strong passion for cybersecurity, with a focus on penetration testing, and embedded systems. 
              I'm currently preparing for the LPIC and OSCP certifications, 
              while actively participating in Capture The Flag (CTF) competitions as both a hobby and a continuous learning strategy.
              </p>
              <p>
              I was honored to represent my university in the CyberChallenge.IT national finals, 
              where I collaborated with top national talent to solve real-world cyber defense problems. 
              Outside of competitions, I sharpen my skills on platforms like HackTheBox, 
              focusing on realistic infrastructure and red team simulations.
              </p>
              <p>
              In parallel, I’m part of a Formula SAE team, where I developed the firmware for our race car’s dashboard — 
              an experience that pushed my skills in embedded systems, real-time data handling, 
              and performance-critical C/C++ development.
              </p>
              <p>
              Currently, I'm part of a nationally funded research project, 
              where I’m designing and implementing an Intrusion Detection System (IDS) for industrial control systems (ICS).
              This project bridges my passion for cyber-physical systems with real-world impact on infrastructure security.
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
              <Card className="bg-card shadow-[0_0_20px_#60a5fa55] border border-blue-500/60">
                <CardHeader className="pb-2">
                  <Shield className="h-8 w-8 text-blue-400 mb-2" />
                  <CardTitle>Security Audits</CardTitle>
                  <CardDescription>Evaluate. Detect. Harden.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive security assessments to identify vulnerabilities across applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-[0_0_20px_#f8717177] border border-red-500/60">
                <CardHeader className="pb-2">
                  <Sword className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>Penetration Testing</CardTitle>
                  <CardDescription>Break in. Report. Secure.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">I simulate real-world attacks on applications to uncover vulnerabilities before adversaries do.</p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-[0_0_20px_#d4d4d877] border border-zinc-200/60">
                <CardHeader className="pb-2">
                  <Server className="h-8 w-8 text-zinc-300 mb-2" />
                  <CardTitle>Infrastructure Hardening</CardTitle>
                  <CardDescription>Architect. Isolate. Fortify.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Designing resilient system architectures with layered security controls and best practices — from networks to embedded systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-[0_0_20px_#c084fc55] border border-purple-500/60">
                <CardHeader className="pb-2">
                  <Code className="h-8 w-8 text-purple-400 mb-2" />
                  <CardTitle>Secure Coding</CardTitle>
                  <CardDescription>Write. Review. Mitigate.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Applying security-first principles to software development. From input validation to memory safety and logic flaw detection with resilience in mind.
                  </p>
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
