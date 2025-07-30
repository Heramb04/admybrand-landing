"use client"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { PricingToggle } from "@/components/ui/pricing-toggle"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "AI Content Generation (1,000 words/month)",
      "Basic Analytics Dashboard",
      "5 Brand Templates",
      "Email Support",
      "1 Team Member",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing marketing teams",
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "AI Content Generation (10,000 words/month)",
      "Advanced Analytics & Insights",
      "Unlimited Brand Templates",
      "Priority Support",
      "5 Team Members",
      "Automation Workflows",
      "Brand Protection Monitoring",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      "Unlimited AI Content Generation",
      "Custom Analytics & Reporting",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Unlimited Team Members",
      "Advanced Automation",
      "API Access",
      "Custom Integrations",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your business"
          description="Start free and scale as you grow. No hidden fees, no surprises."
        />

        <div className="flex justify-center mb-12">
          <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <GlassCard
                className={`p-8 relative transition-all duration-300 border-slate-700/50 hover:border-blue-500/30 h-full ${
                  plan.popular ? "ring-2 ring-blue-500/50 scale-105 shadow-xl shadow-blue-500/10" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2 font-inter"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    {plan.name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 mb-6 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.15 }}
                    viewport={{ once: true }}
                  >
                    {plan.description}
                  </motion.p>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      key={isYearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold text-white font-inter"
                    >
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                    <span className="text-gray-300 font-medium">/{isYearly ? "year" : "month"}</span>
                  </motion.div>

                  {isYearly && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="text-white text-sm font-semibold bg-gray-800 px-3 py-1 rounded-full inline-block"
                    >
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice}
                    </motion.div>
                  )}
                </div>

                <motion.ul
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.08 + 0.25 }}
                  viewport={{ once: true }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.08 + 0.3 + featureIndex * 0.03,
                      }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 + 0.35 }}
                  viewport={{ once: true }}
                >
                  <Button
                    className={`w-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-blue-500/10 hover:bg-blue-500/20 text-white border border-blue-500/30 hover:border-blue-500/50"
                    }`}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
