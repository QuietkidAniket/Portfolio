"use client"

import type { AppType } from "@/types/portfolio"

interface DesktopIconsProps {
  onOpenApp: (appType: AppType, title: string) => void
}

const desktopIcons = [
  { type: "resume" as AppType, title: "Resume", icon: "📄", x: 50, y: 100 },
  { type: "projects" as AppType, title: "Projects", icon: "🚀", x: 50, y: 200 },
  { type: "terminal" as AppType, title: "Terminal", icon: "⚡", x: 50, y: 300 },
]

export default function DesktopIcons({ onOpenApp }: DesktopIconsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {desktopIcons.map((icon) => (
        <button
          key={icon.type}
          onClick={() => onOpenApp(icon.type, icon.title)}
          className="absolute pointer-events-auto group"
          style={{ left: icon.x, top: icon.y }}
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl group-hover:bg-white/20 transition-colors">
              {icon.icon}
            </div>
            <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">{icon.title}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
