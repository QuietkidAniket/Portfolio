"use client"

import { MapPin, Mail, Phone, User } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface AboutAppProps {
  data: PortfolioData
}

export default function AboutApp({ data }: AboutAppProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
            <img
              src={data.basics.photo || "/placeholder.svg?height=128&width=128&query=profile avatar"}
              alt={data.basics.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.basics.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{data.basics.tagline}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-500" />
            Contact Information
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{data.basics.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href={`mailto:${data.basics.email}`} className="text-blue-600 hover:underline">
                {data.basics.email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href={`tel:${data.basics.phone}`} className="text-blue-600 hover:underline">
                {data.basics.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">System Information</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-600">Name:</span>
              <p className="text-gray-900">{data.basics.name}</p>
            </div>
            <div>
              <span className="font-medium text-gray-600">Role:</span>
              <p className="text-gray-900">{data.basics.tagline}</p>
            </div>
            <div>
              <span className="font-medium text-gray-600">Projects:</span>
              <p className="text-gray-900">{data.projects.length}</p>
            </div>
            <div>
              <span className="font-medium text-gray-600">Achievements:</span>
              <p className="text-gray-900">{data.achievements.length}</p>
            </div>
            <div>
              <span className="font-medium text-gray-600">Experience:</span>
              <p className="text-gray-900">{data.experience.length} roles</p>
            </div>
            <div>
              <span className="font-medium text-gray-600">Status:</span>
              <p className="text-green-600">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
