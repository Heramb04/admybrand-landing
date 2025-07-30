"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "default",
  size = "lg",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-50, 50], [5, -5])
  const rotateY = useTransform(springX, [-50, 50], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="perspective-1000"
    >
      <Button variant={variant} size={size} className={className} onClick={onClick}>
        {children}
      </Button>
    </motion.div>
  )
}
