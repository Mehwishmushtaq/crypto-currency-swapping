"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"
import { QuickNavigation } from "@/components/quick-navigation"

export default function OrderReviewPage() {
  const router = useRouter()

  const handleConfirmOrder = () => {
    // Handle order confirmation
    alert("Order confirmed! Thank you for your purchase.")
    router.push("/swap")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl font-sans">
      <Card className="bg-card shadow-lg">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-[#7b6bd7]" />
            Review Your Order
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6 text-card-foreground">
            <div className="flex justify-between items-center bg-muted p-4 rounded-lg">
              <span className="font-medium">From:</span>
              <span className="font-bold text-lg">0.1 BTC</span>
            </div>
            <div className="flex justify-between items-center bg-muted p-4 rounded-lg">
              <span className="font-medium">To:</span>
              <span className="font-bold text-lg">2.7406888 ETH</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Exchange Rate:</span>
              <span className="font-medium">1 BTC = 27.406888 ETH</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Network Fee:</span>
              <span className="font-medium">0.001 BTC</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold pt-4 border-t border-border">
              <span>Total:</span>
              <span>0.101 BTC</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg flex items-center gap-4">
            <CreditCard className="h-6 w-6 text-[#7b6bd7]" />
            <div>
              <p className="font-medium">Payment Method</p>
              <p className="text-sm text-muted-foreground">Visa ending in 4242</p>
            </div>
          </div>

          <Button
            onClick={handleConfirmOrder}
            className="w-full mt-8 bg-[#7b6bd7] hover:bg-[#7b6bd7]/90 text-white flex items-center justify-center gap-2"
          >
            Confirm Order
            <ArrowRight className="h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
      <QuickNavigation />
    </div>
  )
}

