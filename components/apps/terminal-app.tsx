"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import type { PortfolioData } from "@/types/portfolio"

interface TerminalAppProps {
  data: PortfolioData
}

export default function TerminalApp({ data }: TerminalAppProps) {
  const [history, setHistory] = useState<string[]>([
    "\x1b[32m╭─────────────────────────────────────────────────────────╮\x1b[0m",
    "\x1b[32m│\x1b[0m \x1b[36m🚀 Welcome to Portfolio Terminal v2.0.0\x1b[0m              \x1b[32m│\x1b[0m",
    "\x1b[32m│\x1b[0m \x1b[33mType 'help' to see available commands\x1b[0m                 \x1b[32m│\x1b[0m",
    "\x1b[32m│\x1b[0m \x1b[35mPress Tab for auto-completion\x1b[0m                       \x1b[32m│\x1b[0m",
    "\x1b[32m╰─────────────────────────────────────────────────────────╯\x1b[0m",
    "",
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const availableCommands = [
    "help",
    "clear",
    "neofetch",
    "resume",
    "achievements",
    "projects",
    "experience",
    "socials",
    "about",
    "ls",
    "whoami",
    "date",
    "uptime",
    "ps",
    "top",
    "cat",
    "grep",
    "find",
    "history",
    "alias",
    "export",
    "echo",
    "pwd",
    "cd",
    "mkdir",
    "touch",
    "rm",
    "cp",
    "mv",
    "chmod",
    "git",
    "npm",
    "node",
    "python",
    "code",
    "vim",
    "nano",
  ]

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const formatOutput = (text: string) => {
    return text
      .replace(/\x1b\[32m/g, '<span style="color: #22c55e;">')
      .replace(/\x1b\[31m/g, '<span style="color: #ef4444;">')
      .replace(/\x1b\[33m/g, '<span style="color: #eab308;">')
      .replace(/\x1b\[34m/g, '<span style="color: #3b82f6;">')
      .replace(/\x1b\[35m/g, '<span style="color: #a855f7;">')
      .replace(/\x1b\[36m/g, '<span style="color: #06b6d4;">')
      .replace(/\x1b\[37m/g, '<span style="color: #f3f4f6;">')
      .replace(/\x1b\[0m/g, "</span>")
  }

  const executeCommand = (command: string) => {
    const cmd = command.trim().toLowerCase()
    const args = cmd.split(" ")
    const baseCmd = args[0]

    setHistory((prev) => [...prev, `\x1b[36m$\x1b[0m ${command}`])

    switch (baseCmd) {
      case "help":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m📚 Available Commands:\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "\x1b[32m🔧 System Commands:\x1b[0m",
          "  \x1b[36mhelp\x1b[0m          - Show this help message",
          "  \x1b[36mclear\x1b[0m         - Clear terminal screen",
          "  \x1b[36mneofetch\x1b[0m      - Display system information",
          "  \x1b[36mdate\x1b[0m          - Show current date and time",
          "  \x1b[36muptime\x1b[0m        - Show system uptime",
          "  \x1b[36mhistory\x1b[0m       - Show command history",
          "",
          "\x1b[32m👤 Portfolio Commands:\x1b[0m",
          "  \x1b[36mresume\x1b[0m        - Display resume information",
          "  \x1b[36machievements\x1b[0m  - List achievements and awards",
          "  \x1b[36mprojects\x1b[0m      - Show project portfolio",
          "  \x1b[36mexperience\x1b[0m    - Display work experience",
          "  \x1b[36msocials\x1b[0m       - Show social media links",
          "  \x1b[36mabout\x1b[0m         - Show personal information",
          "",
          "\x1b[32m📁 Navigation Commands:\x1b[0m",
          "  \x1b[36mls\x1b[0m            - List available sections",
          "  \x1b[36mwhoami\x1b[0m        - Display current user",
          "  \x1b[36mcat <file>\x1b[0m    - Display file contents",
          "",
          "\x1b[35m💡 Tip: Use Tab for auto-completion, ↑/↓ for command history\x1b[0m",
          "",
        ])
        break

      case "clear":
        setHistory([
          "\x1b[32m╭─────────────────────────────────────────────────────────╮\x1b[0m",
          "\x1b[32m│\x1b[0m \x1b[36m🚀 Welcome to Portfolio Terminal v2.0.0\x1b[0m              \x1b[32m│\x1b[0m",
          "\x1b[32m│\x1b[0m \x1b[33mType 'help' to see available commands\x1b[0m                 \x1b[32m│\x1b[0m",
          "\x1b[32m│\x1b[0m \x1b[35mPress Tab for auto-completion\x1b[0m                       \x1b[32m│\x1b[0m",
          "\x1b[32m╰─────────────────────────────────────────────────────────╯\x1b[0m",
          "",
        ])
        break

      case "neofetch":
        setHistory((prev) => [
          ...prev,
          "\x1b[36m      ██████╗ ███╗   ██╗██╗██╗  ██╗███████╗████████╗\x1b[0m    \x1b[33m" + data.basics.name + "\x1b[0m",
          "\x1b[36m     ██╔══██╗████╗  ██║██║██║ ██╔╝██╔════╝╚══██╔══╝\x1b[0m    \x1b[37m" + "─".repeat(data.basics.name.length) + "\x1b[0m",
          "\x1b[36m     ███████║██╔██╗ ██║██║█████╔╝ █████╗     ██║   \x1b[0m    \x1b[33mOS\x1b[0m: macOS Portfolio",
          "\x1b[36m     ██╔══██║██║╚██╗██║██║██╔═██╗ ██╔══╝     ██║   \x1b[0m    \x1b[33mHost\x1b[0m: " + data.basics.location,
          "\x1b[36m     ██║  ██║██║ ╚████║██║██║  ██╗███████╗   ██║   \x1b[0m    \x1b[33mKernel\x1b[0m: Portfolio v2.0.0",
          "\x1b[36m     ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   \x1b[0m    \x1b[33mUptime\x1b[0m: " + Math.floor(Date.now() / 1000 / 60) + " minutes",
          "\x1b[36m                                                    \x1b[0m    \x1b[33mPackages\x1b[0m: " + (data.projects.length + data.achievements.length) + " (portfolio)",
          "\x1b[36m        ██████╗  ██████╗ ██████╗ ████████╗        \x1b[0m    \x1b[33mShell\x1b[0m: portfolio-sh",
          "\x1b[36m        ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝        \x1b[0m    \x1b[33mResolution\x1b[0m: " + window.innerWidth + "x" + window.innerHeight,
          "\x1b[36m        ██████╔╝██║   ██║██████╔╝   ██║           \x1b[0m    \x1b[33mTerminal\x1b[0m: Portfolio Terminal",
          "\x1b[36m        ██╔═══╝ ██║   ██║██╔══██╗   ██║           \x1b[0m    \x1b[33mCPU\x1b[0m: " + navigator.hardwareConcurrency + " cores",
          "\x1b[36m        ██║     ╚██████╔╝██║  ██║   ██║           \x1b[0m    \x1b[33mMemory\x1b[0m: " + Math.round(performance.memory?.usedJSHeapSize / 1024 / 1024 || 0) + "MB",
          "\x1b[36m        ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝           \x1b[0m",
          "                                                      \x1b[31m███\x1b[32m███\x1b[33m███\x1b[34m███\x1b[35m███\x1b[36m███\x1b[37m███\x1b[0m",
          "                                                      \x1b[31m███\x1b[32m███\x1b[33m███\x1b[34m███\x1b[35m███\x1b[36m███\x1b[37m███\x1b[0m",
          "",
        ])
        break

      case "date":
        setHistory((prev) => [...prev, "\x1b[33m📅 " + new Date().toString() + "\x1b[0m", ""])
        break

      case "uptime":
        const uptime = Math.floor(Date.now() / 1000 / 60)
        setHistory((prev) => [...prev, `\x1b[33m⏰ System uptime: ${uptime} minutes\x1b[0m`, ""])
        break

      case "history":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m📜 Command History:\x1b[0m",
          ...commandHistory.map((cmd, index) => `  ${index + 1}  ${cmd}`),
          "",
        ])
        break

      case "resume":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m📄 RESUME\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "\x1b[36m" + data.resume.summary + "\x1b[0m",
          "",
          ...data.resume.sections.flatMap((section) => [
            `\x1b[32m${section.title.toUpperCase()}:\x1b[0m`,
            ...section.items.map(
              (item) => `  \x1b[37m•\x1b[0m ${typeof item === "string" ? item : JSON.stringify(item)}`,
            ),
            "",
          ]),
          `\x1b[35m📥 Download: ${data.resume.downloadLink}\x1b[0m`,
          "",
        ])
        break

      case "achievements":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m🏆 ACHIEVEMENTS\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          ...data.achievements.map(
            (achievement) =>
              `\x1b[33m${achievement.year}\x1b[0m - \x1b[36m${achievement.title}\x1b[0m: ${achievement.description}`,
          ),
          "",
        ])
        break

      case "projects":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m🚀 PROJECTS\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          ...data.projects.flatMap((project) => [
            `\x1b[36m${project.name}\x1b[0m`,
            `  \x1b[32mTech:\x1b[0m ${project.tech.join(", ")}`,
            `  \x1b[32mDescription:\x1b[0m ${project.description}`,
            `  \x1b[35mLink:\x1b[0m ${project.link}`,
            "",
          ]),
        ])
        break

      case "experience":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m💼 WORK EXPERIENCE\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          ...data.experience.flatMap((exp) => [
            `\x1b[33m${exp.year}\x1b[0m - \x1b[36m${exp.company}\x1b[0m`,
            `  \x1b[32mRole:\x1b[0m ${exp.role}`,
            `  \x1b[32mDescription:\x1b[0m ${exp.description}`,
            "",
          ]),
        ])
        break

      case "socials":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m🔗 SOCIAL LINKS\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          `\x1b[32mGitHub:\x1b[0m ${data.socials.github}`,
          `\x1b[32mLinkedIn:\x1b[0m ${data.socials.linkedin}`,
          `\x1b[32mCodeforces:\x1b[0m ${data.socials.codeforces}`,
          `\x1b[32mLeetCode:\x1b[0m ${data.socials.leetcode}`,
          "",
        ])
        break

      case "about":
        setHistory((prev) => [
          ...prev,
          "\x1b[33m👤 ABOUT ME\x1b[0m",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          `\x1b[32mName:\x1b[0m ${data.basics.name}`,
          `\x1b[32mLocation:\x1b[0m ${data.basics.location}`,
          `\x1b[32mRole:\x1b[0m ${data.basics.tagline}`,
          `\x1b[32mEmail:\x1b[0m ${data.basics.email}`,
          "",
        ])
        break

      case "ls":
        setHistory((prev) => [
          ...prev,
          "\x1b[34mresume\x1b[0m      \x1b[34machievements\x1b[0m  \x1b[34mprojects\x1b[0m     \x1b[34mexperience\x1b[0m",
          "\x1b[34msocials\x1b[0m     \x1b[34mabout\x1b[0m         \x1b[34mportfolio\x1b[0m    \x1b[34mcontact\x1b[0m",
          "",
        ])
        break

      case "whoami":
        setHistory((prev) => [...prev, `\x1b[36m${data.basics.name}\x1b[0m`, ""])
        break

      case "cat":
        if (args[1]) {
          setHistory((prev) => [...prev, `\x1b[31mcat: ${args[1]}: No such file or directory\x1b[0m`, ""])
        } else {
          setHistory((prev) => [...prev, "\x1b[31mcat: missing file operand\x1b[0m", ""])
        }
        break

      case "echo":
        const message = args.slice(1).join(" ")
        setHistory((prev) => [...prev, message, ""])
        break

      case "pwd":
        setHistory((prev) => [...prev, "\x1b[36m/home/portfolio\x1b[0m", ""])
        break
        
      case "cd":
      case "mkdir":
      case "touch":
      case "rm":
      case "cp":
      case "mv":
      case "chmod":
        setHistory((prev) => [
          ...prev,
          `\x1b[33m[simulated ${baseCmd}]:\x1b[0m ${args.slice(1).join(" ") || "<missing args>"}`,
          "",
        ])
        break

      case "grep":
      case "find":
        setHistory((prev) => [
          ...prev,
          `\x1b[34m[simulated ${baseCmd} output]\x1b[0m ${args.slice(1).join(" ") || "<missing pattern>"}`,
          "",
        ])
        break

      case "alias":
      case "export":
        setHistory((prev) => [
          ...prev,
          `\x1b[35m[env simulation]:\x1b[0m ${cmd}`,
          "",
        ])
        break

      case "git":
      case "npm":
      case "node":
      case "python":
      case "code":
      case "vim":
      case "nano":
        setHistory((prev) => [
          ...prev,
          `\x1b[36m[dev simulation]:\x1b[0m ${cmd}`,
          "",
        ])
        break

      case "ps":
      case "top":
        setHistory((prev) => [
          ...prev,
          "\x1b[33mPID    COMMAND\x1b[0m",
          "1      portfolio-desktop",
          "2      terminal-app",
          "3      window-manager",
          "",
        ])
        break

      default:
        setHistory((prev) => [
          ...prev,
          `\x1b[31mCommand not found: ${command}\x1b[0m. Type '\x1b[33mhelp\x1b[0m' for available commands.`,
          "",
        ])
    }
  }

  const handleTabCompletion = () => {
    const matches = availableCommands.filter((cmd) => cmd.startsWith(currentInput.toLowerCase()))
    if (matches.length === 1) {
      setCurrentInput(matches[0])
    } else if (matches.length > 1) {
      setSuggestions(matches)
      setShowSuggestions(true)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setShowSuggestions(false)
      if (currentInput.trim()) {
        setCommandHistory((prev) => [...prev, currentInput])
        executeCommand(currentInput)
      } else {
        setHistory((prev) => [...prev, "\x1b[36m$\x1b[0m "])
      }
      setCurrentInput("")
      setHistoryIndex(-1)
    } else if (e.key === "Tab") {
      e.preventDefault()
      handleTabCompletion()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="h-full bg-black text-green-400 terminal-font text-sm p-4 overflow-hidden relative">
      <div
        ref={terminalRef}
        className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: formatOutput(line) }} />
        ))}

        <div className="flex items-center">
          <span className="text-blue-400">guest@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-400 ml-1 terminal-font"
            autoFocus
          />
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="mt-2 p-2 bg-gray-800 rounded border border-gray-600">
            <div className="text-yellow-400 text-xs mb-1">Suggestions:</div>
            <div className="grid grid-cols-4 gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentInput(suggestion)
                    setShowSuggestions(false)
                    inputRef.current?.focus()
                  }}
                  className="text-left text-cyan-400 hover:text-white text-xs"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
