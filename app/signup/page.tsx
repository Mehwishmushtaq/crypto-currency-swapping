"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"
// Import the QuickNavigation component
import { QuickNavigation } from "@/components/quick-navigation"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  const router = useRouter()

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions")
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Become our partner</h1>
        <p className="text-muted-foreground">
          Create a personal account and get access to a unique API key, profit withdrawals, transaction history, and
          stats.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSignUp}>
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
            placeholder="Set up your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
          <p className="text-sm text-muted-foreground">Should contain at least 8 characters</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              required
            />
            <label htmlFor="terms" className="text-sm">
              I&apos;ve read and agree to the ChangeNOW
              <Link href="#" className="text-primary hover:underline">
                {" "}
                Terms of Use
              </Link>
              ,{" "}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="#" className="text-primary hover:underline">
                Risk Disclosure Statement
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline">
                Partner Agreement
              </Link>
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={newsletter}
              onCheckedChange={(checked) => setNewsletter(checked as boolean)}
            />
            <label htmlFor="newsletter" className="text-sm">
              Subscribe to the newsletter
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full text-lg py-6 bg-[#7b6bd7] hover:bg-[#7b6bd7]/90 text-white">
          Sign Up
        </Button>

        <div className="text-center">
          <span className="text-muted-foreground">Already registered? </span>
          <Link href="/login" className="text-[#7b6bd7] hover:underline">
            Log In
          </Link>
        </div>
      </form>
      <QuickNavigation />
    </div>
  )
}

