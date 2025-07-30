"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced natural language processing to understand your brand voice and create content that matches your style. Simply provide a brief description or keywords, and our AI will generate high-quality copy, headlines, and social media content tailored to your needs.",
  },
  {
    question: "Can I customize the AI to match my brand voice?",
    answer:
      "ADmyBRAND AI Suite learns from your existing content and brand guidelines to maintain consistency across all generated materials. You can train the AI with your preferred tone, style, and messaging to ensure authentic brand representation.",
  },
  {
    question: "What kind of analytics and insights do you provide?",
    answer:
      "We offer comprehensive analytics including campaign performance metrics, audience insights, engagement rates, ROI tracking, and predictive analytics. Our AI analyzes patterns to provide actionable recommendations for optimizing your marketing strategies.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore all our AI tools, create content, and see the results before committing to a paid plan.",
  },
  {
    question: "How secure is my data and content?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, secure data centers, and comply with GDPR, CCPA, and other privacy regulations. Your content and data are never shared with third parties and remain completely confidential.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer:
      "Yes! We offer integrations with popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, LinkedIn, and many more. Our API also allows for custom integrations with your existing workflow.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know"
          description="Can't find the answer you're looking for? Contact our support team."
        />

        <div className="max-w-3xl mx-auto mt-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
