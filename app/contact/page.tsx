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
      <section className="py-20 text-center bg-white">
        <ContactSection />
      </section>
    </>
  )
}
