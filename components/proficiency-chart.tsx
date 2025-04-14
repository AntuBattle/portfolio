"use client"

import { useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

// Define the skills data
const initialSkillsData = [
  { skill: "Web Security", value: 85 },
  { skill: "OSINT", value: 75 },
  { skill: "Reverse Engineering", value: 70 },
  { skill: "Cryptography", value: 65 },
  { skill: "Blockchain Security", value: 60 },
  { skill: "System Admin/PrivEsc", value: 80 },
]

export default function ProficiencyChart() {
  const [skillsData] = useState(initialSkillsData)

  return (
    <Card className="cyber-card w-full">
      <CardHeader>
        <CardTitle>Technical Proficiency</CardTitle>
        <CardDescription>Skill assessment across cybersecurity domains</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            skill: {
              label: "Skill",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
              <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.3} />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                stroke="hsl(var(--muted-foreground))"
                strokeOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                }}
                formatter={(value: number) => [`${value}%`, "Proficiency"]}
              />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
