"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Reduce parallax effect on mobile for better performance
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const effectiveSpeed = isMobile ? speed * 0.3 : speed

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * effectiveSpeed])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface HackerCardProps {
  children: React.ReactNode
  className?: string
}

export function HackerCard({ children, className = "" }: HackerCardProps) {
  return (
    <motion.div
      className={`relative border border-green-400/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden ${className}`}
      whileHover={{
        borderColor: "rgba(0, 255, 0, 0.4)",
        boxShadow: "0 0 20px rgba(0, 255, 0, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-green-400/40" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-green-400/40" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-green-400/40" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green-400/40" />
    </motion.div>
  )
} 