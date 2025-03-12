import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"
import { inter } from "./fonts"

export const metadata = {
  title: "Crypto Swap",
  description: "Swap your cryptocurrencies easily and securely.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'