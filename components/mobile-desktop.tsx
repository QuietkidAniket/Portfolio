"use client"

import { useState, useCallback } from "react"
import { Home, ArrowLeft, Square } from "lucide-react"
import type { PortfolioData, WindowState, AppType } from "@/types/portfolio"
import ResumeApp from "./apps/resume-app"
import AchievementsApp from "./apps/achievements-app"
import CalendarApp from "./apps/calendar-app"
import ExperienceApp from "./apps/experience-app"
import ProjectsApp from "./apps/projects-app"
import FilesApp from "./apps/files-app"
import TerminalApp from "./apps/terminal-app"
import AboutApp from "./apps/about-app"
import CPStatsApp from "./apps/cp-stats-app"

interface MobileDesktopProps {
  data: PortfolioData
}

const mobileApps = [
  { type: "resume", title: "Resume", icon: "📄", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
  { type: "achievements", title: "Achievements", icon: "🏆", color: "bg-gradient-to-br from-yellow-400 to-orange-500" },
  { type: "portfolio", title: "Calendar", icon: "📅", color: "bg-gradient-to-br from-purple-400 to-pink-500" },
  { type: "experience", title: "Experience", icon: "💼", color: "bg-gradient-to-br from-green-400 to-emerald-500" },
  { type: "projects", title: "Projects", icon: "🚀", color: "bg-gradient-to-br from-red-400 to-rose-500" },
  { type: "files", title: "Files", icon: "📁", color: "bg-gradient-to-br from-gray-400 to-gray-600" },
  { type: "terminal", title: "Terminal", icon: "⚡", color: "bg-gradient-to-br from-gray-800 to-black" },
  { type: "about", title: "About Me", icon: "👤", color: "bg-gradient-to-br from-indigo-400 to-purple-500" },
  { type: "cpstats", title: "CP Stats", icon: "📊", color: "bg-gradient-to-br from-teal-400 to-cyan-500" },
]

export default function MobileDesktop({ data }: MobileDesktopProps) {
  const [activeApp, setActiveApp] = useState<AppType | null>(null)
  const [runningApps, setRunningApps] = useState<AppType[]>([])
  const [showAppSwitcher, setShowAppSwitcher] = useState(false)

  const openApp = useCallback((appType: AppType) => {
    setActiveApp(appType)
    if (!runningApps.includes(appType)) {
      setRunningApps(prev => [...prev, appType])
    }
    setShowAppSwitcher(false)
  }, [runningApps])

  const closeApp = useCallback((appType: AppType) => {
    setRunningApps(prev => prev.filter(app => app !== appType))
    if (activeApp === appType) {
      setActiveApp(null)
    }
  }, [activeApp])

  const goHome = useCallback(() => {
    setActiveApp(null)
    setShowAppSwitcher(false)
  }, [])

  const goBack = useCallback(() => {
    setActiveApp(null)
  }, [])

  const renderAppContent = (appType: AppType) => {
    switch (appType) {
      case "resume":
        return <ResumeApp data={data} />
      case "achievements":
        return <AchievementsApp data={data} />
      case "portfolio":
        return <CalendarApp />
      case "experience":
        return <ExperienceApp data={data} />
      case "projects":
        return <ProjectsApp data={data} />
      case "files":
        return <FilesApp data={data} />
      case "terminal":
        return <TerminalApp data={data} />
      case "about":
        return <AboutApp data={data} />
      case "cpstats":
        return <CPStatsApp data={data} />
      default:
        return <div>Unknown app</div>
    }
  }

  const getAppTitle = (appType: AppType) => {
    return mobileApps.find(app => app.type === appType)?.title || "App"
  }

  if (showAppSwitcher) {
    return (
      <div className="h-screen bg-black flex flex-col">
        {/* Status Bar */}
        <div className="h-12 bg-black flex items-center justify-between px-4 text-white text-sm">
          <span>9:41</span>
          <span>100%</span>
        </div>

        {/* App Switcher */}
        <div className="flex-1 p-4">
          <h2 className="text-white text-lg font-semibold mb-4">Running Apps</h2>
          <div className="space-y-4">
            {runningApps.map(appType => {
              const app = mobileApps.find(a => a.type === appType)
              return (
                <div key={appType} className="relative">
                  <div
                    onClick={() => setActiveApp(appType)}
                    className="bg-gray-800 rounded-xl p-4 flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-lg ${app?.color} flex items-center justify-center text-white text-xl`}>
                      {app?.icon}
                    </div>
                    <span className="text-white font-medium">{app?.title}</span>
                  </div>
                  <button
                    onClick={() => closeApp(appType)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm"
                  >
                    ×
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="h-20 bg-gray-900 flex items-center justify-center">
          <button
            onClick={goHome}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
          >
            <Home className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    )
  }

  if (activeApp) {
    return (
      <div className="h-screen bg-white dark:bg-gray-900 flex flex-col">
        {/* Status Bar */}
        <div className="h-12 bg-gray-100 dark:bg-gray-800 flex items-center justify-between px-4 text-sm">
          <button onClick={goBack} className="flex items-center space-x-2 text-blue-500">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <span className="font-medium text-gray-900 dark:text-white">{getAppTitle(activeApp)}</span>
          <div className="w-12" />
        </div>

        {/* App Content */}
        <div className="flex-1 overflow-hidden">
          {renderAppContent(activeApp)}
        </div>

        {/* Bottom Navigation */}
        <div className="h-20 bg-gray-100 dark:bg-gray-800 flex items-center justify-around">
          <button
            onClick={goHome}
            className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center"
          >
            <Home className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={() => setShowAppSwitcher(true)}
            className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center"
          >
            <Square className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col">
      {/* Status Bar */}
      <div className="h-12 flex items-center justify-between px-4 text-white text-sm font-medium">
        <span>9:41</span>
        <span>Portfolio</span>
        <span>100%</span>
      </div>

      {/* Home Screen */}
      <div className="flex-1 p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">{data.basics.name}</h1>
          <p className="text-white/80">{data.basics.tagline}</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {mobileApps.map(app => (
            <button
              key={app.type}
              onClick={() => openApp(app.type as AppType)}
              className="flex flex-col items-center space-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${app.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                {app.icon}
              </div>
              <span className="text-white text-xs font-medium text-center">{app.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-20 flex items-center justify-center">
        <div className="w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}