"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { SearchInput } from "@/components/common/search-input"
import { StatusFilter } from "@/components/common/status-filter"
import { InquiryDetailModal } from "./inquiry-detail-modal"

interface Inquiry {
  id: number
  companyName: string
  contactName: string
  contactEmail: string
  content: string
  status: "pending" | "completed"
  createdAt: string
}

const mockInquiries: Inquiry[] = [
  {
    id: 1,
    companyName: "회사명1",
    contactName: "담당자명1",
    contactEmail: "contact1@company1.com",
    content: "문의내용1입니다. 상품에 대한 자세한 정보를 알고 싶습니다.",
    status: "pending",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    companyName: "회사명2",
    contactName: "담당자명2",
    contactEmail: "contact2@company2.com",
    content: "문의내용2입니다. 제휴 관련하여 상담받고 싶습니다.",
    status: "completed",
    createdAt: "2024-01-14",
  },
  {
    id: 3,
    companyName: "회사명3",
    contactName: "담당자명3",
    contactEmail: "contact3@company3.com",
    content: "문의내용3입니다. 시스템 연동에 대해 문의드립니다.",
    status: "completed",
    createdAt: "2024-01-13",
  },
  {
    id: 4,
    companyName: "회사명4",
    contactName: "담당자명4",
    contactEmail: "contact4@company4.com",
    content: "문의내용4입니다. 재고 현황을 확인하고 싶습니다.",
    status: "pending",
    createdAt: "2024-01-12",
  },
]

const statusLabels = {
  pending: "미처리",
  completed: "완료",
}

const statusColors = {
  pending: "bg-red-100 text-red-800",
  completed: "bg-blue-100 text-blue-800",
}

const statusOptions = [
  { value: "all", label: "전체" },
  { value: "pending", label: "미처리" },
  { value: "completed", label: "완료" },
]

export function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(mockInquiries)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter
    return matchesStatus
  })

  const updateInquiryStatus = (id: number, newStatus: Inquiry["status"]) => {
    setInquiries((prev) => prev.map((inquiry) => (inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry)))
  }

  const handleModalOpen = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedInquiry(null)
  }

  const handleStatusUpdate = (id: number, newStatus: Inquiry["status"]) => {
    updateInquiryStatus(id, newStatus)
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus })
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    console.log("검색어:", term)
  }

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status)
    console.log("선택된 상태:", status)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">문의 관리</h1>
      </div>

      <div className="w-full flex justify-between gap-4">
        <div className="flex-1">
          <SearchInput placeholder="회사명으로 검색" onSearch={handleSearch} />
        </div>
        <div className="w-40">
          <StatusFilter
            options={statusOptions}
            value={statusFilter}
            onChange={handleStatusFilter}
            placeholder="상태 선택"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">작성일</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">회사명</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">담당자명</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이메일</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">문의내용</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">{inquiry.createdAt}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{inquiry.companyName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{inquiry.contactName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{inquiry.contactEmail}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleModalOpen(inquiry)}
                      className="h-8 px-3 text-xs font-medium"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      문의내용
                    </Button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <Badge className={`${statusColors[inquiry.status]} text-xs font-medium px-2 py-1`}>
                      {statusLabels[inquiry.status]}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InquiryDetailModal
        inquiry={selectedInquiry}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  )
}
