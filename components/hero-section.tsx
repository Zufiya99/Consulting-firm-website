"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px]" />

        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 group cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.4)" }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-emerald"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Future-Ready Advisory</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              Where Strategy Meets{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-emerald to-accent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundSize: "200% 200%",
                }}
                whileHover={{ scale: 1.05 }}
              >
                Technology
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              We help enterprises navigate complexity, improve profitability, ensure compliance, and adopt modern
              digital practices. Insight-driven solutions for the challenges of tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-emerald hover:bg-emerald/90 text-background font-medium group w-full sm:w-auto relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    />
                    <span className="relative z-10 flex items-center">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/insights">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary group bg-transparent w-full sm:w-auto relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Insights
                      <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative h-150"
          >
            <div className="relative w-full h-full">
              {/* Animated Gradient Mesh Blob */}
              <motion.div
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-linear-to-br from-primary/40 via-accent/30 to-emerald/20 blur-3xl"
              />
              
              {/* Secondary Blob */}
              <motion.div
                animate={{
                  x: [0, -40, 0],
                  y: [0, -50, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-linear-to-br from-accent/30 via-primary/20 to-emerald/15 blur-3xl"
              />

              {/* Floating Geometric Shapes */}
              {[
                { top: "15%", left: "20%", size: 80, delay: 0, gradient: "from-primary/20 to-primary/10", border: "border-primary/30" },
                { top: "25%", right: "15%", size: 60, delay: 0.3, gradient: "from-accent/20 to-accent/10", border: "border-accent/30" },
                { top: "60%", left: "10%", size: 100, delay: 0.6, gradient: "from-emerald/20 to-emerald/10", border: "border-emerald/30" },
                { top: "70%", right: "20%", size: 70, delay: 0.9, gradient: "from-primary/20 to-accent/10", border: "border-primary/30" },
              ].map((shape, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    opacity: { duration: 3 + i, repeat: Number.POSITIVE_INFINITY },
                    scale: { duration: 4 + i * 0.5, repeat: Number.POSITIVE_INFINITY },
                    rotate: { duration: 15 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    y: { duration: 5 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    delay: shape.delay,
                  }}
                  className={`absolute rounded-2xl bg-linear-to-br ${shape.gradient} border ${shape.border} backdrop-blur-sm`}
                  style={{
                    top: shape.top,
                    left: shape.left || undefined,
                    right: shape.right || undefined,
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                  }}
                  whileHover={{ scale: 1.3, opacity: 0.8 }}
                />
              ))}

              {/* Animated Grid Pattern */}
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[40px_40px]"
              />

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0.5, 1],
                      scale: [0, 1, 0.8, 1],
                      x: [0, x * 0.3, 0],
                      y: [0, y * 0.3, 0],
                    }}
                    transition={{
                      duration: 4 + i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-emerald/60"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 rounded-full bg-emerald"
                    />
                  </motion.div>
                );
              })}

              {/* Central Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-linear-to-r from-primary/20 via-emerald/20 to-accent/20 blur-2xl"
              />

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="20%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="30%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="70%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="75%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
