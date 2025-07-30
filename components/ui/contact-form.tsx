"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassCard } from "@/components/ui/glass-card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
        <p className="text-gray-300 mb-8">
          Ready to transform your marketing with AI? Let's discuss how ADmyBRAND can help your business grow.
        </p>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Email</p>
              <p className="text-gray-300">hello@admybrand.ai</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Office</p>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <GlassCard className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Company</label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            size="lg"
          >
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </GlassCard>
    </div>
  )
}
