"use client"

import { useEffect } from "react"
import Image from "next/image"
import SubBanner from "@/components/ui/sub-banner"
import { companyInfo } from "@/data/about/company-info"
import { subBannerData } from "@/data/common/sub-banner-data"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SubBanner {...subBannerData.about} />

        {/* 회사 연혁 - 이미지 왼쪽, 텍스트 오른쪽 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src={companyInfo.history.image || "/placeholder.svg"}
                  alt="회사 연혁"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{companyInfo.history.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{companyInfo.history.content}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 비전 & 미션 - 텍스트 왼쪽, 이미지 오른쪽 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{companyInfo.vision.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{companyInfo.vision.content}</p>
              </div>
              <div className="relative">
                <Image
                  src={companyInfo.vision.image || "/placeholder.svg"}
                  alt="비전 & 미션"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 핵심 가치 - 이미지 왼쪽, 텍스트 오른쪽 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src={companyInfo.values.image || "/placeholder.svg"}
                  alt="핵심 가치"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{companyInfo.values.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{companyInfo.values.content}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 사업 영역 - 텍스트 왼쪽, 이미지 오른쪽 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{companyInfo.business.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{companyInfo.business.content}</p>
              </div>
              <div className="relative">
                <Image
                  src={companyInfo.business.image || "/placeholder.svg"}
                  alt="사업 영역"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">함께 성장할 파트너를 찾습니다</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">레드콜라와 함께 새로운 기회를 만들어가세요</p>
          </div>
        </section>
    </>
  )
}
