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
            Currently deployed in operations across various areas, delivering 100% reliable communications 
            in challenging urban environments regardless of terrain obstacles or interference.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#products"
            className={buttonVariants()}
          >
            View Products
          </Link>
          <Link
            href="#training-overview"
            className={buttonVariants({ variant: "outline" })}
          >
            View Training
          </Link>
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
                  Deployed in Various Areas
                </span>
              </div>
          </div>
            
            {/* Apollyon Product Image */}
            <div className="w-full h-48 overflow-hidden rounded-t-lg border-b border-white/20">
              <img 
                src="/drones/apollyon-drop-shadow.png" 
                alt="Apollyon AI Driven FPV Drone System" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
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
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Combat Proven</span>
              </div>

              <div className="pt-4 border-t border-white/20 border-white/20">
                <Link
                  href="/products/apollyon"
                  className={buttonVariants({ className: "w-full premium-button" })}
                >
                  View Apollyon Details
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Abaddon FPV Card */}
          <Card className="relative overflow-hidden group premium-card">
            <div className="absolute top-4 right-4 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium tactical-badge">
                  Deployed in Various Areas
                </span>
              </div>
            </div>
            
            {/* Abaddon Product Image */}
            <div className="w-full h-48 overflow-hidden rounded-t-lg border-b border-white/20">
              <img 
                src="/drones/abaddon-drop-shadow.png" 
                alt="Abaddon FPV Drone System" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
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
                  View Abaddon Details
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
      
      {/* Featured Course Section */}
      <section id="featured-course" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent">Upcoming Training Course</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Limited seats available for our next scheduled advanced training session
            </p>
          </div>
          
          <Card className="relative overflow-hidden border-accent/30 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
            {/* Badges */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30">
                  Only 7 Seats
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                  Open Registration
                </span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl font-bold text-accent">
                Advanced FPV and Fuzing Training
              </CardTitle>
              <CardDescription className="text-lg">
                September 22-26, 2024 • Agony North Range, Colorado Springs
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Details */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">5</div>
                      <div className="text-sm text-muted-foreground">Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">7</div>
                      <div className="text-sm text-muted-foreground">Seats Left</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">$2,857</div>
                      <div className="text-sm text-muted-foreground">Per Person</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">CO</div>
                      <div className="text-sm text-muted-foreground">Location</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Intensive advanced training program combining FPV operations with tactical applications. 
                    Transform your skills with hands-on training at our Colorado Springs facility.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Advanced Level</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Tactical Operations</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Limited Enrollment</span>
                  </div>
                </div>

                {/* Action Column */}
                <div className="flex flex-col justify-center space-y-4">
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20 text-center">
                    <div className="text-sm font-medium text-accent mb-2">Registration Required</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Contact our team to secure your seat
                    </div>
                    <Link
                      href="/contact?course=advanced-fpv-sept-2024&subject=Course%20Registration%20Inquiry%20-%20Advanced%20FPV%20Training%20Sept%2022-26"
                      className={buttonVariants({ 
                        size: "lg", 
                        className: "w-full premium-button bg-accent hover:bg-accent/90" 
                      })}
                    >
                      Contact to Register
                    </Link>
                  </div>
                  
                  <div className="text-center">
                    <Link
                      href="/training"
                      className={buttonVariants({ 
                        variant: "outline",
                        className: "w-full border-accent text-accent hover:bg-accent/10" 
                      })}
                    >
                      View All Training
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                <CardDescription>5 days • OT-FPV-2</CardDescription>
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
                <CardDescription>8 days • OT-FPV-3</CardDescription>
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
                href="/contact"
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
                Currently operational in various areas with proven performance in contested environments
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Teaser Section */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Ordnance Technologies, our mission is to be at the forefront of innovation and excellence in the 
                defense sector by providing cutting-edge solutions in drone technology and asymmetric warfare.
              </p>
              <p className="text-lg font-semibold text-accent mb-6">
                &quot;Bringing thoughts to Action&quot;
              </p>
              <Link
                href="/mission"
                className={buttonVariants({ variant: "outline" })}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Contact Teaser Section */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discuss your operational requirements with our team. We specialize in delivering 
                mission-critical solutions for military and federal defense programs.
              </p>
              <div className="space-y-4 mb-6">
                <a href="mailto:info@ordtechnologies.com" className="text-accent hover:text-accent/80 font-medium text-lg block">
                  info@ordtechnologies.com
                </a>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className={buttonVariants()}
                  >
                    Contact Form
                  </Link>
                  <Link
                    href="mailto:info@ordtechnologies.com"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Direct Email
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </section>
    </div>
  )
}