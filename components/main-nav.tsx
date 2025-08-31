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
      <Link href="/" className="flex items-center">
        <img 
          src="/logo-clean.png" 
          alt="Ordnance Technologies" 
          className="h-8 w-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      {items?.length ? (
        <nav className="hidden md:flex gap-1">
          {items?.map((item, index) => (
            <div key={index} className="relative group">
              {item.items ? (
                // Dropdown menu item
                <>
                  <button
                    className={cn(
                      "relative flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 group",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                    <Icons.chevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="glass-effect rounded-lg border border-border/40 backdrop-blur-xl p-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href || "#"}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors duration-200"
                        >
                          <div className="font-medium">{subItem.title}</div>
                          {subItem.description && (
                            <div className="text-xs text-muted-foreground/70 mt-1">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : item.href ? (
                // Regular menu item
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 group",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ) : null}
            </div>
          ))}
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
            {items.map((item, index) => (
              <div key={index}>
                {item.items ? (
                  // Mobile dropdown section
                  <div className="space-y-1">
                    <div className="px-4 py-2 text-sm font-medium text-accent">
                      {item.title}
                    </div>
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="flex items-center px-6 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg ml-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <div>
                          <div className="font-medium">{subItem.title}</div>
                          {subItem.description && (
                            <div className="text-xs text-muted-foreground/70">
                              {subItem.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : item.href ? (
                  // Regular mobile menu item
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
