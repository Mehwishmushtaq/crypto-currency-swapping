"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock, HelpCircle, Wallet, Calendar, User, ShieldCheck, CreditCardIcon } from "lucide-react"
import { useRouter } from "next/navigation"
// Import the QuickNavigation component
import { QuickNavigation } from "@/components/quick-navigation"

export default function PaymentMethodPage() {
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [securityCode, setSecurityCode] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [saveCard, setSaveCard] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState("credit_card")
  const router = useRouter()

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatCardNumber(e.target.value)
    setCardNumber(value)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length >= 2) {
      value = value.slice(0, 2) + " / " + value.slice(2)
    }
    setExpiryDate(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission
    router.push("/order-review")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card className="bg-card">
        <CardHeader className="border-b border-border">
          <div className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-[#7b6bd7]" />
            <CardTitle className="text-2xl font-semibold">Payment Options</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="credit_card"
                  name="payment_method"
                  value="credit_card"
                  checked={selectedMethod === "credit_card"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="w-5 h-5 border-border"
                />
                <Label htmlFor="credit_card" className="flex items-center gap-4">
                  <CreditCardIcon className="h-5 w-5 text-[#7b6bd7]" />
                  <span className="text-lg">Credit & Debit Cards</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-blue-500 rounded"></div>
                    <div className="w-8 h-5 bg-red-500 rounded"></div>
                    <div className="w-8 h-5 bg-gray-500 rounded"></div>
                    <div className="w-8 h-5 bg-orange-500 rounded"></div>
                    <div className="w-8 h-5 bg-green-500 rounded"></div>
                  </div>
                </Label>
              </div>

              {selectedMethod === "credit_card" && (
                <div className="space-y-4 pl-9">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-[#7b6bd7]" />
                      <span>Card number</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        className="pl-10 pr-10 border-border"
                        placeholder="1234 5678 9012 3456"
                      />
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#7b6bd7]" />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#7b6bd7]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#7b6bd7]" />
                        <span>Expiration date</span>
                      </Label>
                      <Input
                        id="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        maxLength={7}
                        className="border-border"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#7b6bd7]" />
                        <Label htmlFor="securityCode">Security code</Label>
                        <HelpCircle className="h-4 w-4 text-[#7b6bd7] cursor-help" />
                      </div>
                      <Input
                        id="securityCode"
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                        maxLength={3}
                        className="border-border"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardholderName" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#7b6bd7]" />
                      <span>Cardholder&apos;s name</span>
                    </Label>
                    <Input
                      id="cardholderName"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="border-border"
                    />
                    <p className="text-sm text-muted-foreground">As written on card</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="saveCard"
                      checked={saveCard}
                      onCheckedChange={(checked) => setSaveCard(checked as boolean)}
                      className="border-border"
                    />
                    <div className="flex items-center gap-2">
                      <Label htmlFor="saveCard" className="text-sm">
                        Save this card for future payments
                      </Label>
                      <HelpCircle className="h-4 w-4 text-[#7b6bd7] cursor-help" />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <input
                  type="radio"
                  id="paypal"
                  name="payment_method"
                  value="paypal"
                  checked={selectedMethod === "paypal"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="w-5 h-5 border-border"
                />
                <Label htmlFor="paypal" className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                    PayPal
                  </div>
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#7b6bd7] hover:bg-[#7b6bd7]/90 text-white">
              Continue to Review
            </Button>
          </form>
        </CardContent>
      </Card>
      <QuickNavigation />
    </div>
  )
}

