"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <GlassCard className="p-12 border-blue-500/30">
              <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4 font-geist">Thank You!</h2>
              <p className="text-slate-300 text-lg mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                Send Another Message
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get in Touch"
          subtitle="Ready to transform your marketing?"
          description="Let's discuss how ADmyBRAND AI Suite can help your business grow and scale."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-geist">Let's Start a Conversation</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Ready to revolutionize your marketing with AI? Our team is here to help you discover how ADmyBRAND can
                transform your campaigns and drive unprecedented growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold font-geist">Email</p>
                  <p className="text-slate-300 font-medium">hello@admybrand.ai</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold font-geist">Phone</p>
                  <p className="text-slate-300 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold font-geist">Office</p>
                  <p className="text-slate-300 font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8 border-blue-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 font-geist">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 font-medium ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 font-geist">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 font-medium ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 font-geist">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 font-medium"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 font-geist">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 min-h-[120px] font-medium resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell us about your project and how we can help..."
                />
                {errors.message && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg font-semibold"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
