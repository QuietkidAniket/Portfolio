"use client"

import { useState } from "react"
import { Settings, Moon, Sun, Volume2, VolumeX, Wifi, WifiOff } from "lucide-react"

export default function QuickSettings() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [wifiEnabled, setWifiEnabled] = useState(true)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-white/10 rounded transition-colors">
        <Settings className="w-4 h-4 text-white" />
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 p-4 z-50">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Settings</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span className="text-sm">Dark Mode</span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-6 rounded-full transition-colors ${darkMode ? "bg-blue-500" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    darkMode ? "translate-x-5" : "translate-x-1"
                  } mt-1`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-sm">Sound Effects</span>
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`w-10 h-6 rounded-full transition-colors ${soundEnabled ? "bg-blue-500" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    soundEnabled ? "translate-x-5" : "translate-x-1"
                  } mt-1`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {wifiEnabled ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                <span className="text-sm">Wi-Fi</span>
              </div>
              <button
                onClick={() => setWifiEnabled(!wifiEnabled)}
                className={`w-10 h-6 rounded-full transition-colors ${wifiEnabled ? "bg-blue-500" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    wifiEnabled ? "translate-x-5" : "translate-x-1"
                  } mt-1`}
                />
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 space-y-1">
              <div>Portfolio v2.0.0</div>
              <div>Built with Next.js & TypeScript</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
