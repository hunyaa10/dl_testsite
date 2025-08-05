import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import { newsData } from "@/data/news-data"
import { brandColors } from "@/styles/colors"

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{newsData.sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{newsData.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newsData.items.map((item) => (
            <Link key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="group-hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3
                    className={`text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:${brandColors.text.primary} transition-colors`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{item.summary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
