"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Inquiry {
  id: number
  companyName: string
  contactName: string
  contactEmail: string
  content: string
  status: "pending" | "completed"
  createdAt: string
}

interface InquiryDetailModalProps {
  inquiry: Inquiry | null
  isOpen: boolean
  onClose: () => void
  onStatusUpdate: (id: number, status: Inquiry["status"]) => void
}

const statusLabels = {
  pending: "미처리",
  completed: "완료",
}

const statusColors = {
  pending: "bg-red-100 text-red-800",
  completed: "bg-blue-100 text-blue-800",
}

export function InquiryDetailModal({ inquiry, isOpen, onClose, onStatusUpdate }: InquiryDetailModalProps) {
  const [tempStatus, setTempStatus] = useState<Inquiry["status"] | null>(null)

  const handleStatusChange = () => {
    if (inquiry && tempStatus) {
      onStatusUpdate(inquiry.id, tempStatus)
      onClose()
      setTempStatus(null)
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
      setTempStatus(null)
    }
  }

  if (!inquiry) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{inquiry.companyName} 문의내용</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">회사명:</span> {inquiry.companyName}
            </div>
            <div>
              <span className="font-medium">담당자명:</span> {inquiry.contactName}
            </div>
            <div>
              <span className="font-medium">연락이메일:</span> {inquiry.contactEmail}
            </div>
            <div>
              <span className="font-medium">작성일:</span> {inquiry.createdAt}
            </div>
            <div>
              <span className="font-medium">상태:</span>
              <Badge className={`ml-2 ${statusColors[inquiry.status]}`}>{statusLabels[inquiry.status]}</Badge>
            </div>
          </div>
          <div>
            <span className="font-medium">문의 내용:</span>
            <p className="mt-2 p-4 bg-gray-50 rounded-lg leading-relaxed">{inquiry.content}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Select
              value={tempStatus || inquiry.status}
              onValueChange={(value: Inquiry["status"]) => setTempStatus(value)}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">미처리</SelectItem>
                <SelectItem value="completed">완료</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleStatusChange} size="sm">
              상태변경
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
