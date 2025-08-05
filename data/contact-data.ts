export const contactData = {
  section: {
    title: "판매 문의",
    description:
      "제품 판매에 관심이 있으시다면 언제든지 연락해 주세요.\n전담 영업팀이 최적의 솔루션을 제공해드리겠습니다.",
  },

  contactInfo: [
    {
      icon: "Phone",
      title: "판매 문의 전화",
      content: "02-3218-8000",
      description: "전담 영업팀 직통 연결",
    },
    {
      icon: "Mail",
      title: "판매 문의 이메일",
      content: "sales@coca-cola.co.kr",
      description: "빠른 견적 및 상담 가능",
    },
  ],

  benefits: {
    title: "판매 파트너 혜택",
    items: [
      "경쟁력 있는 도매 가격 제공",
      "마케팅 지원 및 판촉물 제공",
      "정기 배송 서비스",
      "전담 영업 담당자 배정",
      "매출 증대를 위한 컨설팅",
    ],
  },

  form: {
    fields: {
      company: {
        label: "회사명",
        placeholder: "회사명을 입력해주세요",
        required: true,
      },
      name: {
        label: "담당자명",
        placeholder: "담당자 이름을 입력해주세요",
        required: true,
      },
      email: {
        label: "이메일",
        placeholder: "연락 가능한 이메일을 입력해���세요",
        required: true,
      },
      message: {
        label: "문의내용",
        placeholder: "간단한 문의내용을 작성해주시면 상세한 판매조건 및 견적에 대한 이메일을 보내드립니다.",
        required: true,
      },
    },
    submitButton: "판매 문의 보내기",
  },
}
