"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CreativeCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: "lift" | "tilt" | "glow" | "magnetic"
  delay?: number
}

export function CreativeCard({ children, className, hoverEffect = "lift", delay = 0 }: CreativeCardProps) {
  const hoverVariants = {
    lift: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
    },
    tilt: {
      rotateY: 5,
      rotateX: 5,
      scale: 1.02,
    },
    glow: {
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
      borderColor: "rgba(59, 130, 246, 0.5)",
    },
    magnetic: {
      scale: 1.05,
      y: -5,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hoverVariants[hoverEffect]}
      className={cn(
        "backdrop-blur-md bg-blue-500/5 border border-blue-500/20 rounded-xl shadow-xl transition-all duration-300 relative overflow-hidden group",
        className,
      )}
    >
      {/* Creative Border Animation */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 animate-pulse" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
