"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Shield, Server, Terminal, Lock, Code, Cloud, Network, Database } from "lucide-react"

export default function Skills() {
  const skills = [
    { name: "Penetration Testing", icon: Lock, value: 95 },
    { name: "Network Security", icon: Network, value: 90 },
    { name: "System Administration", icon: Server, value: 85 },
    { name: "Cloud Security", icon: Cloud, value: 80 },
    { name: "Vulnerability Assessment", icon: Shield, value: 95 },
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
    "Nessus",
    "Snort",
    "Splunk",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My technical expertise spans across various domains of cybersecurity, with a particular focus on offensive
            security and infrastructure management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                <skill.icon className="h-5 w-5 mr-2 text-accent" />
                <span className="font-medium">{skill.name}</span>
                <span className="ml-auto text-sm text-muted-foreground">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-2 bg-muted text-accent"/>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}