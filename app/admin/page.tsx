import { LoginForm } from "@/components/admin/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center space-y-2">
          <h3 className="text-gray-900">여행대로</h3>
          <h2 className="text-2xl font-bold">관리자 로그인</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
