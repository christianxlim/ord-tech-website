import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { CheckCircle, Shield, Zap, Target, Globe, Cpu } from "lucide-react"

export default function IndexPage() {
  return (
    <>
      {/* Hero Section - Modernized */}
      <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="z-10 max-w-6xl glass-effect rounded-3xl p-8 md:p-12">
          <div className="animate-float">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
              Pioneering the Future of
              <br />
              <span className="text-green-400 drop-shadow-lg">Autonomous Defense</span>
            </h1>
          </div>
          
          <p className="max-w-[800px] mx-auto text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
            <span className="text-green-400 font-mono">[Advanced drone technology]</span> for unparalleled security and tactical advantage. 
            We work with the federal government to supply next-generation unmanned solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg glow-green">
              Our Mission
            </Button>
            <Button variant="outline" size="lg" className="border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 text-lg">
              Explore Tech
            </Button>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Partners Section - Modernized */}
      <section id="partners" className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 glass-effect rounded-3xl py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Trusted by Defense Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {["US Army", "US Navy", "US Air Force", "Special Operations", "Homeland Security"].map((partner, index) => (
              <div key={partner} className="glass-effect rounded-lg p-6 hover:glow-green transition-all duration-300 group">
                <span className="text-muted-foreground group-hover:text-accent font-semibold text-sm sm:text-base transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Bento Layout */}
      <section id="mission" className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 glass-effect rounded-3xl py-16">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            Ordnance is dedicated to designing and developing advanced AI-powered autonomous systems for defense and security applications.
          </p>

          <BentoGrid className="max-w-7xl mx-auto">
            <BentoCard size="lg" variant="glass">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Advanced AI Core</CardTitle>
                <CardDescription className="text-base">
                  Our systems are powered by a proprietary AI engine that enables true autonomy in complex environments.
                </CardDescription>
              </CardHeader>
            </BentoCard>

            <BentoCard size="md" variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Rugged & Reliable</CardTitle>
                <CardDescription>
                  Built to MIL-SPEC standards for operation in the harshest environments.
                </CardDescription>
              </CardHeader>
            </BentoCard>

            <BentoCard size="md" variant="glow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Mission-Adaptable</CardTitle>
                <CardDescription>
                  Modular platforms that can be configured for diverse operational needs.
                </CardDescription>
              </CardHeader>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>
      
      {/* Products Section - Enhanced Bento */}
      <section id="products" className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 glass-effect rounded-3xl py-16">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-green-400 bg-clip-text text-transparent">
            Autonomous Systems Portfolio
          </h2>
          
          <BentoGrid className="max-w-7xl mx-auto">
            <BentoCard size="lg" variant="glass">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">Operational</span>
                </div>
                <CardTitle className="text-3xl">Recon Drone</CardTitle>
                <CardDescription className="text-lg">AI-Powered Aerial Surveillance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  High-endurance UAV for long-range intelligence, surveillance, and reconnaissance missions with advanced AI target recognition.
                </p>
              </CardContent>
            </BentoCard>

            <BentoCard size="md" variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">In Development</span>
                </div>
                <CardTitle>Tactical Ground Bot</CardTitle>
                <CardDescription>Unmanned Ground Vehicle (UGV)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Versatile UGV for route clearance, EOD, and remote threat assessment.
                </p>
              </CardContent>
            </BentoCard>

            <BentoCard size="md" variant="glow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-medium">Field Testing</span>
                </div>
                <CardTitle>Maritime Patrol System</CardTitle>
                <CardDescription>Autonomous Surface Vessel (ASV)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ASV for persistent maritime surveillance and port security.
                </p>
              </CardContent>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section id="contact" className="w-full py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl glass-effect rounded-3xl py-16">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
            Technical Innovation
          </h2>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Our commitment to research and development ensures that our partners always have the technological edge. We are constantly pushing the boundaries of what's possible in autonomous systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-lg glow-green">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="border-accent/30 text-accent hover:bg-accent/10 font-bold px-10 py-6 text-lg">
              View Capabilities
            </Button>
          </div>
        </div>
      </section>
      
      {/* Final CTA - Enhanced */}
      <section className="w-full py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 glass-effect rounded-3xl py-12 border-t border-green-500/20">
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            Ready to Enhance Your Defense Capabilities?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us to learn more about our technology and how it can be integrated into your operations.
          </p>
          <Button size="lg" variant="outline" className="border-green-400/30 text-green-400 hover:bg-green-400/10 font-semibold px-8 py-4">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
