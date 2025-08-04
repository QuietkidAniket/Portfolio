"use client"

import { Download } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"
import { Button } from "@/components/ui/button"

interface ResumeAppProps {
  data: PortfolioData
}

export default function ResumeApp({ data }: ResumeAppProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.basics.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{data.basics.tagline}</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <span>📍 {data.basics.location}</span>
            <span>📧 {data.basics.email}</span>
            <span>📱 {data.basics.phone}</span>
          </div>
          <div className="mt-4">
            <Button asChild>
              <a href={data.resume.downloadLink} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.resume.summary}</p>
        </div>

        {/* Resume Sections */}
        {data.resume.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 pb-1">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg">
                  {typeof item === "string" ? (
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                      {item}
                    </span>
                  ) : (
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {(item as any).degree || (item as any).title || "Item"}
                      </h3>
                      <p className="text-gray-600">{(item as any).institute || (item as any).company || ""}</p>
                      <p className="text-sm text-gray-500">{(item as any).year || (item as any).duration || ""}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
