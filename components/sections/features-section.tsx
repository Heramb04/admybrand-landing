"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Palette, Zap, Shield, Users } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { CreativeCard } from "@/components/ui/creative-card"
import { SectionDivider } from "@/components/ui/section-divider"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, headlines, and social media content with our advanced AI engine.",
    color: "from-blue-400 to-blue-600",
    pattern: "brain",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Get deep insights into campaign performance with AI-powered analytics and predictions.",
    color: "from-cyan-400 to-cyan-600",
    pattern: "chart",
  },
  {
    icon: Palette,
    title: "Brand Design Studio",
    description: "Generate logos, banners, and visual assets that perfectly match your brand identity.",
    color: "from-blue-500 to-cyan-500",
    pattern: "palette",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Automate your marketing workflows and scale your campaigns effortlessly.",
    color: "from-cyan-500 to-blue-500",
    pattern: "zap",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across all digital channels.",
    color: "from-blue-600 to-cyan-600",
    pattern: "shield",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using our collaborative workspace and tools.",
    color: "from-cyan-600 to-blue-600",
    pattern: "users",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <SectionDivider variant="wave" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Powerful Features"
            subtitle="Everything you need to build and scale your brand"
            description="Our AI-powered suite provides all the tools modern marketers need to create, analyze, and optimize their campaigns."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <CreativeCard
              key={feature.title}
              hoverEffect="tilt"
              delay={index * 0.1}
              className="p-8 group h-full relative overflow-hidden"
            >
              {/* Creative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className={`w-full h-full bg-gradient-to-br ${feature.color} rounded-full blur-2xl`} />
              </div>

              <motion.div
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}
                >
                  <feature.icon className="w-8 h-8 text-white" />

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-4 font-inter group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Creative accent */}
                <motion.div
                  className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                />
              </motion.div>
            </CreativeCard>
          ))}
        </div>
      </div>

      {/* SectionDivider variant="dots" is removed */}
    </section>
  )
}
