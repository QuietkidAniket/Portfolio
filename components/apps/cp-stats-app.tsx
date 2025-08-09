"use client"

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
      logo: "images/codeforces.png", // <-- file path
      rating: "1256 (pupil)",
      maxRating: "1256",
      problemsSolved: "100+",
      contests: "9"
    },
    {
      name: "LeetCode", 
      url: data.socials.leetcode,
      logo: "images/leetcode.png",
      rating: "1708",
      maxRating: "1700+",
      problemsSolved: "500+",
      contests: "17"
    },
    {
      name: "CodeChef",
      url: data.socials.codechef,
      logo: "images/codechef.png",
      rating: "3★ (1600+)",
      maxRating: "1600",
      problemsSolved: "100+",
      contests: "10"
    },
    {
      name: "AtCoder",
      url: data.socials.atcoder,
      logo: "images/atcoder.png",
      rating: "179",
      maxRating: "180",
      problemsSolved: "30+",
      contests: "10"
    }
  ]

  const achievements = [
    // "Codeforces Expert (Top 10%)",
    // "LeetCode Knight Badge",
    "CodeChef 3-Star Rating",
    "200+ Problems Solved on Codeforces",
    "500+ Problems Solved on LeetCode"
  ]

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Competitive Programming Stats
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Performance across different coding platforms</p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
  <CardHeader className="flex flex-col items-center">
    {/* Big Logo */}
    <a href={platform.url} target="_blank" rel="noopener noreferrer">
      <img 
        src={platform.logo} 
        alt={`${platform.name} logo`} 
        className="w-40 h-20 object-contain mb-2" 
      />
    </a>

    {/* Name */}
    <h3 className="font-bold text-lg dark:text-white">{platform.name}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{platform.rating}</p>

    {/* Visit Button */}
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
    >
      Visit
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
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

        {/* Progress & Achievements remain same
                {/* Progress Charts Placeholder */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
        </div> */}

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