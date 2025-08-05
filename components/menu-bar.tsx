"use client"

import { useState } from "react"
import { Wifi, Battery, Volume2 } from "lucide-react"
import NotificationCenter from "./notification-center"
import QuickSettings from "./quick-settings"
import type { PortfolioData } from "@/types/portfolio"

interface MenuBarProps {
  data: PortfolioData
}

export default function MenuBar({ data }: MenuBarProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useState(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  })

  return (
    <div className="h-6 bg-black/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-white text-sm font-medium relative z-50 macos-font">
      <div className="flex items-center space-x-4">
        <div className="font-bold"></div>
        <span>Portfolio</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4" />
          <Volume2 className="w-4 h-4" />
          <Battery className="w-4 h-4" />
          <QuickSettings />
          <NotificationCenter />
        </div>
        <div className="font-mono">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
        <div className="w-6 h-6 rounded-full bg-gray-400 overflow-hidden">
          <img
            src={data.basics.photo || "/placeholder.svg?height=24&width=24&query=profile avatar"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
