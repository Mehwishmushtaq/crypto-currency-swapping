"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function SwapPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isKycCompleted, setIsKycCompleted] = useState(false)

  const handleExchange = () => {
    if (!isLoggedIn) {
      // Redirect to login/OTP verification
      window.location.href = "/verify-email"
    } else if (!isKycCompleted) {
      // Redirect to KYC verification
      window.location.href = "/kyc"
    } else {
      // Redirect to payment method selection
      window.location.href = "/payment-method"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl font-sans">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-8">
          <h1 className="text-xl font-medium text-[#1F2937] dark:text-[#F9FAFB]">Exchange Crypto</h1>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="en">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
          <ThemeToggle />
        </div>
      </div>

      <div className="text-sm text-[#8B5CF6] mb-4">check tx status</div>

      <div className="bg-[#FFFFFF] dark:bg-[#111827] rounded-lg mb-4 overflow-hidden shadow-lg">
        <iframe
          id="iframe-widget"
          src="https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=btc&to=eth&FAQ=true&backgroundColor=FFFFFF&darkMode=false&horizontal=false&lang=en-US&link_id=0c5a96bd1985c8&locales=true&primaryColor=8B5CF6&toTheMoon=true&exchangeType=direct"
          width="100%"
          height="400px"
          frameBorder="0"
          title="ChangeNOW Widget"
          className="w-full"
        ></iframe>
      </div>

      

      {!isLoggedIn && (
        <Link href="/login">
          <Button variant="outline" className="w-full border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10">
            Get Registered
          </Button>
        </Link>
      )}
      {isLoggedIn && !isKycCompleted && (
        <Link href="/kyc">
          <Button variant="outline" className="w-full border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10">
            Complete KYC
          </Button>
        </Link>
      )}
    </div>
  )
}

