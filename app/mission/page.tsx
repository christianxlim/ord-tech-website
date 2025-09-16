import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Mission Statement</h1>
        </div>
      </section>

      {/* Mission Content */}
      <section className="container py-12 sm:py-16">
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

      {/* Call to Action */}
      <section className="container py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-muted-foreground mb-8">
            Discover how our mission-driven approach delivers results for defense operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#products"
              className={buttonVariants({ size: "lg" })}
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </section>
    </div>
  )
}
