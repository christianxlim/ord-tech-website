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
          <div className="fixed inset-0 -z-10">
            {/* Vimeo background video */}
            <iframe
              src={`https://player.vimeo.com/video/${siteConfig.vimeoVideoId}?autoplay=1&loop=1&muted=1&background=1`}
              className="w-full h-full object-cover"
              style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw', // 16:9 aspect ratio
                minHeight: '100vh',
                minWidth: '177.77vh', // 16:9 aspect ratio
                transform: 'translate(-50%, -50%)',
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            {/* Fallback background for when video is loading/unavailable */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            {/* Overlay to maintain contrast */}
            <div className="absolute inset-0 bg-black/20" />
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
