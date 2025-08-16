import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* Fixed background video - Vimeo */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Direct Vimeo embed - extra oversized for mobile coverage */}
            <iframe
              src="https://player.vimeo.com/video/1110449400?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
              style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '300vw',
                height: '300vh',
                minWidth: '300vw',
                minHeight: '300vh',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                pointerEvents: 'none',
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Background Video"
            />
            {/* Fallback background - changed to black */}
            <div className="absolute inset-0 bg-black" style={{ zIndex: -1 }} />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }} />
          </div>
          
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
