"use client"

import { useEffect } from "react"
import SubBanner from "@/components/ui/sub-banner"
import { subBannerData } from "@/data/common/sub-banner-data"

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SubBanner {...subBannerData.news} />
      <section className="py-20">
        준비중
      </section>
    </>
  )
}
