"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxGrid() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ y }}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Add subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10" />
      {/* Ensure the background is tall enough to prevent blank space during parallax scroll */}
      <div className="absolute inset-0 h-[150%]" />
    </motion.div>
  )
} 