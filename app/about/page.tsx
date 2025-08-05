"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { brandColors } from "@/styles/colors"

export default function AboutPage() {
  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToContact = () => {
    // 홈페이지로 이동
    window.location.href = "/"

    // 페이지 로드 후 contact 섹션으로 스크롤
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        const headerHeight = 64 // 헤더 높이 (h-16 = 64px)
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }, 500) // 페이지 로드를 위해 충분한 시간 대기
  }

  const companyInfo = {
    history: {
      title: "회사 연혁",
      content:
        "1886년 창립 이래 레드콜라는 전 세계인들에게 사랑받는 음료 브랜드로 성장해왔습니다. 혁신적인 제품 개발과 지속적인 품질 향상을 통해 글로벌 리더로 자리매김했습니다. 135년이 넘는 긴 역사 동안 우리는 변화하는 시대에 맞춰 끊임없이 진화하며, 전 세계 200여 개국에서 사랑받는 브랜드가 되었습니다.",
      image: "/assets/images/company-intro/intro_1.jpg",
    },
    vision: {
      title: "비전 & 미션",
      content:
        "전 세계 사람들에게 행복과 상쾌함을 전달하며, 지속가능한 미래를 위한 혁신적인 솔루션을 제공합니다. 우리는 모든 순간을 특별하게 만드는 브랜드가 되고자 합니다. 환경보호와 사회공헌을 통해 더 나은 세상을 만들어가며, 고객과 함께 성장하는 기업이 되겠습니다.",
      image: "/assets/images/company-intro/intro_2.jpg",
    },
    values: {
      title: "핵심 가치",
      content:
        "고객 중심의 사고와 최고의 품질 추구가 우리의 핵심 가치입니다. 글로벌 리더십을 바탕으로 전 세계 시장에서 혁신을 선도하며, 지속가능한 발전과 사회적 책임을 실천합니다. 모든 임직원이 하나 되어 고객에게 최상의 가치를 제공하기 위해 노력하고 있습니다.",
      image: "/assets/images/company-intro/intro_3.jpg",
    },
    business: {
      title: "사업 영역",
      content:
        "음료 제조 및 유통을 중심으로 다양한 브랜드 포트폴리오를 운영하고 있습니다. 전 세계 파트너들과 함께 혁신적인 제품을 개발하고 시장을 선도하고 있습니다. 레드콜라 클래식부터 제로 칼로리 제품까지, 다양한 소비자의 니즈를 충족하는 제품군을 보유하고 있으며, 지속적인 연구개발을 통해 새로운 시장을 개척하고 있습니다.",
      image: "/assets/images/company-intro/intro_4.jpg",
    },
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="relative h-[50vh] pt-16 flex items-center justify-center overflow-hidden">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/company-intro/intro_banner.jpg"
              alt="Company Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* 텍스트 콘텐츠 */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">회사소개</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              1886년부터 시작된 레드콜라의 여정과 미래를 향한 비전을 소개합니다
            </p>
          </div>
        </section>

        {/* 회사 연혁 - 이미지 왼쪽, 텍스트 오른쪽 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src={companyInfo.history.image || "/placeholder.svg"}
                  alt="회사 연혁"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
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
              <div className="relative">
                <Image
                  src={companyInfo.values.image || "/placeholder.svg"}
                  alt="핵심 가치"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
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
      </main>

      <Footer />
    </div>
  )
}
