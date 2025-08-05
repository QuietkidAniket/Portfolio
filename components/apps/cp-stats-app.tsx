"use client"

import { useState } from "react"
import { TrendingUp, Trophy, Target, Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { PortfolioData } from "@/types/portfolio"

interface CPStatsAppProps {
  data: PortfolioData
}

export default function CPStatsApp({ data }: CPStatsAppProps) {
  const platforms = [
    {
      name: "Codeforces",
      url: data.socials.codeforces,
      icon: "🔴",
      rating: "1847 (Expert)",
      maxRating: "1847",
      problemsSolved: "500+",
      contests: "45",
      color: "from-red-400 to-red-600"
    },
    {
      name: "LeetCode", 
      url: data.socials.leetcode,
      icon: "🟡",
      rating: "Knight",
      maxRating: "2100+",
      problemsSolved: "800+",
      contests: "25",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "CodeChef",
      url: data.socials.codechef,
      icon: "🟤",
      rating: "3★ (1600+)",
      maxRating: "1650",
      problemsSolved: "300+",
      contests: "20",
      color: "from-amber-600 to-yellow-600"
    },
    {
      name: "AtCoder",
      url: data.socials.atcoder,
      icon: "🔵",
      rating: "Gray (800+)",
      maxRating: "850",
      problemsSolved: "150+",
      contests: "10",
      color: "from-blue-400 to-blue-600"
    }
  ]

  const achievements = [
    "Codeforces Expert (Top 10%)",
    "LeetCode Knight Badge",
    "CodeChef 3-Star Rating",
    "500+ Problems Solved on Codeforces",
    "800+ Problems Solved on LeetCode"
  ]

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Competitive Programming Stats
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Performance across different coding platforms</p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-white text-xl`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">{platform.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{platform.rating}</p>
                    </div>
                  </div>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Max Rating</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{platform.maxRating}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Problems Solved</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{platform.problemsSolved}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Contests</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{platform.contests}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Rank</p>
                    <p className="font-semibold text-green-600 dark:text-green-400">Top 15%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Rating Progress
              </CardTitle>
              <CardDescription className="dark:text-gray-300">Rating changes over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                  <p>Rating progress chart</p>
                  <p className="text-sm">(API integration needed)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <Target className="w-5 h-5 mr-2 text-green-500" />
                Contest Performance
              </CardTitle>
              <CardDescription className="dark:text-gray-300">Recent contest rankings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Target className="w-12 h-12 mx-auto mb-2" />
                  <p>Contest performance chart</p>
                  <p className="text-sm">(API integration needed)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <Award className="w-5 h-5 mr-2 text-purple-500" />
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}