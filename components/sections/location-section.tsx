"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"
import { locationData } from "@/data/location-data"
import { brandColors } from "@/styles/colors"

export default function LocationSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return MapPin
      case "Navigation":
        return Navigation
      default:
        return MapPin
    }
  }

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">오시는 길</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 구글맵 */}
          <div className="relative h-full flex">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">구글맵연결</span>
            </div>
          </div>

          {/* 위치 정보 */}
          <div className="space-y-6">
            {locationData.locationInfo.map((info, index) => {
              const IconComponent = getIcon(info.icon)
              return (
                <div key={index}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`${brandColors.primary[100]} p-3 rounded-full flex-shrink-0`}>
                          <IconComponent className={`h-6 w-6 ${brandColors.text.primary}`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h4>
                          <p className="text-gray-600 whitespace-pre-line leading-relaxed text-lg">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
