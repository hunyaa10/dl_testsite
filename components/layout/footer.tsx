import Link from "next/link"
import { MessageCircle, Instagram } from "lucide-react"
import { footerData } from "@/data/common/footer-data"

export default function Footer() {
  const { company, customerService, copyright } = footerData

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageCircle":
        return <MessageCircle className="h-6 w-6" />
      case "Instagram":
        return <Instagram className="h-6 w-6" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      {/* 포트폴리오 안내 문구 */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <p className="text-center text-sm text-gray-600">
            ※ 이 사이트는 포트폴리오 용도로 제작된 가상의 예시입니다. 실제 제품, 브랜드, 회사와는 무관합니다.
          </p>
        </div>
      </div>

      {/* 기존 푸터 내용 */}
      <div className="py-12">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 왼쪽 영역 - 회사 정보 */}
            <div>
              <div className="mb-6">
                <span className="text-xl font-bold text-black-600 tracking-wide">REDCOLA</span>
              </div>

              {/* 약관 링크들 */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 text-sm">
                  {company.links.map((link, index) => (
                    <span key={link}>
                      <Link href="#" className="hover:text-red-600 transition-colors">
                        {link}
                      </Link>
                      {index < company.links.length - 1 && <span className="mx-2">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* 회사 상세 정보 */}
              <div className="space-y-2 text-sm text-gray-700">
                <div>상호 : {company.info.representative}</div>
                <div>
                  TEL : {company.info.tel} | FAX : {company.info.fax} | E-MAIL : {company.info.email}
                </div>
                <div>
                  사업자등록번호 : {company.info.businessNumber} | 통신판매업신고 : {company.info.salesNumber}
                </div>
                <div>본사 : {company.info.address}</div>
              </div>
            </div>

            {/* 오른쪽 영역 - 고객센터 */}
            <div>
              {/* 고객센터 정보 */}
              <div className="space-y-3">
                <div className="text-xl font-bold pt-10 pb-4">고객센터 {customerService.phone}</div>
                <div className="text-sm text-gray-700">
                  고객센터 운영시간 : {customerService.hours.weekday} | {customerService.hours.lunch}
                </div>
                <div className="text-sm text-gray-700">{customerService.hours.weekend}</div>

                {/* 소셜미디어 아이콘 */}
                <div className="flex gap-4 mt-6">
                  {customerService.socialMedia.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                      aria-label={social.name}
                    >
                      {getSocialIcon(social.icon)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 하단 구분선 및 저작권 */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
