import Image from "next/image"

interface SubBannerProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function SubBanner({ title, subtitle, backgroundImage }: SubBannerProps) {
  return (
    <section className="relative h-[50vh] pt-16 flex items-center justify-center overflow-hidden">
      {/* 배너 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 배너 텍스트 콘텐츠 */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  )
} 