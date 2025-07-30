"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "ADmyBRAND AI Suite transformed our marketing strategy. We saw a 300% increase in engagement within the first month.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The AI content generation is incredible. It saves us 20+ hours per week and the quality is consistently excellent.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Creative Studios",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Finally, a tool that understands our brand voice. The automation features have streamlined our entire workflow.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Marketing Manager",
    company: "E-commerce Plus",
    image: "/placeholder.svg?height=80&width=80",
    content: "The analytics insights are game-changing. We can now predict campaign performance with 95% accuracy.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Loved by Marketing Teams"
          subtitle="See what our customers are saying"
          description="Join thousands of marketers who have transformed their campaigns with ADmyBRAND AI Suite."
        />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            <GlassCard className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-300">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-500" : "bg-white/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
