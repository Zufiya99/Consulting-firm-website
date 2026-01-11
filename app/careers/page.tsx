"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Users,
  Zap,
  Heart,
  Globe,
  GraduationCap,
  Coffee,
  Dumbbell,
  Plane,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const departments = ["All", "Advisory", "Digital", "Tax", "Audit", "ESG", "Operations"]

const jobs = [
  {
    id: 1,
    title: "Senior Strategy Consultant",
    department: "Advisory",
    location: "New York",
    type: "Full-time",
    level: "Senior",
    description: "Lead strategic engagements for Fortune 500 clients, driving transformation initiatives.",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "Digital",
    location: "San Francisco",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Build and deploy machine learning solutions for enterprise clients.",
  },
  {
    id: 3,
    title: "Tax Manager",
    department: "Tax",
    location: "London",
    type: "Full-time",
    level: "Manager",
    description: "Manage complex international tax projects and client relationships.",
  },
  {
    id: 4,
    title: "ESG Analyst",
    department: "ESG",
    location: "Singapore",
    type: "Full-time",
    level: "Entry-Mid",
    description: "Analyze sustainability data and support ESG reporting initiatives.",
  },
  {
    id: 5,
    title: "Audit Senior Associate",
    department: "Audit",
    location: "Dubai",
    type: "Full-time",
    level: "Mid",
    description: "Conduct financial audits for major enterprises across industries.",
  },
  {
    id: 6,
    title: "Digital Transformation Lead",
    department: "Digital",
    location: "Remote",
    type: "Full-time",
    level: "Lead",
    description: "Drive digital strategy and implementation for global clients.",
  },
  {
    id: 7,
    title: "Operations Analyst",
    department: "Operations",
    location: "Frankfurt",
    type: "Full-time",
    level: "Entry",
    description: "Support operational excellence initiatives and process optimization.",
  },
  {
    id: 8,
    title: "M&A Director",
    department: "Advisory",
    location: "Hong Kong",
    type: "Full-time",
    level: "Director",
    description: "Lead M&A transactions and due diligence for cross-border deals.",
  },
]

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", description: "Industry-leading compensation packages" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },
  { icon: GraduationCap, title: "Learning Budget", description: "$5,000 annual professional development fund" },
  { icon: Plane, title: "Flexible PTO", description: "Unlimited vacation policy with minimum requirements" },
  { icon: Coffee, title: "Remote Work", description: "Hybrid work model with flexibility" },
  { icon: Dumbbell, title: "Wellness Programs", description: "Gym memberships and mental health support" },
]

const values = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside brilliant minds in a supportive environment",
  },
  { icon: Zap, title: "High Impact Work", description: "Solve complex challenges for world-leading organizations" },
  { icon: Globe, title: "Global Opportunities", description: "Work across borders with international teams" },
]

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = activeDepartment === "All" || job.department === activeDepartment
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDepartment && matchesSearch
  })

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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Join Our Team</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Future With Us
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join a team of exceptional professionals shaping the future of enterprise advisory. We're looking for
              curious minds ready to make an impact.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="#openings">
                <Button className="bg-emerald hover:bg-emerald/90 text-background group">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="bg-transparent">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Axiom</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Why Join Our Team</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Perks & Benefits</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">We Take Care of Our People</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Open Positions</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Find Your Role</h2>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by role or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-card border-border text-foreground"
              />
            </div>
          </motion.div>

          {/* Department Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {departments.map((dept) => (
              <motion.button
                key={dept}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDepartment === dept
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className={`p-6 rounded-2xl bg-card border transition-all cursor-pointer ${
                      selectedJob === job.id ? "border-primary" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {job.department}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.level}
                          </span>
                        </div>
                      </div>
                      <Link href="/contact">
                        <Button className="bg-emerald hover:bg-emerald/90 text-background shrink-0">Apply Now</Button>
                      </Link>
                    </div>

                    <AnimatePresence>
                      {selectedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-border"
                        >
                          <p className="text-muted-foreground">{job.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredJobs.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <p className="text-muted-foreground">No positions found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setActiveDepartment("All")
                    setSearchQuery("")
                  }}
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border"
          >
            <h2 className="text-3xl font-bold text-foreground">Don't See the Right Role?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-emerald hover:bg-emerald/90 text-background">Submit Your Resume</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
