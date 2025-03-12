"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { QuickNavigation } from "@/components/quick-navigation"

export default function SwapPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    // Check if the user is logged in using localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const email = localStorage.getItem("userEmail")
    setIsLoggedIn(loggedIn)
    setUserEmail(email)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
    setUserEmail(null)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-8">
          <h1 className="text-xl font-medium text-[#000000] dark:text-[#ffffff]">Exchange Crypto</h1>
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

      <div className="text-sm text-[#7b6bd7] mb-4">check tx status</div>

      <div className="bg-[#ffffff] dark:bg-[#000000] rounded-lg mb-4 overflow-hidden shadow-lg">
        <iframe
          id="iframe-widget"
          src="https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=btc&to=eth&FAQ=true&backgroundColor=FFFFFF&darkMode=false&horizontal=false&lang=en-US&link_id=0c5a96bd1985c8&locales=true&primaryColor=7b6bd7&toTheMoon=true&exchangeType=direct"
          width="100%"
          height="400px"
          frameBorder="0"
          title="ChangeNOW Widget"
          className="w-full"
        ></iframe>
      </div>

      {/* Login status display */}
      <div className="mt-4 text-center">
        {isLoggedIn ? (
          <div>
            <p>Logged in as: {userEmail}</p>
            <Button variant="outline" onClick={handleLogout} className="mt-2 text-[#7b6bd7] border-[#7b6bd7]">
              Logout
            </Button>
          </div>
        ) : (
          <Link href="/login">
            <Button className="w-full bg-[#7b6bd7] hover:bg-[#7b6bd7]/90 text-[#ffffff]">Get Registered</Button>
          </Link>
        )}
      </div>

      {/* Quick Navigation */}
      <QuickNavigation />
    </div>
  )
}

