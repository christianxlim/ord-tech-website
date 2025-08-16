import { cn } from "@/lib/utils"
import { Card } from "./card"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "glass" | "glow" | "elevated"
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max",
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({ 
  children, 
  className, 
  size = "md",
  variant = "default" 
}: BentoCardProps) {
  const sizeClasses = {
    sm: "md:col-span-1 lg:col-span-1",
    md: "md:col-span-1 lg:col-span-2",
    lg: "md:col-span-2 lg:col-span-2",
    xl: "md:col-span-2 lg:col-span-3",
  }

  return (
    <Card
      variant={variant}
      className={cn(
        "group hover:scale-[1.02] transition-all duration-300",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Card>
  )
} 