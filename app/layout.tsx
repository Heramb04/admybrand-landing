import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Revolutionize Your Marketing with AI",
  description:
    "AI-powered marketing tools for modern brands. Create, analyze, and scale your campaigns with cutting-edge artificial intelligence.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
