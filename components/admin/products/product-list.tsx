"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Plus } from "lucide-react"
import { SearchInput } from "@/components/common/search-input"
import { StatusFilter } from "@/components/common/status-filter"

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

const mockProducts: Product[] = [
  { id: 1, name: "물품1", category: "전자제품", price: 50000, stock: 10 },
  { id: 2, name: "물품2", category: "의류", price: 30000, stock: 25 },
  { id: 3, name: "물품3", category: "도서", price: 15000, stock: 5 },
  { id: 4, name: "물품4", category: "스포츠", price: 80000, stock: 3 },
]

const categoryOptions = [
  { value: "all", label: "전체" },
  { value: "전자제품", label: "전자제품" },
  { value: "의류", label: "의류" },
  { value: "도서", label: "도서" },
  { value: "스포츠", label: "스포츠" },
]

interface ProductListProps {
  onEdit: (product: Product) => void
  onAdd: () => void
}

export function ProductList({ onEdit, onAdd }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    console.log("검색어:", term)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    console.log("선택된 카테고리:", category)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">물품 관리</h1>
        <Button onClick={onAdd} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          물품 등록
        </Button>
      </div>

      <div className="w-full flex justify-between gap-4">
        <div className="flex-1">
          <SearchInput placeholder="물품명으로 검색" onSearch={handleSearch} />
        </div>
        <div className="w-40">
          <StatusFilter
            options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryFilter}
            placeholder="카테고리 선택"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">물품명</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">카테고리</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">가격</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">재고수량</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">수정</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">삭제</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <Badge variant="secondary" className="bg-gray-50 text-gray-700">
                      {product.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.price.toLocaleString()}원</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.stock}개</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(product)}
                      className="h-8 px-3 text-xs font-medium"
                    >
                      <Edit className="w-3 h-3 mr-1" />
                      수정
                    </Button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                      className="h-8 px-3 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      삭제
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
