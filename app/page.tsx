"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import { Shield, Lock, Server, Code, ExternalLink, ChevronRight, Github, Linkedin, Mail, Sword } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedProjects from "@/components/featured-projects"
import ProficiencyChart from "@/components/proficiency-chart"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import Icon from "simple-icons"
import  {siHackthebox} from "simple-icons/icons"

// Helper function to render SVG icon from simple-icons
function SimpleIcon({ icon, className = "" }: { icon: { path: string; title: string }; className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero/>
      {/* Hero Section with PfP*/}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-2">
                Cybersecurity Engineer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find the flaws.<br></br> <span className="text-accent">Fortify the future.</span>
              </h1>
              <div className="mt-2 text-center md:text-left">
              <TypewriterEffect
                words={["Penetration Testing", "System Administration", "Network Security", "Vulnerability Assessment"]}
              />
              </div>
              <p className="text-lg text-muted-foreground">
                My name is Antonio Battaglia. I'm a cybersecurity professional specializing in vulnerability assessment, penetration testing, and
                secure system architecture.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
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
                <Link
                  href="https://app.hackthebox.com/profile/1872566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors cyber-border"
                >
                  <SimpleIcon icon={siHackthebox} className="h-6 w-6 text-accent" />
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
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <p className="text-lg">
              I'm a master's degree student in Computer Engineering with a strong passion for cybersecurity, with a focus on penetration testing, and embedded systems. 
              I'm currently preparing for the LPIC and OSCP certifications, 
              while actively participating in Capture The Flag (CTF) competitions as both a hobby and a continuous learning strategy.
              </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <p>
              I was honored to represent my university in the CyberChallenge.IT national finals, 
              where I collaborated with top national talent to solve real-world cyber defense problems. 
              Outside of competitions, I sharpen my skills on platforms like HackTheBox, 
              focusing on realistic infrastructure and red team simulations.
              </p>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <p>
              In parallel, I’m part of a Formula SAE team, where I developed the firmware for our race car’s dashboard — 
              an experience that pushed my skills in embedded systems, real-time data handling, 
              and performance-critical C/C++ development.
              </p>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <p>
              Currently, I'm part of a nationally funded research project, 
              where I’m designing and implementing an Intrusion Detection System (IDS) for industrial control systems (ICS).
              This project bridges my passion for cyber-physical systems with real-world impact on infrastructure security.
              </p>
              </motion.div>

              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/about">
                    About Me
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/blog">
                    Read My Blog
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
            >
              <Card className="bg-card border border-foreground/60 h-full">
                <CardHeader className="pb-2">
                  <Shield className="h-8 w-8 text-blue-400 mb-2" />
                  <CardTitle>Security Audits</CardTitle>
                  <CardDescription className="text-foreground/80" style={{ textShadow: "0 0 2px #60a5fa" }}>Evaluate. Detect. Harden.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive security assessments to identify vulnerabilities across applications.
                  </p>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
            >
              <Card className="bg-card border border-foreground/60 h-full">
                <CardHeader className="pb-2">
                  <Sword className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>Penetration Testing</CardTitle>
                  <CardDescription className="text-foreground/80" style={{ textShadow: "0 0 2px #FA3B3F" }}>Break in. Report. Secure.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">I simulate real-world attacks on applications to uncover vulnerabilities before adversaries do.</p>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
            >
              <Card className="bg-card border border-foreground/60 h-full">
                <CardHeader className="pb-2">
                  <Server className="h-8 w-8 text-zinc-300 mb-2" />
                  <CardTitle>Infrastructure Hardening</CardTitle>
                  <CardDescription className="text-foreground/80" style={{ textShadow: "0 0 2px #D3D3D7" }}>Architect. Isolate. Fortify.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Design of resilient system architectures with layered security controls and best practices — from networks to embedded systems.
                  </p>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
            >
              <Card className="bg-card border border-foreground/60 h-full">
                <CardHeader className="pb-2">
                  <Code className="h-8 w-8 text-purple-400 mb-2" />
                  <CardTitle>Secure Coding</CardTitle>
                  <CardDescription className="text-foreground/80" style={{ textShadow: "0 0 2px #FA75F4" }}>Write. Review. Mitigate.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Application of security-first principles to software development. From input validation to memory safety and logic flaw detection with resilience in mind.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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

      <Skills/>


            {/* Resources Section */}
            <section id="resources" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Resources</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              Curated cybersecurity tools, books, and training platforms I recommend
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
            >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <svg className="h-12 w-12 mx-auto mb-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Training Platforms</h3>
              <p className="text-muted-foreground mb-4">
                Interactive platforms to practice and improve your cybersecurity skills
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <svg className="h-12 w-12 mx-auto mb-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Books & References</h3>
              <p className="text-muted-foreground mb-4">
                Essential reading materials for cybersecurity professionals at all levels
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <svg className="h-12 w-12 mx-auto mb-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z" />
                <path d="M12 8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Tools & Utilities</h3>
              <p className="text-muted-foreground mb-4">
                Powerful tools that every security professional should have in their arsenal
              </p>
            </div>
          </div>
          </motion.div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-md">
              <Link href="/resources">Browse All Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
