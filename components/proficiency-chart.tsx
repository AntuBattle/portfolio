"use client"

import { useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { useMobile } from "@/hooks/use-mobile"

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
  const isMobile = useMobile()

  return (
    <Card className="cyber-card w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Technical Proficiency</CardTitle>
        <CardDescription>Skill assessment across cybersecurity domains</CardDescription>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <ChartContainer
          config={{
            skill: {
              label: "Skill",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] sm:h-[400px] w-full max-w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius={isMobile ? "55%" : "80%"}
              data={skillsData}
              margin={
                isMobile ? { top: 30, right: 30, bottom: 30, left: 30 } : { top: 5, right: 30, bottom: 5, left: 20 }
              }
            >
              <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.3} />
              <PolarAngleAxis
                dataKey="skill"
                tick={{
                  fill: "hsl(var(--foreground))",
                  fontSize: isMobile ? 8 : 12,
                }}
                stroke="hsl(var(--muted-foreground))"
                tickSize={isMobile ? 2 : 5}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{
                  fill: "hsl(var(--muted-foreground))",
                  fontSize: isMobile ? 8 : 12,
                }}
                stroke="hsl(var(--muted-foreground))"
                strokeOpacity={0.5}
                tickCount={isMobile ? 3 : 5}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  fontSize: isMobile ? "10px" : "14px",
                  padding: isMobile ? "4px" : "8px",
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
