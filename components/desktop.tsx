"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import MenuBar from "./menu-bar"
import Dock from "./dock"
import WindowManager from "./window-manager"
import DesktopIcons from "./desktop-icons"
import ContextMenu from "./context-menu"
import Spotlight from "./spotlight"
import type { PortfolioData, WindowState, AppType } from "@/types/portfolio"

interface DesktopProps {
  data: PortfolioData
}

export default function Desktop({ data }: DesktopProps) {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  })

  const openApp = useCallback(
    (appType: AppType, title: string) => {
      const existingWindow = windows.find((w) => w.appType === appType)
      if (existingWindow) {
        setActiveWindow(existingWindow.id)
        setWindows((prev) =>
          prev.map((w) =>
            w.id === existingWindow.id
              ? { ...w, isMinimized: false, zIndex: Math.max(...prev.map((w) => w.zIndex)) + 1 }
              : w,
          ),
        )
        return
      }

      const newWindow: WindowState = {
        id: `${appType}-${Date.now()}`,
        appType,
        title,
        isMinimized: false,
        position: { x: 100 + windows.length * 30, y: 100 + windows.length * 30 },
        size: { width: 800, height: 600 },
        zIndex: Math.max(...windows.map((w) => w.zIndex), 0) + 1,
      }

      setWindows((prev) => [...prev, newWindow])
      setActiveWindow(newWindow.id)
    },
    [windows],
  )

  const closeWindow = useCallback((windowId: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== windowId))
    setActiveWindow(null)
  }, [])

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, isMinimized: true } : w)))
    setActiveWindow(null)
  }, [])

  const focusWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId ? { ...w, isMinimized: false, zIndex: Math.max(...prev.map((w) => w.zIndex)) + 1 } : w,
      ),
    )
    setActiveWindow(windowId)
  }, [])

  const updateWindow = useCallback((windowId: string, updates: Partial<WindowState>) => {
    setWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, ...updates } : w)))
  }, [])

  const closeAllWindows = useCallback(() => {
    setWindows([])
    setActiveWindow(null)
  }, [])

  const minimizeAllWindows = useCallback(() => {
    setWindows((prev) => prev.map((w) => ({ ...w, isMinimized: true })))
    setActiveWindow(null)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case "w":
            e.preventDefault()
            if (activeWindow) {
              closeWindow(activeWindow)
            }
            break
          case "m":
            e.preventDefault()
            if (activeWindow) {
              minimizeWindow(activeWindow)
            }
            break
          case "q":
            e.preventDefault()
            closeAllWindows()
            break
          case "h":
            e.preventDefault()
            minimizeAllWindows()
            break
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
            e.preventDefault()
            const appTypes: AppType[] = [
              "resume",
              "achievements",
              "portfolio",
              "experience",
              "projects",
              "files",
              "terminal",
              "about",
            ]
            const appIndex = Number.parseInt(e.key) - 1
            if (appIndex < appTypes.length) {
              const appType = appTypes[appIndex]
              const appTitles = [
                "Resume",
                "Achievements",
                "Portfolio",
                "Experience",
                "Projects",
                "Files",
                "Terminal",
                "About Me",
              ]
              openApp(appType, appTitles[appIndex])
            }
            break
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [activeWindow, closeWindow, minimizeWindow, closeAllWindows, minimizeAllWindows, openApp])

  // Context menu
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      visible: true,
    })
  }, [])

  const hideContextMenu = useCallback(() => {
    setContextMenu((prev) => ({ ...prev, visible: false }))
  }, [])

  useEffect(() => {
    document.addEventListener("click", hideContextMenu)
    return () => document.removeEventListener("click", hideContextMenu)
  }, [hideContextMenu])

  return (
    <div
      className="h-screen w-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onContextMenu={handleContextMenu}
    >
      <MenuBar data={data} />

      <DesktopIcons onOpenApp={openApp} />

      <WindowManager
        windows={windows}
        activeWindow={activeWindow}
        data={data}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        onUpdate={updateWindow}
      />

      <Dock windows={windows} onOpenApp={openApp} onFocusWindow={focusWindow} />

      {contextMenu.visible && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onOpenApp={openApp}
          onCloseAll={closeAllWindows}
          onMinimizeAll={minimizeAllWindows}
        />
      )}

      <Spotlight data={data} onOpenApp={openApp} />
    </div>
  )
}
