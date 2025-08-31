import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            FPV Drone Training Programs
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive FPV drone training from basic operations to advanced tactical missions. 
            Transform novice operators into proficient tacticians capable of executing complex combat missions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Contact for Training
            </Button>
            <Link
              href="#courses"
              className={buttonVariants({ variant: "outline", size: "lg", className: "text-lg px-8" })}
            >
              View Course Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Training Methodology</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Blended learning approach combining classroom instruction with practical field exercises
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-accent">Hands-on Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive classroom instruction combined with extensive outdoor and indoor flight training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-accent">Real-world Simulations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Realistic mission scenarios including reconnaissance, hazard avoidance, and precision targeting
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-accent">Comprehensive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete maintenance and troubleshooting training for operational readiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Target Audiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Military Units</CardTitle>
                <CardDescription>
                  Tactical operations and mission planning for military personnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Tactical FPV operations</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Mission coordination</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Combat scenarios</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Defense Contractors</CardTitle>
                <CardDescription>
                  Technical integration and system optimization training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">System integration</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Platform optimization</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Technical operations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Complete Beginners</CardTitle>
                <CardDescription>
                  Novices with no prior drone experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Basic operations</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Safety protocols</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Progressive skill building</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Mid-page CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-accent">Ready to Start Training?</h3>
            <p className="text-muted-foreground mb-6">Discuss your training needs and course selection with our experts</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-button text-lg px-8 bg-accent hover:bg-accent/90">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-accent text-accent hover:bg-accent/10">
                Download Course Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Progression Pathway */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Progression Pathway</h2>
          
          <div className="relative">
            {/* Progression Line */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between items-center">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <div className="flex-1 h-0.5 bg-accent/30 mx-4"></div>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <div className="flex-1 h-0.5 bg-accent/30 mx-4"></div>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">1</span>
                  </div>
                  <CardTitle className="text-xl">Basic Training</CardTitle>
                  <CardDescription>8 hours • OT-FPV-1</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Intensive training to equip end users with skills to confidently operate, 
                    maintain, and troubleshoot Ordnance Technologies UAS FPV drone system.
                  </p>
                  <div className="text-left space-y-2">
                    <div className="text-sm font-medium text-accent">Prerequisites:</div>
                    <div className="text-sm text-muted-foreground">None</div>
                    <div className="text-sm font-medium text-accent mt-3">Target Audience:</div>
                    <div className="text-sm text-muted-foreground">End users, beginners</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">2</span>
                  </div>
                  <CardTitle className="text-xl">Advanced Training</CardTitle>
                  <CardDescription>3 days • OT-FPV-2</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Transform complete beginners into proficient FPV drone operators 
                    ready for combat missions with simulated scenarios.
                  </p>
                  <div className="text-left space-y-2">
                    <div className="text-sm font-medium text-accent">Prerequisites:</div>
                    <div className="text-sm text-muted-foreground">None (complete beginners)</div>
                    <div className="text-sm font-medium text-accent mt-3">Target Audience:</div>
                    <div className="text-sm text-muted-foreground">Novices, no prior experience</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">3</span>
                  </div>
                  <CardTitle className="text-xl">Expert Training</CardTitle>
                  <CardDescription>5 days • OT-FPV-3</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Advanced proficiency for complex combat missions including 
                    indoor navigation and low-light operations.
                  </p>
                  <div className="text-left space-y-2">
                    <div className="text-sm font-medium text-accent">Prerequisites:</div>
                    <div className="text-sm text-muted-foreground">Basic Tactical FPV Course</div>
                    <div className="text-sm font-medium text-accent mt-3">Target Audience:</div>
                    <div className="text-sm text-muted-foreground">Basic FPV experience</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Catalog */}
      <section id="courses" className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Course Catalog</h2>
          
          <div className="space-y-8">
            {/* OT-FPV-1: Basic Fielding Course */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-accent">OT-FPV-1: Ord Tech FPV Fielding Course</CardTitle>
                    <CardDescription className="text-lg">8 hours • 4 hours classroom + 4 hours outdoor flight testing</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">End Users</span>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Beginners</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Intensive training to equip end users with skills to confidently operate, maintain, 
                  and troubleshoot Ordnance Technologies UAS FPV drone system.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Curriculum Modules:</h4>
                    <div className="space-y-3">
                      <div className="border-l-2 border-accent/30 pl-4">
                        <div className="font-medium">Inventory Session (1 hour)</div>
                        <div className="text-sm text-muted-foreground">
                          Unpack and verify drone kit, identify components, proper storage techniques
                        </div>
                      </div>
                      <div className="border-l-2 border-accent/30 pl-4">
                        <div className="font-medium">Classroom Instruction (2 hours)</div>
                        <div className="text-sm text-muted-foreground">
                          FPV drone fundamentals, anatomy, control systems, safety protocols, optimized settings for tactical use
                        </div>
                      </div>
                      <div className="border-l-2 border-accent/30 pl-4">
                        <div className="font-medium">Outdoor Flight Training (3 hours)</div>
                        <div className="text-sm text-muted-foreground">
                          Basic maneuvers (hovering, turns), advanced tactical techniques (obstacle navigation, low-altitude flight)
                        </div>
                      </div>
                      <div className="border-l-2 border-accent/30 pl-4">
                        <div className="font-medium">Maintenance and Troubleshooting (2 hours)</div>
                        <div className="text-sm text-muted-foreground">
                          Address common issues like propeller damage and system recalibration
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Required Materials:</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">FPV drone system</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Charged batteries</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Notebook</span>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-accent mb-3">Add-on Options:</h4>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <div className="font-medium text-accent">FPV Tactics and Planning</div>
                      <div className="text-sm text-muted-foreground">
                        Strategic use of FPV drones for tactical operations
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OT-FPV-1.2: Tactics and Planning Add-on */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-accent">OT-FPV-1.2: Ord Tech Tactics and Planning Course</CardTitle>
                    <CardDescription className="text-lg">Add-on to FPV Fielding Course • Interactive classroom + field exercises</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Military Units</span>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Basic Operators</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Strategic use of FPV drones for tactical operations with focus on military applications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Training Focus:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Configure drones for tactical payloads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Conduct reconnaissance with mission planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Low-visibility navigation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Execute precise target acquisition</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Realistic mission simulations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Outcomes:</h4>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-sm">
                        Plan and execute military FPV drone operations with precision, 
                        enhancing mission success and operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OT-FPV-2: Basic Flight and Tactics */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-accent">OT-FPV-2: Ord Tech Basic Flight and Tactics Course</CardTitle>
                    <CardDescription className="text-lg">3 days • Classroom + hands-on flight + simulated missions</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Complete Beginners</span>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">No Experience</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Transform complete beginners into proficient FPV drone operators ready for combat missions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Comprehensive Curriculum:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Drone setup and configuration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Understanding operational limits and capabilities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Basic and advanced flight maneuvers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Reconnaissance techniques</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Mission coordination</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Precision targeting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Capstone combat mission simulation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Training Outcomes:</h4>
                    <div className="bg-accent/10 rounded-lg p-4 mb-4">
                      <p className="text-sm">
                        Confidently set up, operate, and deploy FPV drones in high-stakes 
                        combat scenarios with precision and effectiveness.
                      </p>
                    </div>
                    
                    <h4 className="font-semibold text-accent mb-3">Materials Provided:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">FPV drone system (provided)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Notebook (bring your own)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Comfortable clothing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OT-FPV-2.1: Advanced Flight and Tactics */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-accent">OT-FPV-2.1: Ord Tech Advanced Flight and Tactics Course</CardTitle>
                    <CardDescription className="text-lg">3 days • Advanced classroom + outdoor/indoor flight + scenarios</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Basic Course Graduates</span>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">FPV Experience</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Elevate operators with foundational skills to advanced proficiency in complex combat missions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Advanced Curriculum:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Advanced drone setup and platform optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">High-level flight tactics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Hazard threat identification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Advanced mission coordination</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Precision targeting systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Indoor navigation techniques</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Low-light operations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Prerequisites:</h4>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 mb-4">
                      <div className="text-sm font-medium text-orange-400">Required:</div>
                      <div className="text-sm text-muted-foreground">
                        Basic Tactical FPV Drone Course completion
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-accent mb-3">Capstone Mission:</h4>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <div className="text-sm font-medium text-accent mb-2">Multi-phase Scenario:</div>
                      <div className="text-sm text-muted-foreground">
                        Reconnaissance → Hazard avoidance → Indoor flight → Low-light precision attack
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OT-FPV-3: Comprehensive Basic to Advanced */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-accent">OT-FPV-3: Ord Tech Basic to Advanced FPV Mission Course</CardTitle>
                    <CardDescription className="text-lg">5 days • Complete transformation program</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Novice Operators</span>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Comprehensive</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Transform novice FPV drone operators into proficient tacticians capable of executing 
                  complex combat missions in diverse, high-stakes environments.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Complete Curriculum:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Comprehensive drone setup and configuration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Platform optimization techniques</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Advanced flight tactics and maneuvers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Hazard and threat identification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Mission coordination and planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Precision targeting and engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Indoor navigation and confined spaces</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">Low-light and night operations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Training Outcomes:</h4>
                    <div className="bg-accent/10 rounded-lg p-4 mb-4">
                      <p className="text-sm">
                        Execute advanced FPV combat missions with precision and adaptability 
                        in diverse, high-stakes environments.
                      </p>
                    </div>
                    
                    <h4 className="font-semibold text-accent mb-3">Final Assessment:</h4>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="text-sm font-medium text-green-400 mb-2">Multi-stage Mission:</div>
                      <div className="text-sm text-muted-foreground">
                        Reconnaissance → Hazard avoidance → Indoor flight → Low-light attack scenario
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Mid-page CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-bold mb-3">Custom Training Program?</h3>
            <p className="text-muted-foreground mb-4">We can tailor courses to your specific operational requirements</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="premium-button bg-primary hover:bg-primary/90">
                Discuss Custom Training
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                View Standard Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Training Differentiators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Hands-on Training Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blended learning combining classroom instruction with extensive practical field exercises 
                  for real-world operational readiness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Real-world Mission Simulations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Realistic combat scenarios including reconnaissance, hazard avoidance, indoor navigation, 
                  and low-light precision operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Comprehensive Maintenance Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete maintenance and troubleshooting training ensuring operational readiness 
                  and system reliability in field conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent">Indoor & Low-light Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced training in challenging environments including confined spaces, 
                  underground operations, and night missions.
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
              <h2 className="text-4xl font-bold mb-6 text-accent">Ready to Begin Training?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact our training team to discuss course selection, scheduling, and 
                customized training programs for your operational requirements. Transform your team today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button size="lg" className="premium-button text-xl px-12 py-4 bg-accent hover:bg-accent/90 shadow-lg">
                  Contact Training Team
                </Button>
                <Link
                  href="/#products"
                  className={buttonVariants({ variant: "outline", size: "lg", className: "text-xl px-12 py-4 border-accent text-accent hover:bg-accent/10 shadow-lg" })}
                >
                  View Products
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Hands-on Training</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-world Scenarios</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Complete Beginners Welcome</span>
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
