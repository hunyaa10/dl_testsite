"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Send, Package } from "lucide-react"
import { contactData } from "@/data/contact-data"
import { brandColors } from "@/styles/colors"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
    console.log("Sales inquiry submitted:", formData)
    // 폼 초기화
    setFormData({
      company: "",
      name: "",
      email: "",
      message: "",
    })
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return Phone
      case "Mail":
        return Mail
      default:
        return Mail
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{contactData.section.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            {contactData.section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <div className="space-y-6">
              {contactData.contactInfo.map((info, index) => {
                const IconComponent = getIcon(info.icon)
                return (
                  <div key={index}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`${brandColors.primary[100]} p-3 rounded-full`}>
                            <IconComponent className={`h-6 w-6 ${brandColors.text.primary}`} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                            <p className={`${brandColors.text.primary} font-medium mb-1`}>{info.content}</p>
                            <p className="text-sm text-gray-500">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>

            {/* 판매 혜택 안내 */}
            <div className="mt-8">
              <Card className={`border-none shadow-lg ${brandColors.primary[50]}`}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Package className={`h-5 w-5 ${brandColors.text.primary}`} />
                    {contactData.benefits.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {contactData.benefits.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 판매 문의 폼 */}
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 회사명과 담당자명을 데스크탑에서 한 열에 배치 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {contactData.form.fields.company.label} {contactData.form.fields.company.required && "*"}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required={contactData.form.fields.company.required}
                        className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 focus:bg-white transition-colors"
                        placeholder={contactData.form.fields.company.placeholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {contactData.form.fields.name.label} {contactData.form.fields.name.required && "*"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={contactData.form.fields.name.required}
                        className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 focus:bg-white transition-colors"
                        placeholder={contactData.form.fields.name.placeholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {contactData.form.fields.email.label} {contactData.form.fields.email.required && "*"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required={contactData.form.fields.email.required}
                      className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 focus:bg-white transition-colors"
                      placeholder={contactData.form.fields.email.placeholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {contactData.form.fields.message.label} {contactData.form.fields.message.required && "*"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required={contactData.form.fields.message.required}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 focus:bg-white transition-colors resize-none"
                      placeholder={contactData.form.fields.message.placeholder}
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className={`w-full ${brandColors.primary[600]} ${brandColors.hover.primary} text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <Send className="h-5 w-5" />
                      {contactData.form.submitButton}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
