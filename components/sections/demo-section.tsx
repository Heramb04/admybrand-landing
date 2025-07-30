"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, BarChart3, Brain, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"

const demoFeatures = [
  {
    id: "content",
    icon: Brain,
    title: "AI Content Generation",
    description: "Watch AI create compelling copy in real-time",
    color: "from-cyan-500 to-cyan-600",
    videoUrl: "/placeholder.svg?height=400&width=600&text=AI+Content+Generation+Demo",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Smart Analytics",
    description: "See predictive insights and performance metrics",
    color: "from-blue-500 to-blue-600",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Smart+Analytics+Dashboard",
  },
  {
    id: "design",
    icon: Palette,
    title: "Brand Design Studio",
    description: "Generate logos and visual assets instantly",
    color: "from-indigo-500 to-indigo-600",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Brand+Design+Studio+Demo",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation Engine",
    description: "Automate workflows with intelligent triggers",
    color: "from-teal-500 to-teal-600",
    videoUrl: "/placeholder.svg?height=400&width=600&text=Automation+Workflows+Demo",
  },
]

export function DemoSection() {
  const [activeFeature, setActiveFeature] = useState("content")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(100)
  const [hasVideoError, setHasVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressInterval = useRef<NodeJS.Timeout>()

  const activeFeatureData = demoFeatures.find((f) => f.id === activeFeature)

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000) // Changed from 100 to 1000 for normal speed
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [isPlaying, duration])

  const handlePlayPause = () => {
    if (!hasVideoError && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => {
          setHasVideoError(true)
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    } else {
      // Simulate video playback for demo purposes
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoError = () => {
    setHasVideoError(true)
    setIsPlaying(false)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newProgress = (clickX / rect.width) * duration
    setProgress(newProgress)
  }

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(featureId)
    setProgress(0)
    setIsPlaying(false)
    setHasVideoError(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="See ADmyBRAND in Action"
            subtitle="Interactive product demonstration"
            description="Experience the power of AI-driven marketing tools through our interactive demo."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Feature Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {demoFeatures.map((feature) => (
              <motion.div key={feature.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <GlassCard
                  className={`p-6 cursor-pointer transition-all duration-300 border-slate-700/50 ${
                    activeFeature === feature.id ? "border-cyan-500/50 bg-cyan-500/5" : "hover:border-slate-600/50"
                  }`}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white font-geist">{feature.title}</h3>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Demo Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8 border-slate-700/50">
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden">
                {/* Video/Image Display */}
                <div className="absolute inset-0">
                  {!hasVideoError ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      poster={activeFeatureData?.videoUrl || "/placeholder.svg"}
                      onError={handleVideoError}
                      style={{ display: hasVideoError ? "none" : "block" }}
                    >
                      <source
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={activeFeatureData?.videoUrl || "/placeholder.svg"}
                      alt={activeFeatureData?.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Play/Pause Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-xl"
                        onClick={handlePlayPause}
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* Playing Animation Overlay */}
                  {isPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                    />
                  )}
                </div>

                {/* Progress Bar */}
                <div
                  className="absolute bottom-16 left-4 right-4 h-2 bg-slate-700/80 rounded-full cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    style={{ width: `${(progress / duration) * 100}%` }}
                  />
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <span className="text-sm">
                      {formatTime(progress)} / {formatTime(duration)}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Maximize className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Feature Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 font-geist">{activeFeatureData?.title}</h3>
                  <p className="text-slate-300">
                    {activeFeature === "content" &&
                      "Watch as our AI analyzes your brand voice and generates compelling copy that resonates with your audience. From headlines to full articles, see the magic happen in real-time."}
                    {activeFeature === "analytics" &&
                      "Dive deep into campaign performance with AI-powered insights. Our predictive analytics help you understand what works and optimize for better results."}
                    {activeFeature === "design" &&
                      "Create stunning visual assets that perfectly match your brand identity. Our AI design studio generates logos, banners, and graphics in seconds."}
                    {activeFeature === "automation" &&
                      "Set up intelligent workflows that run on autopilot. From social media posting to email campaigns, automate your entire marketing funnel."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
