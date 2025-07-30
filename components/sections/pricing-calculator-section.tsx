"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Slider } from "@/components/ui/slider"

interface CalculatorInputs {
  teamSize: number
  monthlyContent: number
  campaigns: number
  currentROI: number
}

export function PricingCalculatorSection() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 5,
    monthlyContent: 50,
    campaigns: 10,
    currentROI: 200,
  })

  const calculateSavings = () => {
    const baseCost = inputs.teamSize * 5000 // $5k per team member annually
    const contentCost = inputs.monthlyContent * 100 * 12 // $100 per content piece annually
    const campaignCost = inputs.campaigns * 500 * 12 // $500 per campaign annually
    const totalCurrentCost = baseCost + contentCost + campaignCost

    const aiSuiteCost = 79 * 12 * Math.ceil(inputs.teamSize / 5) // Professional plan
    const timeSaved = inputs.teamSize * 20 * 52 * 50 // 20 hours/week saved per person at $50/hour
    const roiImprovement = totalCurrentCost * (inputs.currentROI / 100) * 0.5 // 50% ROI improvement

    return {
      currentCost: totalCurrentCost,
      aiSuiteCost,
      timeSaved,
      roiImprovement,
      totalSavings: timeSaved + roiImprovement - aiSuiteCost,
    }
  }

  const results = calculateSavings()

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="ROI Calculator"
            subtitle="Calculate your potential savings"
            description="See how much time and money you could save with ADmyBRAND AI Suite."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 border-slate-700/50">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-geist">Your Current Setup</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-white font-semibold mb-4">
                    Team Size: <span className="text-cyan-400">{inputs.teamSize} people</span>
                  </label>
                  <Slider
                    value={[inputs.teamSize]}
                    onValueChange={(value) => setInputs({ ...inputs, teamSize: value[0] })}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    Monthly Content Pieces: <span className="text-cyan-400">{inputs.monthlyContent}</span>
                  </label>
                  <Slider
                    value={[inputs.monthlyContent]}
                    onValueChange={(value) => setInputs({ ...inputs, monthlyContent: value[0] })}
                    max={500}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    Monthly Campaigns: <span className="text-cyan-400">{inputs.campaigns}</span>
                  </label>
                  <Slider
                    value={[inputs.campaigns]}
                    onValueChange={(value) => setInputs({ ...inputs, campaigns: value[0] })}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    Current ROI: <span className="text-cyan-400">{inputs.currentROI}%</span>
                  </label>
                  <Slider
                    value={[inputs.currentROI]}
                    onValueChange={(value) => setInputs({ ...inputs, currentROI: value[0] })}
                    max={1000}
                    min={50}
                    step={25}
                    className="w-full"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard className="p-8 border-slate-700/50">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-geist">Your Potential Savings</h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20"
                >
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-white font-medium">Annual Savings</span>
                  </div>
                  <span className="text-2xl font-bold text-green-400">${results.totalSavings.toLocaleString()}</span>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-cyan-500/10 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-slate-300 text-sm">Time Saved</span>
                    </div>
                    <span className="text-xl font-bold text-white">${results.timeSaved.toLocaleString()}</span>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-blue-500/10 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-slate-300 text-sm">ROI Boost</span>
                    </div>
                    <span className="text-xl font-bold text-white">${results.roiImprovement.toLocaleString()}</span>
                  </motion.div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between text-slate-300 mb-2">
                    <span>Current Annual Cost</span>
                    <span>${results.currentCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 mb-4">
                    <span>ADmyBRAND AI Suite Cost</span>
                    <span>${results.aiSuiteCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Net Savings</span>
                    <span className="text-green-400">${results.totalSavings.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg font-semibold"
            >
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
