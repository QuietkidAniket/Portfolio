"use client"

import type { PortfolioData } from "@/types/portfolio"

interface PortfolioAppProps {
  data: PortfolioData
}

export default function PortfolioApp({ data }: PortfolioAppProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Gallery</h1>
        <p className="text-gray-600">Showcase of my work and projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-4xl">🚀</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
