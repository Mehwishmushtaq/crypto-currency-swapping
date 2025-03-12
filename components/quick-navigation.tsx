import Link from "next/link"
import { Button } from "@/components/ui/button"

export function QuickNavigation() {
  return (
    <div className="mt-8 p-4 border border-dashed border-gray-300 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Quick Navigation</h3>
      <div className="flex flex-wrap gap-2">
        <Link href="/login">
          <Button variant="outline" size="sm" className="border-[#7b6bd7] text-[#7b6bd7]">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline" size="sm" className="border-[#7b6bd7] text-[#7b6bd7]">
            Sign Up
          </Button>
        </Link>
        <Link href="/verify-email">
          <Button variant="outline" size="sm" className="border-[#7b6bd7] text-[#7b6bd7]">
            Verify Email
          </Button>
        </Link>
        <Link href="/payment-method">
          <Button variant="outline" size="sm" className="border-[#7b6bd7] text-[#7b6bd7]">
            Payment Method
          </Button>
        </Link>
        <Link href="/order-review">
          <Button variant="outline" size="sm" className="border-[#7b6bd7] text-[#7b6bd7]">
            Order Review
          </Button>
        </Link>
        <Link href="/swap">
          <Button variant="outline" size="sm" className="border-[#7b6bd7] text-[#7b6bd7]">
            Swap
          </Button>
        </Link>
      </div>
    </div>
  )
}

