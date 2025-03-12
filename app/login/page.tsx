"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
// Import the QuickNavigation component
import { QuickNavigation } from "@/components/quick-navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // Store login state in localStorage
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userEmail", email)

    // Redirect to swap page
    router.push("/swap")
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login to Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#7b6bd7] hover:bg-[#7b6bd7]/90 text-white">
              Login
            </Button>

            <div className="mt-4 text-center">
              <span className="text-muted-foreground">Don&apos;t have an account? </span>
              <Link href="/signup" className="text-[#7b6bd7] hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      <QuickNavigation />
    </div>
  )
}

