"use client"

import { motion } from "framer-motion"
import { Shield, FileText, TrendingUp, Cpu, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "audit",
    icon: Shield,
    title: "Audit & Assurance",
    description:
      "Comprehensive audit services that go beyond compliance to deliver actionable insights and strengthen stakeholder confidence.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    id: "tax",
    icon: FileText,
    title: "Tax & Regulatory",
    description:
      "Strategic tax planning and regulatory guidance to optimize your position while ensuring full compliance across jurisdictions.",
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-400",
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Advisory & Strategy",
    description:
      "Data-driven strategic consulting to drive growth, optimize operations, and unlock new value across your enterprise.",
    color: "from-violet-500/20 to-violet-600/20",
    iconColor: "text-violet-400",
  },
  {
    id: "digital",
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "End-to-end digital modernization including AI integration, cloud migration, and intelligent automation solutions.",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-400",
  },
  {
    id: "esg",
    icon: Leaf,
    title: "ESG & Sustainability",
    description:
      "Expert guidance on ESG strategy, sustainability reporting, and responsible business practices for long-term value creation.",
    color: "from-teal-500/20 to-teal-600/20",
    iconColor: "text-teal-400",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Comprehensive Services for Modern Enterprises
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From traditional advisory to cutting-edge digital solutions, we deliver integrated services that address the
            full spectrum of business challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <Link href={`/services#${service.id}`}>
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 cursor-pointer">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    {/* Link */}
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-foreground transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
