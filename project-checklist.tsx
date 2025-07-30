"use client"

import { Check, X, Clock } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

interface ChecklistItem {
  category: string
  item: string
  status: "completed" | "partial" | "missing"
  priority: "high" | "medium" | "low"
  notes?: string
}

const checklist: ChecklistItem[] = [
  // Landing Page Sections
  {
    category: "Landing Page Sections",
    item: "Hero Section - Compelling headline, subtext, CTA, hero image/video",
    status: "completed",
    priority: "high",
    notes: "✅ Headline, subtext, CTAs, animated counters, floating elements",
  },
  {
    category: "Landing Page Sections",
    item: "Features Section - 6+ features with icons and descriptions",
    status: "completed",
    priority: "high",
    notes: "✅ 6 features with icons, descriptions, hover effects",
  },
  {
    category: "Landing Page Sections",
    item: "Pricing Cards - 3 tiers with feature comparisons",
    status: "completed",
    priority: "high",
    notes: "✅ 3 tiers, monthly/yearly toggle, popular badge",
  },
  {
    category: "Landing Page Sections",
    item: "Testimonials Carousel - Customer reviews with photos",
    status: "completed",
    priority: "high",
    notes: "✅ Auto-rotating carousel, navigation, customer data",
  },
  {
    category: "Landing Page Sections",
    item: "FAQ Section - Collapsible questions",
    status: "completed",
    priority: "high",
    notes: "✅ 6 FAQs with smooth collapse animations",
  },
  {
    category: "Landing Page Sections",
    item: "Footer - Links, social media, contact info",
    status: "completed",
    priority: "high",
    notes: "✅ Complete footer with all sections and social links",
  },

  // UI/UX Requirements
  {
    category: "UI/UX Requirements",
    item: "2025 Design Trends - Glassmorphism, subtle animations, modern typography",
    status: "completed",
    priority: "high",
    notes: "✅ Glassmorphism throughout, modern gradients, animations",
  },
  {
    category: "UI/UX Requirements",
    item: "Stunning Visual Design - Professional, premium feel that converts",
    status: "completed",
    priority: "high",
    notes: "✅ Purple-pink gradient theme, glass effects, premium feel",
  },
  {
    category: "UI/UX Requirements",
    item: "Perfect Typography - Clear hierarchy, readable fonts",
    status: "completed",
    priority: "high",
    notes: "✅ Clear hierarchy, proper font weights and sizes",
  },
  {
    category: "UI/UX Requirements",
    item: "Smooth Scrolling Animations - Elements animate in on scroll",
    status: "partial",
    priority: "medium",
    notes: "⚠️ Basic animations present, needs scroll-triggered animations",
  },
  {
    category: "UI/UX Requirements",
    item: "Mobile-First Responsive - Flawless on all devices",
    status: "completed",
    priority: "high",
    notes: "✅ Responsive grid, mobile menu, breakpoint handling",
  },

  // Technical Implementation
  {
    category: "Technical Implementation",
    item: "Next.js 14+ with App Router and TypeScript",
    status: "completed",
    priority: "high",
    notes: "✅ Using Next.js App Router with TypeScript",
  },
  {
    category: "Technical Implementation",
    item: "Component Library - Build 8+ reusable components",
    status: "completed",
    priority: "high",
    notes: "✅ 8+ components: GlassCard, Modal, ContactForm, etc.",
  },
  {
    category: "Technical Implementation",
    item: "Modern Styling - Tailwind CSS or styled-components",
    status: "completed",
    priority: "high",
    notes: "✅ Tailwind CSS with custom utilities and animations",
  },
  {
    category: "Technical Implementation",
    item: "Form Handling - Contact form with validation",
    status: "partial",
    priority: "medium",
    notes: "⚠️ Form UI complete, needs validation logic and submission",
  },
  {
    category: "Technical Implementation",
    item: "Performance Optimized - Fast loading, image optimization",
    status: "completed",
    priority: "high",
    notes: "✅ Optimized images, efficient components, minimal bundle",
  },
  {
    category: "Technical Implementation",
    item: "Component Reusability - Smart component architecture",
    status: "completed",
    priority: "high",
    notes: "✅ Modular components with proper props and composition",
  },

  // Bonus Features
  {
    category: "Bonus Features",
    item: "Interactive Pricing Calculator",
    status: "missing",
    priority: "medium",
    notes: "❌ Not implemented - would calculate ROI based on inputs",
  },
  {
    category: "Bonus Features",
    item: "Demo Video/Animation",
    status: "partial",
    priority: "low",
    notes: "⚠️ Placeholder present, needs actual video/animation",
  },
  {
    category: "Bonus Features",
    item: "Blog/Resources Section",
    status: "missing",
    priority: "low",
    notes: "❌ Not implemented - would show articles and resources",
  },
  {
    category: "Bonus Features",
    item: "Advanced Animations (Framer Motion/GSAP)",
    status: "partial",
    priority: "low",
    notes: "⚠️ CSS animations present, could enhance with Framer Motion",
  },

  // Additional Missing Items
  {
    category: "Missing Enhancements",
    item: "Scroll-triggered animations with Intersection Observer",
    status: "missing",
    priority: "medium",
    notes: "❌ Elements should animate in as they enter viewport",
  },
  {
    category: "Missing Enhancements",
    item: "Form validation and submission handling",
    status: "missing",
    priority: "medium",
    notes: "❌ Contact form needs proper validation and API integration",
  },
  {
    category: "Missing Enhancements",
    item: "Loading states and error handling",
    status: "partial",
    priority: "medium",
    notes: "⚠️ LoadingSpinner component exists but not integrated",
  },
  {
    category: "Missing Enhancements",
    item: "SEO optimization (meta tags, structured data)",
    status: "missing",
    priority: "medium",
    notes: "❌ Needs proper meta tags, Open Graph, structured data",
  },
  {
    category: "Missing Enhancements",
    item: "Accessibility improvements (focus management, ARIA)",
    status: "partial",
    priority: "high",
    notes: "⚠️ Basic accessibility present, needs comprehensive audit",
  },
]

export default function ProjectChecklist() {
  const getStatusIcon = (status: ChecklistItem["status"]) => {
    switch (status) {
      case "completed":
        return <Check className="w-5 h-5 text-green-400" />
      case "partial":
        return <Clock className="w-5 h-5 text-yellow-400" />
      case "missing":
        return <X className="w-5 h-5 text-red-400" />
    }
  }

  const getStatusBadge = (status: ChecklistItem["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="success" size="sm">
            Completed
          </Badge>
        )
      case "partial":
        return (
          <Badge variant="warning" size="sm">
            Partial
          </Badge>
        )
      case "missing":
        return (
          <Badge variant="error" size="sm">
            Missing
          </Badge>
        )
    }
  }

  const getPriorityBadge = (priority: ChecklistItem["priority"]) => {
    const variant = priority === "high" ? "error" : priority === "medium" ? "warning" : "default"
    return (
      <Badge variant={variant} size="sm">
        {priority.toUpperCase()}
      </Badge>
    )
  }

  const groupedChecklist = checklist.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, ChecklistItem[]>,
  )

  const stats = {
    total: checklist.length,
    completed: checklist.filter((item) => item.status === "completed").length,
    partial: checklist.filter((item) => item.status === "partial").length,
    missing: checklist.filter((item) => item.status === "missing").length,
  }

  const completionPercentage = Math.round((stats.completed / stats.total) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ADmyBRAND AI Suite - Project Checklist</h1>
          <p className="text-xl text-gray-300 mb-8">Comprehensive status of all requirements and features</p>

          {/* Progress Overview */}
          <GlassCard className="p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">{stats.total}</div>
                <div className="text-gray-300 text-sm">Total Items</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
                <div className="text-gray-300 text-sm">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">{stats.partial}</div>
                <div className="text-gray-300 text-sm">Partial</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400">{stats.missing}</div>
                <div className="text-gray-300 text-sm">Missing</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Overall Progress</span>
                <span>{completionPercentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Checklist by Category */}
        <div className="space-y-8">
          {Object.entries(groupedChecklist).map(([category, items]) => (
            <GlassCard key={category} className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                {category}
                <span className="ml-4 text-sm text-gray-300">
                  ({items.filter((item) => item.status === "completed").length}/{items.length} completed)
                </span>
              </h2>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                    <div className="flex-shrink-0 mt-1">{getStatusIcon(item.status)}</div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-medium leading-tight">{item.item}</h3>
                        <div className="flex space-x-2 ml-4">
                          {getStatusBadge(item.status)}
                          {getPriorityBadge(item.priority)}
                        </div>
                      </div>

                      {item.notes && <p className="text-gray-300 text-sm leading-relaxed">{item.notes}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Next Steps */}
        <GlassCard className="p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">🚀 Recommended Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">High Priority</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Implement scroll-triggered animations</li>
                <li>• Add form validation and submission</li>
                <li>• Comprehensive accessibility audit</li>
                <li>• SEO optimization and meta tags</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Medium Priority</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Interactive pricing calculator</li>
                <li>• Loading states integration</li>
                <li>• Error handling improvements</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
