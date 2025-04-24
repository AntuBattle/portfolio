import { Progress } from "@/components/ui/progress"
import { Shield, Server, Terminal, Lock, Code, Cloud, Network, Database } from "lucide-react"

export default function Skills() {
  const skills = [
    { name: "Penetration Testing", icon: Lock, value: 90 },
    { name: "Network Security", icon: Network, value: 85 },
    { name: "System Administration", icon: Server, value: 90 },
    { name: "Cloud Security", icon: Cloud, value: 80 },
    { name: "Vulnerability Assessment", icon: Shield, value: 90 },
    { name: "Security Automation", icon: Code, value: 75 },
    { name: "Incident Response", icon: Terminal, value: 85 },
    { name: "Database Security", icon: Database, value: 80 },
  ]

  const tools = [
    "Kali Linux",
    "Metasploit",
    "Wireshark",
    "Burp Suite",
    "Nmap",
    "OWASP ZAP",
    "Ghidra",
    "IDA Pro",
    "Python",
    "Javascript",
    "Bash",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
            My technical expertise spans across various domains of cybersecurity, with a particular focus on offensive
            security and infrastructure management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center mb-2">
                <skill.icon className="h-5 w-5 mr-2 text-accent" />
                <span className="font-medium">{skill.name}</span>
                <span className="ml-auto text-sm text-muted-foreground">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-2 bg-muted text-accent"/>
            </div>
          ))}
          </div>
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
      </div>
    </section>
  )
}