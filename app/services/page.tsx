"use client"

import { motion } from "framer-motion"
import {
  Shield,
  FileText,
  TrendingUp,
  Cpu,
  Leaf,
  ArrowRight,
  CheckCircle,
  Users,
  BarChart,
  Lock,
  Globe,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const services = [
  {
    id: "audit",
    icon: Shield,
    title: "Audit & Assurance",
    subtitle: "Beyond Compliance",
    description:
      "Comprehensive audit services that go beyond compliance to deliver actionable insights and strengthen stakeholder confidence.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    features: [
      "Financial Statement Audits",
      "Internal Audit Services",
      "SOC Reporting",
      "Risk Assessment",
      "Compliance Audits",
      "Fraud Investigation",
    ],
  },
  {
    id: "tax",
    icon: FileText,
    title: "Tax & Regulatory",
    subtitle: "Strategic Optimization",
    description:
      "Strategic tax planning and regulatory guidance to optimize your position while ensuring full compliance across jurisdictions.",
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    features: [
      "Corporate Tax Planning",
      "Transfer Pricing",
      "M&A Tax Advisory",
      "International Tax",
      "Indirect Tax Services",
      "Tax Dispute Resolution",
    ],
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Advisory & Strategy",
    subtitle: "Growth Catalyst",
    description:
      "Data-driven strategic consulting to drive growth, optimize operations, and unlock new value across your enterprise.",
    color: "from-violet-500/20 to-violet-600/20",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    features: [
      "Corporate Strategy",
      "M&A Advisory",
      "Performance Improvement",
      "Market Entry Strategy",
      "Business Restructuring",
      "Due Diligence",
    ],
  },
  {
    id: "digital",
    icon: Cpu,
    title: "Digital Transformation",
    subtitle: "Future-Ready",
    description:
      "End-to-end digital modernization including AI integration, cloud migration, and intelligent automation solutions.",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    features: [
      "AI & Machine Learning",
      "Cloud Migration",
      "Process Automation",
      "Data Analytics",
      "Cybersecurity",
      "Digital Strategy",
    ],
  },
  {
    id: "esg",
    icon: Leaf,
    title: "ESG & Sustainability",
    subtitle: "Responsible Growth",
    description:
      "Expert guidance on ESG strategy, sustainability reporting, and responsible business practices for long-term value creation.",
    color: "from-teal-500/20 to-teal-600/20",
    iconColor: "text-teal-400",
    borderColor: "border-teal-500/30",
    features: [
      "ESG Strategy Development",
      "Sustainability Reporting",
      "Carbon Footprint Analysis",
      "Social Impact Assessment",
      "Governance Advisory",
      "Green Finance",
    ],
  },
]

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "150+ advisors with deep industry expertise",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "12 offices across major business hubs",
  },
  {
    icon: BarChart,
    title: "Proven Results",
    description: "500+ successful enterprise engagements",
  },
  {
    icon: Lock,
    title: "Trusted Partner",
    description: "25+ years of building lasting relationships",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Comprehensive Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Services That Drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Real Results
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From audit and tax to digital transformation and ESG, we offer integrated services tailored to your unique
              business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className={`relative p-8 rounded-3xl bg-gradient-to-br ${service.color} border ${service.borderColor}`}
                  >
                    <div className="absolute inset-0 bg-card/50 rounded-3xl backdrop-blur-sm" />
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6"
                      >
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </motion.div>

                      <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                      <h2 className="mt-2 text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>

                      <div className="mt-8 grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      <Link href="/contact">
                        <Button className="mt-8 bg-emerald hover:bg-emerald/90 text-background group">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative aspect-square max-w-md mx-auto"
                  >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-64 h-64 rounded-full border border-border/50"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute w-48 h-48 rounded-full border border-primary/30"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                        className={`absolute w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                      >
                        <service.icon className={`w-12 h-12 ${service.iconColor}`} />
                      </motion.div>
                    </div>

                    {/* Floating badges */}
                    {[
                      { label: "Expert Team", top: "10%", left: "10%" },
                      { label: "24/7 Support", top: "20%", right: "5%" },
                      { label: "Proven Results", bottom: "20%", left: "5%" },
                    ].map((badge, idx) => (
                      <motion.div
                        key={badge.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground"
                        style={badge}
                      >
                        {badge.label}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Axiom</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We combine deep expertise with innovative approaches to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald hover:bg-emerald/90 text-background group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/insights">
                <Button size="lg" variant="outline" className="bg-transparent">
                  Explore Our Insights
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
