"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent bg-[size:100%_100%]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our expertise can help you navigate complexity, drive growth, and build for the future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-background font-medium group px-8 w-full sm:w-auto"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:bg-foreground/5 bg-transparent w-full sm:w-auto"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">No commitment required. We'll respond within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
