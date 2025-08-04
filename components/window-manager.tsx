"use client"

import type { WindowState, PortfolioData } from "@/types/portfolio"
import Window from "./window"
import ResumeApp from "./apps/resume-app"
import AchievementsApp from "./apps/achievements-app"
import PortfolioApp from "./apps/portfolio-app"
import ExperienceApp from "./apps/experience-app"
import ProjectsApp from "./apps/projects-app"
import FilesApp from "./apps/files-app"
import TerminalApp from "./apps/terminal-app"
import AboutApp from "./apps/about-app"

interface WindowManagerProps {
  windows: WindowState[]
  activeWindow: string | null
  data: PortfolioData
  onClose: (windowId: string) => void
  onMinimize: (windowId: string) => void
  onFocus: (windowId: string) => void
  onUpdate: (windowId: string, updates: Partial<WindowState>) => void
}

export default function WindowManager({
  windows,
  activeWindow,
  data,
  onClose,
  onMinimize,
  onFocus,
  onUpdate,
}: WindowManagerProps) {
  const renderAppContent = (window: WindowState) => {
    switch (window.appType) {
      case "resume":
        return <ResumeApp data={data} />
      case "achievements":
        return <AchievementsApp data={data} />
      case "portfolio":
        return <PortfolioApp data={data} />
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
      default:
        return <div>Unknown app</div>
    }
  }

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          window={window}
          isActive={activeWindow === window.id}
          onClose={() => onClose(window.id)}
          onMinimize={() => onMinimize(window.id)}
          onFocus={() => onFocus(window.id)}
          onUpdate={(updates) => onUpdate(window.id, updates)}
        >
          {renderAppContent(window)}
        </Window>
      ))}
    </>
  )
}
