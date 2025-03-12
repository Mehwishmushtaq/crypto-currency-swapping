"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/splash-screen"
import SwapPage from "@/components/swap-page"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000) // 3 seconds duration

    return () => clearTimeout(timer)
  }, [])

  return <>{showSplash ? <SplashScreen /> : <SwapPage />}</>
}

