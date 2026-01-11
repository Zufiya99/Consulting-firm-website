"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, Lightbulb, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: Search,
    title: "Understand",
    description: "Deep-dive analysis of your business context, challenges, and strategic objectives.",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "Data-driven assessment to identify opportunities, risks, and optimization pathways.",
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    description: "Develop tailored solutions aligned with your goals and market dynamics.",
  },
  {
    icon: Rocket,
    title: "Transform",
    description: "Execute with precision and measure impact to ensure sustainable results.",
  },
]

export function ApproachSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
            A Proven Approach to Transformation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our methodology combines deep industry expertise with innovative thinking to deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative text-center group cursor-pointer"
              >
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-10"
                >
                  {index + 1}
                </motion.div>

                <div className="pt-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
