import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center text-center gap-2 mx-auto">
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-3xl md:text-5xl lg:text-6xl font-display">
            Ordnance Technologies LLC
            </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Currently deployed in active Ukraine and Burma operations, delivering 100% reliable communications 
            in challenging urban environments regardless of terrain obstacles or interference.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#capabilities"
            className={buttonVariants()}
          >
            View Capabilities
          </Link>
          <Link
            href="#products"
            className={buttonVariants({ variant: "outline" })}
          >
            View Products
          </Link>
          </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="capabilities" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced autonomous systems delivering mission-critical reliability in contested environments
          </p>
        </div>

        {/* Anti-Helicopter Systems */}
        <div id="anti-helicopter" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Anti-Helicopter Systems</h3>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent">Enhanced Vertical Launch Drone Platform</CardTitle>
              <CardDescription>
                Enlarged and reinforced airframe based on proven vertical launch drone architecture, 
                specifically engineered for anti-helicopter operations with enhanced payload capacity and flight dynamics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Enhanced Payload</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Anti-Helo Optimized</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent">Doppler Fuzing Technology</CardTitle>
              <CardDescription>
                Advanced Doppler-based proximity fuzing system that recreates the functionality of VT (Variable Time) fuzes, 
                ensuring optimal detonation timing for maximum effectiveness against rotary-wing targets.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Proximity Detection</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">VT Fuze Recreation</span>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Advanced Communications & Deployment */}
        <div id="communications" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Advanced Communications & Deployment</h3>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent">RCWL Emplaced Devices</CardTitle>
              <CardDescription>
                Radar-based motion detection devices deployable via drone for persistent area monitoring. 
                Enables remote surveillance and early warning capabilities in contested or inaccessible terrain.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">RCWL Sensors</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent">Fiber Optic Communications</CardTitle>
              <CardDescription>
                Universal fiber-optic drone systems fully compatible with both Betaflight and ArduPilot platforms. 
                ArduPilot integration is preferred for advanced automation capabilities and seamless integration 
                with USV mother ship operations, providing enhanced mission flexibility and control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Fiber Optic</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">ArduPilot Compatible</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Operational Deployment */}
        <div className="mt-12">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Current Operational Deployment</CardTitle>
              <CardDescription>
                Fiber drones are currently deployed in active Haiti operations, successfully operating under dense 
                canopy cover surrounding gang-controlled territory to identify and map ratlines. These systems are 
                also operational in Port-au-Prince, delivering 100% reliable communications in challenging urban 
                environments regardless of terrain obstacles or interference.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Canopy Penetration</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">100% Reliable Comms</span>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
        
        {/* AI Integration & Mother Ship Systems */}
        <div id="ai-integration" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">AI Integration & Mother Ship Systems</h3>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent">Mother Shipped Drone Operations</CardTitle>
              <CardDescription>
                Magura-style USV platforms capable of deploying and recovering multiple drones for extended range operations. 
                Enables persistent surveillance and engagement capabilities beyond traditional operational limits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">USV Integration</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Pixel Lock Kamikaze Systems</CardTitle>
              <CardDescription>
                Advanced target acquisition systems utilizing precision pixel locking technology for autonomous engagement capabilities. 
                Currently developing enhanced target identification systems for UXO detection and classification using exclusively 
                3D rendered training datasets, ensuring enhanced safety and accuracy without live ordnance exposure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Pixel Lock</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Autonomous Engagement</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Target Identification Development */}
        <div className="mt-12">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Advanced Target Identification Development</CardTitle>
              <CardDescription>
                Ongoing development of cutting-edge UXO identification and classification systems utilizing advanced 
                computer vision trained exclusively on 3D rendered datasets, eliminating the need for live ordnance 
                exposure during development and training phases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">Neural Networks</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">UXO Identification</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded">3D Render Training</span>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
        
        {/* Mid-page CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-accent">Ready to Deploy Advanced Systems?</h3>
            <p className="text-muted-foreground mb-6">Contact our team to discuss your operational requirements and deployment planning</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className={buttonVariants({ size: "lg", className: "premium-button text-lg px-8 bg-accent hover:bg-accent/90" })}
              >
                View Products
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({ variant: "outline", size: "lg", className: "text-lg px-8 border-accent text-accent hover:bg-accent/10" })}
              >
                Request Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combat-proven FPV drone systems engineered for mission-critical operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Apollyon AI FPV Card */}
          <Card className="relative overflow-hidden group premium-card">
            <div className="absolute top-4 right-4 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Ukraine
                </span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Israel
                </span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Myanmar
                </span>
              </div>
            </div>
            
            {/* Skeleton Product Image */}
            <div className="w-full h-48 bg-muted/20 rounded-t-lg flex items-center justify-center border-b border-white/20 skeleton-pulse">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-accent text-2xl font-bold">AI</span>
                </div>
                <span className="text-sm text-muted-foreground">Product Image</span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl">Apollyon AI Driven FPV 7&quot; &amp; 10&quot; SUAS</CardTitle>
                <CardDescription className="text-base">
                AI-driven autonomous capabilities with real-time object detection and tracking. 
                Human-on-the-loop engagement model for ethical autonomous weapons operations.
                </CardDescription>
              </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="spec-item">
                  <span className="text-muted-foreground">Range:</span>
                  <span className="ml-2 font-medium">+15 km</span>
                </div>
                <div className="spec-item">
                  <span className="text-muted-foreground">Endurance:</span>
                  <span className="ml-2 font-medium">30 minutes</span>
                </div>
                <div className="spec-item">
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="ml-2 font-medium">1.5 kg</span>
                </div>
                <div className="spec-item">
                  <span className="text-muted-foreground">Payload:</span>
                  <span className="ml-2 font-medium">3 kg</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">AI Autonomy</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">NDAA Compliant</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Blue UAS List</span>
              </div>

              <div className="pt-4 border-t border-white/20 border-white/20">
                <Link
                  href="/products/apollyon"
                  className={buttonVariants({ className: "w-full premium-button" })}
                >
                  Contact for Pricing
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Abaddon FPV Card */}
          <Card className="relative overflow-hidden group premium-card">
            <div className="absolute top-4 right-4 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Ukraine
                </span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Israel
                </span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Myanmar
                </span>
              </div>
            </div>
            
            {/* Skeleton Product Image */}
            <div className="w-full h-48 bg-muted/20 rounded-t-lg flex items-center justify-center border-b border-white/20 skeleton-pulse">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-accent text-2xl font-bold">FPV</span>
                </div>
                <span className="text-sm text-muted-foreground">Product Image</span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl">Abaddon FPV 7&quot; &amp; 10&quot; SUAS</CardTitle>
              <CardDescription className="text-base">
                Unparalleled adaptability and resilience. Front-line development approach with 
                real-world combat experience integration from active conflict zones.
                </CardDescription>
              </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="spec-item">
                  <span className="text-muted-foreground">Range:</span>
                  <span className="ml-2 font-medium">+20 km</span>
                </div>
                <div className="spec-item">
                  <span className="text-muted-foreground">Endurance:</span>
                  <span className="ml-2 font-medium">25 minutes</span>
                </div>
                <div className="spec-item">
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="ml-2 font-medium">1.5 kg</span>
                </div>
                <div className="spec-item">
                  <span className="text-muted-foreground">Payload:</span>
                  <span className="ml-2 font-medium">3 kg</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Combat Proven</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Front-line Tested</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Adaptable</span>
              </div>

              <div className="pt-4 border-t border-white/20 border-white/20">
                <Link
                  href="/products/abaddon"
                  className={buttonVariants({ className: "w-full premium-button" })}
                >
                  Contact for Pricing
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Mid-page CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-bold mb-3">Need Custom Specifications?</h3>
            <p className="text-muted-foreground mb-4">Discuss mission-specific requirements and custom configurations</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/products/apollyon"
                className={buttonVariants({ className: "premium-button bg-primary hover:bg-primary/90" })}
              >
                Apollyon Details
              </Link>
              <Link
                href="/products/abaddon"
                className={buttonVariants({ variant: "outline", className: "border-accent text-accent hover:bg-accent/10" })}
              >
                Abaddon Details
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section */}
      <section id="training-overview" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Training Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive FPV drone training from basic operations to advanced tactical missions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Target Audiences */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Military Units</CardTitle>
              <CardDescription>
                Tactical operations and mission planning for military personnel
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Defense Contractors</CardTitle>
              <CardDescription>
                Technical integration and system optimization training
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Beginners</CardTitle>
              <CardDescription>
                Complete novices with no prior drone experience
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Course Progression */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Course Progression</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent font-bold">1</span>
                </div>
                <CardTitle className="text-lg">Basic Training</CardTitle>
                <CardDescription>8 hours • OT-FPV-1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Intensive training for end users and beginners. Classroom instruction plus outdoor flight testing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent font-bold">2</span>
                </div>
                <CardTitle className="text-lg">Advanced Training</CardTitle>
                <CardDescription>3 days • OT-FPV-2</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transform beginners into proficient operators ready for combat missions with simulated scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent font-bold">3</span>
                </div>
                <CardTitle className="text-lg">Expert Training</CardTitle>
                <CardDescription>5 days • OT-FPV-3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced proficiency for complex combat missions including indoor navigation and low-light operations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/training"
              className={buttonVariants({ size: "lg" })}
            >
              View Complete Training Catalog
            </Link>
          </div>
        </div>
        
        {/* Mid-page CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
            <h3 className="text-xl font-bold mb-3 text-accent">Start Training Your Team?</h3>
            <p className="text-muted-foreground mb-4">From complete beginners to advanced tactical operations</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/training"
                className={buttonVariants({ className: "premium-button bg-accent hover:bg-accent/90" })}
              >
                View Training Courses
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({ className: "bg-primary text-white hover:bg-primary/90 shadow-lg" })}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section id="trust" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Platform Integration & Compatibility</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Proven integration with industry-standard platforms and ongoing operational deployments
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <Card>
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-base sm:text-lg">ArduPilot Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Preferred platform for advanced automation capabilities and USV mother ship operations
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-base sm:text-lg">Betaflight Compatible</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Universal fiber-optic drone systems with full platform compatibility
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-base sm:text-lg">Active Deployments</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Currently operational in Haiti with proven performance in contested environments
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Mission Statement</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  At Ordnance Technologies, our mission is to be at the forefront of innovation and excellence in the 
                  defense sector by providing cutting-edge solutions in drone technology, kinetic operations, and 
                  asymmetric warfare. We are committed to advancing the capabilities and effectiveness of our military 
                  partners through the development and implementation of state-of-the-art unmanned systems and 
                  strategic operations that enhance tactical superiority and operational efficiency.
                </p>
                <p>
                  Our team is dedicated to pioneering advancements that address the evolving challenges of modern 
                  warfare, ensuring the safety and success of our clients in complex and dynamic environments. With 
                  integrity, precision, and an unwavering commitment to excellence, we aim to empower defense forces 
                  globally to achieve their strategic objectives and maintain peace and security.
                </p>
                <div className="mt-6 sm:mt-8 pt-4 text-center">
                  <p className="text-lg sm:text-xl font-semibold text-accent">
                    &quot;Bringing thoughts to Action&quot;
                  </p>
                </div>
          </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Enhanced Contact Section */}
      <section id="contact" className="container py-16 sm:py-24 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl p-12 border border-accent/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-accent">Partnership Brief</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                For detailed technical specifications, deployment case studies, and partnership opportunities. 
                Connect with our team to discuss mission-critical requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link
                  href="mailto:contact@ordnancetechnologies.com"
                  className={buttonVariants({ size: "lg", className: "premium-button text-xl px-12 py-4 bg-accent hover:bg-accent/90 shadow-lg" })}
                >
                  Request Technical Brief
                </Link>
                <Link
                  href="#capabilities"
                  className={buttonVariants({ variant: "outline", size: "lg", className: "text-xl px-12 py-4 border-accent text-accent hover:bg-accent/10 shadow-lg" })}
                >
                  Review Capabilities
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Combat-Proven Systems</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Active Deployments</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Comprehensive Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </section>
    </div>
  )
}