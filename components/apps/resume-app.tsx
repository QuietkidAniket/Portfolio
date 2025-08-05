"use client"

import { Download } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"
import { Button } from "@/components/ui/button"

interface ResumeAppProps {
  data: PortfolioData
}

export default function ResumeApp({ data }: ResumeAppProps) {
  const techLogos: Record<string, string> = {
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  }

  return (
    <div className="h-full overflow-y-auto p-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{data.basics.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{data.basics.tagline}</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📍 {data.basics.location}</span>
            <a href={`mailto:${data.basics.email}`} className="hover:text-blue-500">📧 {data.basics.email}</a>
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b-2 border-blue-500 pb-1">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{data.resume.summary}</p>
        </div>

        {/* Resume Sections */}
        {data.resume.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-1">
              {section.title}
            </h2>
            {section.title === "Skills" || section.title === "Technologies" || section.title === "Programming Languages" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow flex flex-col items-center text-center">
                    {techLogos[item as string] && (
                      <img src={techLogos[item as string]} alt={item as string} className="w-8 h-8 mb-2" />
                    )}
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item as string}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    {typeof item === "string" ? (
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                        {item}
                      </span>
                    ) : (
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {(item as any).degree || (item as any).title || "Item"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{(item as any).institute || (item as any).company || ""}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{(item as any).year || (item as any).duration || ""}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
