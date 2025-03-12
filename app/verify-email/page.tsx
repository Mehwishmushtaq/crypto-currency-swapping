"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import type React from "react"
// Import the QuickNavigation component
import { QuickNavigation } from "@/components/quick-navigation"

export default function VerifyEmailPage() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [step, setStep] = useState("email")
  const [error, setError] = useState<string | null>(null)
  const [isResending, setIsResending] = useState(false)
  const router = useRouter()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      // Simulate OTP sending
      console.log("Sending OTP to", email)
      setStep("otp")
    } catch (error) {
      console.error("Error sending OTP:", error)
      setError("Failed to send OTP. Please try again.")
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      // Simulate OTP verification
      console.log("Verifying OTP", otp.join(""))

      // Store login state in localStorage
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userEmail", email)

      router.push("/swap")
    } catch (error) {
      console.error("Error verifying OTP:", error)
      setError("Failed to verify OTP. Please try again.")
    }
  }

  const handleResendOtp = async () => {
    setIsResending(true)
    setError(null)
    try {
      // Simulate OTP resending
      console.log("Resending OTP to", email)
      setTimeout(() => {
        setError("New OTP sent. Please check your email.")
        setIsResending(false)
      }, 1000)
    } catch (error) {
      console.error("Error resending OTP:", error)
      setError("Failed to resend OTP. Please try again.")
      setIsResending(false)
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      if (nextInput) nextInput.focus()
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-md font-sans">
      <Card className="bg-[#ffffff] dark:bg-[#000000] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#000000] dark:text-[#ffffff]">
            {step === "email" ? "Verify Your Email" : "Enter OTP"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
          {step === "email" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[#d9d9d9]"
              />
              <Button type="submit" className="w-full bg-[#7b6bd7] text-[#ffffff] hover:bg-[#7b6bd7]/90">
                Send OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="flex justify-between">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-2xl border-[#d9d9d9]"
                  />
                ))}
              </div>
              <Button type="submit" className="w-full bg-[#7b6bd7] text-[#ffffff] hover:bg-[#7b6bd7]/90">
                Verify OTP
              </Button>
              <div className="text-center">
                <Button
                  type="button"
                  variant="link"
                  onClick={handleResendOtp}
                  disabled={isResending}
                  className="text-[#7b6bd7]"
                >
                  {isResending ? "Resending..." : "Resend OTP"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
      <QuickNavigation />
    </div>
  )
}

