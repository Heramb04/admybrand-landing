"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Marketing: 2025 Trends and Predictions",
    excerpt:
      "Discover the latest AI marketing trends that will shape the industry in 2025, from personalization to predictive analytics.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
    featured: true,
  },
  {
    id: 2,
    title: "How to Increase ROI by 300% with AI-Powered Content Generation",
    excerpt:
      "Learn the proven strategies that top brands use to dramatically improve their marketing ROI using AI content tools.",
    author: "Michael Chen",
    date: "2024-12-12",
    readTime: "6 min read",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
    featured: false,
  },
  {
    id: 3,
    title: "Building Brand Consistency Across All Channels with AI",
    excerpt:
      "Maintain your brand voice and visual identity across every touchpoint using intelligent automation and AI tools.",
    author: "Emily Rodriguez",
    date: "2024-12-10",
    readTime: "5 min read",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
    featured: false,
  },
  {
    id: 4,
    title: "The Complete Guide to Marketing Automation in 2025",
    excerpt:
      "Everything you need to know about setting up intelligent marketing workflows that convert leads into customers.",
    author: "David Kim",
    date: "2024-12-08",
    readTime: "12 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&crop=center",
    featured: false,
  },
  {
    id: 5,
    title: "Measuring Marketing Success: KPIs That Actually Matter",
    excerpt:
      "Cut through the noise and focus on the metrics that truly indicate marketing success and business growth.",
    author: "Lisa Wang",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
    featured: false,
  },
  {
    id: 6,
    title: "Creative AI: Generating Visual Content That Converts",
    excerpt:
      "Master the art of AI-generated visuals and learn how to create compelling graphics that drive engagement.",
    author: "Alex Thompson",
    date: "2024-12-03",
    readTime: "9 min read",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&crop=center",
    featured: false,
  },
]

const resources = [
  {
    icon: BookOpen,
    title: "Marketing Playbooks",
    description: "Step-by-step guides for successful campaigns",
    count: "25+ guides",
    color: "from-cyan-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&crop=center",
  },
  {
    icon: TrendingUp,
    title: "Industry Reports",
    description: "Latest trends and market insights",
    count: "12 reports",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
  },
  {
    icon: Lightbulb,
    title: "Best Practices",
    description: "Proven strategies from top marketers",
    count: "50+ tips",
    color: "from-indigo-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
  },
]

export function BlogSection() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
            title="Resources & Insights"
            subtitle="Stay ahead with expert knowledge"
            description="Discover the latest marketing strategies, AI insights, and industry best practices from our team of experts."
          />
        </motion.div>

        {/* Resources Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16"
        >
          {resources.map((resource, index) => (
            <motion.div key={resource.title} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
              <GlassCard className="p-6 text-center border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${resource.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-inter">{resource.title}</h3>
                  <p className="text-slate-300 mb-4">{resource.description}</p>
                  <Badge variant="default" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                    {resource.count}
                  </Badge>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <GlassCard className="overflow-hidden border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="success" size="sm">
                      Featured
                    </Badge>
                    <Badge variant="default" size="sm">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-inter">{featuredPost.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span>{featuredPost.author}</span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.slice(0, 6).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="overflow-hidden border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 h-full">
                <div className="aspect-video">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="default" size="sm">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-slate-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 font-inter line-clamp-2">{post.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <div>{post.author}</div>
                      <div>{new Date(post.date).toLocaleDateString()}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 group"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-slate-600 text-white hover:bg-white/10 px-8 py-4 font-semibold bg-transparent"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
