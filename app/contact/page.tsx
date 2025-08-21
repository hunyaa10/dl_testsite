"use client"

import { useEffect } from "react"
import SubBanner from "@/components/ui/sub-banner"
import { subBannerData } from "@/data/common/sub-banner-data"
import ContactSection from "@/components/contact/contact-section"
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SubBanner {...subBannerData.contact} />
      {/* <section className="py-20 text-center">
        준비중
      </section> */}
      
      <section className="py-20 text-center bg-white">
        <ContactSection />
      </section>
      {/* CTA 섹션 */}
      <div className="container mx-auto px-4 text-center pb-10 pt-20 border-t border-gray-200">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">함께 성장할 파트너를 찾습니다</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">00와 함께 새로운 기회를 만들어가세요</p>
      </div>
    </>
  )
}
