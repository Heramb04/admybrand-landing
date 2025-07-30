import type React from "react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function GlassCard({ children, className, style }: GlassCardProps) {
  return (
    <div
      className={cn("backdrop-blur-md bg-blue-500/5 border border-blue-500/20 rounded-xl shadow-xl", className)}
      style={style}
    >
      {children}
    </div>
  )
}
