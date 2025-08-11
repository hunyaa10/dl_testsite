"use client"

import { useEffect } from "react"
import SubBanner from "@/components/ui/sub-banner"
import { subBannerData } from "@/data/common/sub-banner-data"

export default function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SubBanner {...subBannerData.faq} />
      <section className="py-20">
        준비중
      </section>
    </>
  )
}
