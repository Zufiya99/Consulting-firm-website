"use client"

import { motion } from "framer-motion"
import { Lock, Users, LineChart, Cloud } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Secure Client Portal",
    description: "Enterprise-grade security with end-to-end encryption for all communications and documents.",
  },
  {
    icon: Users,
    title: "Digital Collaboration",
    description: "Real-time collaboration tools that keep teams aligned and projects on track.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "Interactive dashboards and analytics to track progress and measure outcomes.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Platform",
    description: "Access your engagement anytime, anywhere with our modern cloud infrastructure.",
  },
]

export function ClientExperienceSection() {
  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Client Experience</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Modern Tools for Modern Business</h2>
            <p className="mt-4 text-muted-foreground">
              We invest in technology that enhances every client interaction, making collaboration seamless and insights
              accessible.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <img
                src="/modern-professional-dashboard-interface-dark-theme.jpg"
                alt="Client Portal Dashboard"
                className="w-full h-full object-cover mix-blend-luminosity opacity-60"
              />

              {/* Floating cards */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-8 left-8 p-4 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Project Progress</p>
                    <p className="font-semibold text-foreground">87% Complete</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 right-8 p-4 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Security Status</p>
                    <p className="font-semibold text-foreground">256-bit Encrypted</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
