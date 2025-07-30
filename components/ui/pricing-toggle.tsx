"use client"

import { motion } from "framer-motion"

interface PricingToggleProps {
  isYearly: boolean
  onToggle: (isYearly: boolean) => void
}

export function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="relative flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-blue-500/20">
      {/* Animated Background Slider */}
      <motion.div
        className="absolute top-1 bottom-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
        initial={false}
        animate={{
          left: isYearly ? "calc(50% - 4px)" : "4px",
          width: isYearly ? "calc(50% - 4px)" : "calc(50% - 4px)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      <button
        className={`relative z-10 px-6 py-2 rounded-full transition-all duration-300 font-semibold ${
          !isYearly ? "text-white" : "text-slate-300 hover:text-white"
        }`}
        onClick={() => onToggle(false)}
      >
        Monthly
      </button>
      <button
        className={`relative z-10 px-6 py-2 rounded-full transition-all duration-300 font-semibold flex items-center ${
          isYearly ? "text-white" : "text-slate-300 hover:text-white"
        }`}
        onClick={() => onToggle(true)}
      >
        Yearly
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="ml-2 text-xs bg-slate-900 text-cyan-400 px-2 py-1 rounded-full"
        >
          Save 20%
        </motion.span>
      </button>
    </div>
  )
}
