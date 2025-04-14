import Image from "next/image"
import Link from "next/link"
import { Shield, Award, BookOpen, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About Me | Cybersecurity Engineer Portfolio",
  description: "Learn more about my background, skills, and experience in cybersecurity.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
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
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cybersecurity Professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center space-x-4 mb-6">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <Shield className="h-5 w-5 text-accent" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <Shield className="h-5 w-5 text-accent" />
                </Link>
                <Link
                  href="mailto:your.email@example.com"
                  className="bg-card hover:bg-card/80 p-2 rounded-full transition-colors cyber-border"
                >
                  <Shield className="h-5 w-5 text-accent" />
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
                <p>
                  With over 5 years of experience in cybersecurity, I've developed a comprehensive understanding of
                  security principles, vulnerabilities, and defensive strategies. My journey began with a fascination
                  for understanding how systems work and evolved into a passion for protecting them from threats.
                </p>
                <p>
                  I hold a Bachelor's degree in Computer Science with a specialization in Information Security, and I've
                  earned several industry certifications including OSCP, CISSP, and CEH. My technical expertise spans
                  across network security, application security, penetration testing, and incident response.
                </p>
                <p>
                  Throughout my career, I've worked with organizations of various sizes, from startups to large
                  enterprises, helping them identify vulnerabilities, implement robust security measures, and respond to
                  security incidents effectively.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
              <div className="space-y-6">
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-semibold mb-1">Senior Security Engineer</h3>
                  <p className="text-muted-foreground mb-4">TechSecure Inc. | 2020 - Present</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Lead penetration testing efforts across web applications, networks, and cloud infrastructure
                    </li>
                    <li>Develop and implement security policies and procedures</li>
                    <li>Conduct security awareness training for technical and non-technical staff</li>
                    <li>Perform vulnerability assessments and provide remediation guidance</li>
                  </ul>
                </div>

                <div className="cyber-card p-6">
                  <h3 className="text-xl font-semibold mb-1">Cybersecurity Analyst</h3>
                  <p className="text-muted-foreground mb-4">SecureDefense LLC | 2018 - 2020</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Monitored security events and incidents using SIEM tools</li>
                    <li>Performed malware analysis and reverse engineering</li>
                    <li>Assisted in incident response and forensic investigations</li>
                    <li>Contributed to the development of security automation scripts</li>
                  </ul>
                </div>
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
                      <h4 className="font-medium">BSc in Computer Science</h4>
                      <p className="text-sm text-muted-foreground">University of Technology, 2018</p>
                    </div>
                    <div>
                      <h4 className="font-medium">MSc in Cybersecurity</h4>
                      <p className="text-sm text-muted-foreground">Cyber Institute, 2020</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader className="pb-2">
                    <Award className="h-6 w-6 text-accent mb-2" />
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent" />
                        <span>OSCP - Offensive Security Certified Professional</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent" />
                        <span>CISSP - Certified Information Systems Security Professional</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent" />
                        <span>CEH - Certified Ethical Hacker</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-accent" />
                        <span>CCSP - Certified Cloud Security Professional</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
