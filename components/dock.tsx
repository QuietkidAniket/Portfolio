"use client"

import { useState } from "react"
import type { WindowState, AppType } from "@/types/portfolio"

interface DockProps {
  windows: WindowState[]
  onOpenApp: (appType: AppType, title: string) => void
  onFocusWindow: (windowId: string) => void
}

const dockApps = [
  { type: "resume" as AppType, title: "Resume", icon: "📄", color: "bg-blue-500" },
  { type: "achievements" as AppType, title: "Achievements", icon: "🏆", color: "bg-yellow-500" },
  { type: "portfolio" as AppType, title: "Portfolio", icon: "🎨", color: "bg-purple-500" },
  { type: "experience" as AppType, title: "Experience", icon: "💼", color: "bg-green-500" },
  { type: "projects" as AppType, title: "Projects", icon: "🚀", color: "bg-red-500" },
  { type: "files" as AppType, title: "Files", icon: "📁", color: "bg-gray-500" },
  { type: "terminal" as AppType, title: "Terminal", icon: "⚡", color: "bg-black" },
  { type: "about" as AppType, title: "About Me", icon: "👤", color: "bg-indigo-500" },
]

export default function Dock({ windows, onOpenApp, onFocusWindow }: DockProps) {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
        <div className="flex items-end space-x-2">
          {dockApps.map((app) => {
            const isOpen = windows.some((w) => w.appType === app.type)
            const isHovered = hoveredApp === app.type

            return (
              <div
                key={app.type}
                className="relative group"
                onMouseEnter={() => setHoveredApp(app.type)}
                onMouseLeave={() => setHoveredApp(null)}
              >
                <button
                  onClick={() => {
                    const existingWindow = windows.find((w) => w.appType === app.type)
                    if (existingWindow) {
                      onFocusWindow(existingWindow.id)
                    } else {
                      onOpenApp(app.type, app.title)
                    }
                  }}
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl
                    transition-all duration-200 hover:scale-110 active:scale-95
                    ${app.color} ${isOpen ? "ring-2 ring-white/50" : ""}
                    ${isHovered ? "transform scale-110" : ""}
                  `}
                >
                  {app.icon}
                </button>

                {isOpen && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}

                {isHovered && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {app.title}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
