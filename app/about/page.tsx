"use client"

import { motion } from "framer-motion"
import { Users, Target, Globe, ArrowRight, Linkedin, Twitter, Building, Lightbulb, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Enterprise Clients" },
  { value: 12, suffix: "", label: "Global Offices" },
  { value: 150, suffix: "+", label: "Expert Advisors" },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, delivering exceptional value to our clients.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical principles at the core of our practice.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technologies to solve complex challenges in creative ways.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as true partners with our clients, building lasting relationships based on trust.",
  },
]

const team = [
  {
    name: "Alexandra Chen",
    role: "Managing Partner & CEO",
    image: "/professional-woman-executive.png",
    bio: "25+ years in strategic consulting",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Thompson",
    role: "Partner, Digital Transformation",
    image: "/professional-man-executive-portrait.png",
    bio: "Former CTO of Fortune 500 company",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "Partner, Tax & Regulatory",
    image: "/professional-woman-portrait.png",
    bio: "Expert in international tax law",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Park",
    role: "Partner, ESG & Sustainability",
    image: "/professional-man-portrait.png",
    bio: "Leading voice in sustainable business",
    linkedin: "#",
    twitter: "#",
  },
]

const timeline = [
  { year: "2000", event: "Founded in New York City", description: "Started with a vision to redefine advisory" },
  { year: "2008", event: "Global Expansion", description: "Opened offices in London and Singapore" },
  { year: "2015", event: "Digital Practice Launch", description: "Pioneered digital transformation services" },
  { year: "2020", event: "ESG Leadership", description: "Launched dedicated ESG advisory practice" },
  { year: "2024", event: "AI Integration", description: "Introduced AI-powered advisory solutions" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count}
      {suffix}
    </span>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <Building className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">About Axiom Advisory</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Shaping the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Enterprise Advisory
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                For over 25 years, Axiom Advisory has been at the forefront of strategic consulting, helping enterprises
                navigate complexity and achieve sustainable growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-emerald hover:bg-emerald/90 text-background group">
                    Work With Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button variant="outline" className="bg-transparent">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-border/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-8 rounded-full border border-primary/20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  >
                    <span className="text-6xl font-bold text-primary-foreground">A</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Journey</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">A Legacy of Excellence</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                    >
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">{item.event}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="hidden md:flex w-4 h-4 rounded-full bg-primary shrink-0"
                  />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">What Drives Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Leadership</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience across industries and disciplines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="p-2 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-primary/20 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm">{member.role}</p>
                <p className="mt-1 text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/careers">
              <Button variant="outline" className="bg-transparent group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Global Reach</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Offices Worldwide</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              With 12 offices across major business hubs, we're always close to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "New York",
              "London",
              "Singapore",
              "Hong Kong",
              "Tokyo",
              "Sydney",
              "Dubai",
              "Frankfurt",
              "Mumbai",
              "Sao Paulo",
              "Toronto",
              "Paris",
            ].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all cursor-pointer"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Build Something Great Together</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Our team is here to help.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald hover:bg-emerald/90 text-background group">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
