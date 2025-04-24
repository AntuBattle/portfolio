import Image from "next/image"
import Link from "next/link"
import { Shield, Award, BookOpen, Code, Linkedin, Github, Mail, Globe, FileText, Badge, Wrench, Terminal, Mic} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SimpleIcon from "@/components/ui/simpleicon"
import { siHackthebox, siPython, siJavascript, 
  siCplusplus, siGnubash, siPostgresql, siDocker, siKubernetes, 
  siWasmcloud, siLinux, siGit, 
  siAwslambda} from "simple-icons"
import Conferences from "@/components/conferences"
import Publications from "@/components/publications"
import Experience from "@/components/experience"
import Languages from "@/components/languages";

export const metadata = {
  title: "About Me | Cybersecurity Engineer Portfolio",
  description: "Learn more about my background, skills, and experience in cybersecurity.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-muted-foreground">My journey in cybersecurity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square cyber-border rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/battaglia_antonio_foto.jpg"
                  alt="Antonio Battaglia Profile Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center space-x-4 mb-6">
                <Link
                  href="https://github.com/AntuBattle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <Github className="h-5 w-5 text-accent" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/antonio-battaglia-24a20022b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <Linkedin className="h-5 w-5 text-accent" />
                </Link>
                <Link
                  href="mailto:antoniobattaglia01@gmail.com"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <Mail className="h-5 w-5 text-accent" />
                </Link>
                <Link
                  href="https://app.hackthebox.com/profile/1872566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <SimpleIcon icon={siHackthebox} className="h-5 w-5 text-accent" />
                </Link>
              </div>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/files/resume.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">My Background</h2>
              <div className="space-y-4">
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
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
              <Experience/>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 gap-6">
                <Card className="cyber-card">
                  <CardHeader className="pb-3">
                    <Terminal className="h-6 w-6 text-accent mb-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siPython} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>Python</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siJavascript} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siCplusplus} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>C++</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siGnubash} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>Bash</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siPostgresql} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>SQL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siDocker} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>Docker</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siKubernetes} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>Kubernetes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siAwslambda} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>AWS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siLinux} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>Linux</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SimpleIcon icon={siGit} className="bg-transparent text-accent hover:bg-accent/30 h-6 w-6" />
                        <span>Git</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Security Tools & Technologies</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Burp Suite</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Metasploit</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Wireshark</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Nmap</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Gobuster</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">OWASP ZAP</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Ghidra</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">IDA Pro</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Dig</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Whois</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Hashcat</span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-accent" />
                          <span className="text-sm">Shodan</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="cyber-card">
                  <CardHeader className="pb-2">
                    <BookOpen className="h-6 w-6 text-accent mb-2" />
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">MSc in Computer Engineering</h4>
                      <p className="text-sm text-muted-foreground"> Current W.S.A. 29 - GPA 4.0 </p>
                      <p className="text-sm text-muted-foreground">Università degli Studi di Messina, Present</p>
                    </div>
                    <div>
                      <h4 className="font-medium">BSc in Computer and Electronical Engineering</h4>
                      <p className="text-sm text-muted-foreground"> Grade 108/110 - GPA 3.9~ </p>
                      <p className="text-sm text-muted-foreground">Università degli Studi di Messina, 2024</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader className="pb-2">
                    <Award className="h-6 w-6 text-accent mb-2" />
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                        <span className="text-sm">Linux System Administration - Extraordy.com Official RedHat Official Training Partner</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                        <span className="text-sm">Currently studying for OSCP - Offensive Security Certified Professional</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                        <span className="text-sm">Currently studying for LPIC - Linux Performance Certified</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Speaking & Publications</h2>
              <div className="grid grid-cols-1 gap-6">
                <Publications/>
                <Conferences/>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Languages</h2>
              <Languages/>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
