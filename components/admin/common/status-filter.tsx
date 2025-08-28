"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

interface FilterOption {
  value: string
  label: string
}

interface StatusFilterProps {
  value: string
  onChange: (value: string) => void
  options: FilterOption[]
  className?: string
}

export function StatusFilter({ value, onChange, options, className }: StatusFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`w-full ${className}`}>
        <Filter className="w-4 h-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
