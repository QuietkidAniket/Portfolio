"use client"

import { Trophy, Calendar } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AchievementsAppProps {
  data: PortfolioData
}

export default function AchievementsApp({ data }: AchievementsAppProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
          Achievements
        </h1>
        <p className="text-gray-600">Milestones and accomplishments</p>
      </div>

      <div className="space-y-4">
        {data.achievements.map((achievement, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {achievement.title}
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {achievement.year}
                </div>
              </CardTitle>
              <CardDescription>{achievement.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
