"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (email === "admin@test.com" && password === "admin1234!") {
      localStorage.setItem("isLoggedIn", "true")
      // router.push("/admin/dashboard/inquiries")
    } else {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.")
    }

    setIsLoading(false)
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} className="pt-8 space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@test.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
          </div>
          
          {/* 에러메세지 */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription className="text-red-600 font-medium">{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
