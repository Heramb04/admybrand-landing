"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-3/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-black/20" />
    </div>
  )
}
