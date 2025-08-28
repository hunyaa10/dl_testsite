"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/admin/dashboard/dashboard-layout"
import { ProductList } from "@/components/admin/products/product-list"
import { ProductRegistrationModal } from "@/components/admin/products/product-registration-modal"

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)

  const handleEdit = (product: Product) => {
    setEditProduct(product)
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setEditProduct(null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditProduct(null)
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* <ProductList onEdit={handleEdit} onAdd={handleAdd} />
        <ProductRegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} editProduct={editProduct} /> */}
        준비중
      </div>
    </DashboardLayout>
  )
}
