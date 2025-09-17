'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const course = searchParams.get('course')
    const subject = searchParams.get('subject')
    
    if (course && subject) {
      setFormData({
        subject: decodeURIComponent(subject),
        message: "I'm interested in registering for the Advanced FPV and Fuzing Training course (September 22-26, 2024) at Agony North Range, Colorado Springs. Please provide information about the registration process and any prerequisites.\n\nThank you."
      })
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const source = searchParams.get('source') || '';
      
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.get('firstName')} ${formData.get('lastName')}`,
          email: formData.get('email'),
          organization: formData.get('organization') || 'Not specified',
          subject: formData.get('subject'),
          message: formData.get('message'),
          source: source,
        }),
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent! ✅");
        form.reset();
        setFormData({ subject: '', message: '' });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discuss your operational requirements with our team. We specialize in delivering 
            mission-critical solutions for military and federal defense programs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Form</CardTitle>
              <CardDescription>
                Reach out for technical specifications, deployment planning, and partnership opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization/Agency
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Course Registration Inquiry - Advanced FPV Training Sept 22-26"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Please describe your operational requirements, timeline, and any specific questions about our drone systems or training programs..."
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Direct Contact Information */}
      <section className="container py-12 sm:py-16 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Direct Contact</CardTitle>
                <CardDescription>
                  For immediate assistance or urgent inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Email</h4>
                    <a 
                      href="mailto:info@ordtechnologies.com" 
                      className="text-accent hover:text-accent/80 font-medium"
                    >
                      info@ordtechnologies.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Response Time</h4>
                    <p className="text-muted-foreground text-sm">
                      We typically respond to inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Federal Contractors</CardTitle>
                <CardDescription>
                  Specialized support for defense programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">NDAA Compliant Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Technical Documentation Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Custom Configuration Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Deployment Planning Assistance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </section>
    </div>
  )
}
