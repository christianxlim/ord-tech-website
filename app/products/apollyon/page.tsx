"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react"

export default function ApollyonPage() {
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
              Deployed in Various Areas
            </span>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              Approved for Operational Use
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Apollyon AI Driven FPV 7&quot; &amp; 10&quot; SUAS
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            AI-driven autonomous capabilities with real-time object detection and tracking. 
            Human-on-the-loop engagement model for ethical autonomous weapons operations.
          </p>

          {/* Apollyon Hero Image */}
          <div 
            className="w-full h-80 overflow-hidden rounded-lg border border-white/20 mb-8 bg-card cursor-pointer hover:border-accent/50 transition-colors"
            onClick={() => setIsImageOpen(true)}
          >
            <img 
              src="/drones/apollyon-drop-shadow.png" 
              alt="Apollyon AI Driven FPV 7&quot; &amp; 10&quot; SUAS" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?source=apollyon-page&product=apollyon&subject=Apollyon%20Pricing%20Inquiry"
              className={buttonVariants({ size: "lg", className: "text-lg px-8" })}
            >
              Contact for Pricing
            </Link>
            <Link
              href="#specifications"
              className={buttonVariants({ variant: "outline", size: "lg", className: "text-lg px-8" })}
            >
              View Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI-Driven Autonomous Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI processes vast data in real-time with minimal human input, enabling semi-autonomous operation with human oversight.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-Time Object Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced computer vision for tracking, terminal guidance, autonomous navigation, and target reacquisition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Human-on-the-Loop Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Combines AI efficiency with human judgment for ethically sensitive operations and enhanced control.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Extended Endurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  30-minute flight time supports extended surveillance and engagement operations with loitering capability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Universal Payload Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modular design supports reconnaissance, explosive delivery, electronic warfare, and mission-specific adaptations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rapid Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2-minute deployment time enables swift responses in high-threat zones and tactical operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Performance Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Range:</span>
                  <span className="font-medium">+15 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Endurance:</span>
                  <span className="font-medium">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="font-medium">1.5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payload Capacity:</span>
                  <span className="font-medium">3 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deployment Time:</span>
                  <span className="font-medium">2 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Variants:</span>
                  <span className="font-medium">7&quot; &amp; 10&quot;</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">AI Functions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Real-time object detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Terminal guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Autonomous navigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Target reacquisition</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Mid-page CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">Interested in Apollyon Specifications?</h3>
              <p className="text-muted-foreground mb-6">Get detailed technical documentation and pricing information</p>
              <Link
                href="/contact?source=apollyon-page&product=apollyon&subject=Apollyon%20Technical%20Documentation%20Request"
                className={buttonVariants({ size: "lg", className: "premium-button text-lg px-8 bg-accent hover:bg-accent/90" })}
              >
                Request Technical Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Capabilities */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mission Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Mission Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Reconnaissance</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Surveillance</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Target Acquisition</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Relay Missions</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Strike Operations</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Two-way Operations</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Mission Cycle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Find", "Fix", "Track", "Target", "Engage"].map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payload Options */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Payload Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Electronic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Precision electronic warfare capabilities for disrupting enemy systems and communications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Command Detonation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remote-controlled detonation systems for precise timing and tactical advantage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Self-Destruct</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Autonomous self-destruct capability for mission security and asset protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dropped Payloads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Precision payload delivery systems for reconnaissance and tactical deployment.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Mid-page CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold mb-3">Custom Payload Configuration?</h3>
              <p className="text-muted-foreground mb-4">Discuss mission-specific payload requirements with our team</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact?source=apollyon-page&product=apollyon&subject=Apollyon%20Engineering%20Team%20Contact"
                  className={buttonVariants({ className: "premium-button bg-primary hover:bg-primary/90" })}
                >
                  Contact Engineering
                </Link>
                <Link
                  href="/#products"
                  className={buttonVariants({ variant: "outline", className: "border-accent text-accent hover:bg-accent/10" })}
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">NDAA Compliant</CardTitle>
                <CardDescription>
                  Many components on Blue UAS list ensuring compliance with defense procurement standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">NDAA-compliant components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Combat-proven systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Vetted systems interoperability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Security Features</CardTitle>
                <CardDescription>
                  Non-proprietary systems for enhanced security and operational flexibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Non-proprietary systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Enhanced security protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Military standards alignment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unique Advantages</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">AI-Driven Semi-Autonomous Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  First-person view design with AI integration for semi-autonomous combat operations, 
                  combining AI efficiency with human judgment for ethically sensitive operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Extended Loitering Capability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  30-minute endurance supports extended surveillance and engagement operations, 
                  providing tactical advantage in prolonged missions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Cost-Effective Premium Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium AI-driven drone at competitive pricing ($1092 - $1454), 
                  delivering advanced features without compromising operational capability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Combat-Forged Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                                  Forged and refined in active conflict zone conditions, ensuring real-world 
                battlefield effectiveness and operational reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="container py-16 sm:py-24 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl p-12 border border-accent/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-accent">Ready to Deploy Apollyon?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact our team for detailed specifications, pricing, and deployment planning. 
                Get mission-ready with proven AI-driven FPV technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link
                  href="/contact?source=apollyon-page&product=apollyon&subject=Apollyon%20Pricing%20and%20Deployment%20Inquiry"
                  className={buttonVariants({ size: "lg", className: "premium-button text-xl px-12 py-4 bg-accent hover:bg-accent/90 shadow-lg" })}
                >
                  Contact for Pricing
                </Link>
                <Link
                  href="/products/abaddon"
                  className={buttonVariants({ variant: "outline", size: "lg", className: "text-xl px-12 py-4 border-accent text-accent hover:bg-accent/10 shadow-lg" })}
                >
                  Compare with Abaddon
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Combat-Proven</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>NDAA Compliant</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>2-Min Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </section>

      {/* Image Modal */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative max-w-6xl max-h-full">
            <img 
              src="/drones/apollyon-drop-shadow.png" 
              alt="Apollyon AI Driven FPV 7&quot; &amp; 10&quot; SUAS - Full Size" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={() => setIsImageOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
