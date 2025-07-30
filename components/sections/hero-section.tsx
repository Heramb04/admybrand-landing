"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { CreativeCard } from "@/components/ui/creative-card"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 group hover:border-blue-400/50 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span className="text-sm text-blue-300 font-medium">AI-Powered Marketing Revolution</span>
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Main Headline with Creative Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-inter relative"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
            >
              Brand
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              with AI Intelligence
            </motion.span>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            ADmyBRAND AI Suite empowers marketers to create{" "}
            <motion.span
              className="text-blue-300 font-semibold"
              animate={{ color: ["#93c5fd", "#67e8f9", "#93c5fd"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              stunning campaigns
            </motion.span>
            , analyze performance, and scale their brand with cutting-edge artificial intelligence.
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <MagneticButton className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold group shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              className="border-blue-500/50 text-white hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold group bg-transparent backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Creative Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, value: 250, suffix: "%", label: "ROI Increase", color: "text-blue-400", delay: 0.2 },
              { icon: Zap, value: 10, suffix: "x", label: "Faster Campaigns", color: "text-cyan-400", delay: 0.4 },
              {
                icon: Sparkles,
                value: 50000,
                suffix: "+",
                label: "Happy Customers",
                color: "text-blue-300",
                delay: 0.6,
              },
            ].map((stat, index) => (
              <CreativeCard
                key={stat.label}
                hoverEffect="magnetic"
                delay={stat.delay}
                className="p-8 text-center group"
              >
                <motion.div
                  className="flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-3 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl font-bold text-white font-inter"
                  />
                </motion.div>
                <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Creative accent line */}
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: stat.delay + 0.5 }}
                />
              </CreativeCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
