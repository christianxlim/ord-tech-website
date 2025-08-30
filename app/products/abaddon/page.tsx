import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"

export default function AbaddonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
              Ukraine
            </span>
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
              Israel
            </span>
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
              Myanmar
            </span>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              Officially Approved for Operational Use
            </span>
            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
              Front-line Developed
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Abaddon FPV 7&quot; &amp; 10&quot; SUAS
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Unparalleled adaptability and resilience. Front-line development approach with 
            real-world combat experience integration from active conflict zones.
          </p>

          {/* Skeleton Product Image */}
          <div className="w-full h-80 bg-muted/20 rounded-lg flex items-center justify-center border border-border/20 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent text-4xl font-bold">FPV</span>
              </div>
              <span className="text-lg text-muted-foreground">Abaddon Product Image</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Contact for Pricing
            </Button>
            <Link
              href="#specifications"
              className={buttonVariants({ variant: "outline", size: "lg", className: "text-lg px-8" })}
            >
              View Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* Combat Heritage */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Forged in Combat</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Evolved through Ukraine&apos;s intense warfare conditions with warfighter collaboration. 
            Front-line, iterative development approach prioritizing real-world combat experience 
            and warfighter feedback.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Battle-Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Thrives in chaos of active conflict with proven battlefield effectiveness
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Warfighter Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developed through direct collaboration with front-line operators
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Front-line Assembly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rapid assembly and customization capabilities in field conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Extended Range Capability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +20km range enables deep reconnaissance and strike capabilities with enhanced situational awareness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unparalleled Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dynamic adaptation to conflict zone needs with modular design and front-line assembly capability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contested Environment Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintains uninterrupted control in contested, urban, congested, and underground environments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Superior Signal Stability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhanced signal stability compared to competitors with robust construction for challenging terrains.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hybrid Autonomy Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Human-on-the-loop engagement maintains operator accountability while reducing collateral damage risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rapid Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2-minute deployment with quick retrieval without compromising aerodynamic performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="container py-12 sm:py-16 border-t">
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
                  <span className="font-medium text-accent">+20 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Endurance:</span>
                  <span className="font-medium">25 minutes</span>
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
                <CardTitle className="text-xl">Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Autonomous navigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Terminal engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Target reacquisition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Electronic impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Command detonation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Self-destruct capability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Capabilities */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mission Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Mission Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">One-way Strike Missions</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Two-way Reconnaissance/Relay</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Surveillance Operations</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Target Acquisition</span>
                  <span className="bg-accent/10 text-accent px-3 py-2 rounded text-center">Payload Delivery</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Operational Environments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Contested environments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Urban settings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Congested areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Underground environments</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unique Advantages</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Real-World Combat Experience Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Front-line development approach with iterative design based on actual warfighter feedback 
                  and battlefield conditions, ensuring maximum operational effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Superior Range & Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +20km range provides tactical advantage for deep reconnaissance and strike capabilities, 
                  while modular design enables rapid mission-specific adaptations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Contested Environment Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintains uninterrupted control in the most challenging operational environments including 
                  contested, urban, congested, and underground settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Front-line Manufacturing Capability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unique front-line assembly capability with minimal logistical support requirements, 
                  enabling rapid deployment and customization in field conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vs Apollyon Comparison */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Abaddon vs Apollyon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Abaddon Advantages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">+20km range (vs +15km)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Resilience & adaptability focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Front-line development heritage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Superior signal stability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Contested environment mastery</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Apollyon Advantages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">30min endurance (vs 25min)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">AI autonomy focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Lower cost ($1092-$1454)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Real-time object detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Extended loitering capability</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Flexibility */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Flexible Pricing for Every Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Broad pricing range ($1793 - $22500) appeals to various military budgets while 
            maintaining high-performance without sacrificing quality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Budget-Conscious</CardTitle>
                <CardDescription>Starting at $1793</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Essential capabilities for cost-effective operations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Standard Operations</CardTitle>
                <CardDescription>Mid-range configurations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Balanced performance and features for most missions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Premium Systems</CardTitle>
                <CardDescription>Up to $22500</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maximum capabilities for critical operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 sm:py-16 border-t">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Deploy Abaddon?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our team for detailed specifications, pricing, and deployment planning 
            tailored to your operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Contact for Pricing
            </Button>
            <Link
              href="/products/apollyon"
              className={buttonVariants({ variant: "outline", size: "lg", className: "text-lg px-8" })}
            >
              Compare with Apollyon
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
