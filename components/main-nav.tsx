"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center justify-between w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 group">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icons.logo className="h-5 w-5 text-white" />
        </div>
        <span className="inline-block font-bold text-lg bg-gradient-to-r from-foreground to-green-400 bg-clip-text text-transparent">
          {siteConfig.name}
        </span>
      </Link>

      {/* Desktop Navigation */}
      {items?.length ? (
        <nav className="hidden md:flex gap-1">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "relative flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 group",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              )
          )}
        </nav>
      ) : null}

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent/10 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <div className="flex flex-col space-y-1.5">
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-all duration-300",
            isOpen && "rotate-45 translate-y-2"
          )}></span>
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-all duration-300",
            isOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-all duration-300",
            isOpen && "-rotate-45 -translate-y-2"
          )}></span>
        </div>
      </button>

      {/* Mobile Navigation Drawer */}
      {isOpen && items?.length && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-50 glass-effect border-b border-border/40 backdrop-blur-xl">
          <nav className="container py-6 flex flex-col space-y-2">
            {items.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        </div>
      )}
    </div>
  )
}
