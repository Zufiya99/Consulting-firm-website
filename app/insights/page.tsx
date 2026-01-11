"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ArrowRight, Search, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const categories = ["All", "AI & Technology", "ESG", "Strategy", "Compliance", "Digital", "Leadership"]

const allInsights = [
  {
    id: "ai-enterprise-operations",
    category: "AI & Technology",
    title: "How Generative AI is Reshaping Enterprise Operations in 2026",
    excerpt:
      "Explore the transformative impact of AI on business processes and strategic decision-making. Learn how leading enterprises are leveraging AI to drive efficiency and innovation.",
    readTime: "8 min read",
    date: "Jan 8, 2026",
    author: "Marcus Thompson",
    image: "/futuristic-ai-technology-abstract-visualization.jpg",
    featured: true,
  },
  {
    id: "esg-reporting-standards",
    category: "ESG",
    title: "The New ESG Reporting Standards: What Enterprises Need to Know",
    excerpt:
      "A comprehensive guide to navigating the evolving landscape of sustainability disclosures and regulatory requirements.",
    readTime: "6 min read",
    date: "Jan 5, 2026",
    author: "David Park",
    image: "/sustainable-green-business-abstract.jpg",
    featured: true,
  },
  {
    id: "resilient-supply-chains",
    category: "Strategy",
    title: "Building Resilient Supply Chains in an Uncertain World",
    excerpt:
      "Strategies for creating adaptable, risk-aware supply chain networks that can withstand global disruptions.",
    readTime: "5 min read",
    date: "Jan 3, 2026",
    author: "Alexandra Chen",
    image: "/global-supply-chain-network.jpg",
    featured: false,
  },
  {
    id: "cross-border-tax",
    category: "Compliance",
    title: "Navigating Cross-Border Tax Regulations: A 2026 Update",
    excerpt: "Key changes in international tax law and their implications for global enterprises.",
    readTime: "7 min read",
    date: "Dec 28, 2025",
    author: "Sarah Mitchell",
    image: "/global-finance-regulations.jpg",
    featured: false,
  },
  {
    id: "digital-transformation-roadmap",
    category: "Digital",
    title: "The Executive's Digital Transformation Roadmap",
    excerpt: "A step-by-step guide for C-suite leaders embarking on digital transformation initiatives.",
    readTime: "10 min read",
    date: "Dec 20, 2025",
    author: "Marcus Thompson",
    image: "/digital-transformation-technology-abstract.jpg",
    featured: false,
  },
  {
    id: "leadership-remote-era",
    category: "Leadership",
    title: "Leading Teams in the Hybrid Work Era",
    excerpt: "Best practices for maintaining culture, productivity, and engagement in distributed teams.",
    readTime: "6 min read",
    date: "Dec 15, 2025",
    author: "Alexandra Chen",
    image: "/business-leadership-meeting-abstract.jpg",
    featured: false,
  },
  {
    id: "ai-audit-automation",
    category: "AI & Technology",
    title: "AI-Powered Audit: The Future of Assurance",
    excerpt: "How artificial intelligence is revolutionizing audit processes and improving accuracy.",
    readTime: "8 min read",
    date: "Dec 10, 2025",
    author: "Sarah Mitchell",
    image: "/ai-audit-technology-abstract.jpg",
    featured: false,
  },
  {
    id: "sustainable-investment",
    category: "ESG",
    title: "The Rise of Sustainable Investment Strategies",
    excerpt: "Understanding ESG-focused investing and its impact on corporate strategy.",
    readTime: "7 min read",
    date: "Dec 5, 2025",
    author: "David Park",
    image: "/sustainable-investment-green-finance.jpg",
    featured: false,
  },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInsights = allInsights.filter((insight) => {
    const matchesCategory = activeCategory === "All" || insight.category === activeCategory
    const matchesSearch =
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredInsights = filteredInsights.filter((i) => i.featured)
  const regularInsights = filteredInsights.filter((i) => !i.featured)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Thought Leadership</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Perspectives
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Expert analysis and thought leadership on the trends shaping the future of business.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-card border-border text-foreground"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Insights */}
      {featuredInsights.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {featuredInsights.map((insight, index) => (
                  <motion.div
                    key={insight.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/insights/${insight.id}`}>
                      <motion.article whileHover={{ y: -8 }} className="group cursor-pointer h-full">
                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            src={insight.image}
                            alt={insight.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                              {insight.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {insight.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{insight.author}</span>
                          <span>•</span>
                          <span>{insight.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {insight.readTime}
                          </span>
                        </div>

                        <p className="text-muted-foreground line-clamp-2">{insight.excerpt}</p>
                      </motion.article>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* All Insights Grid */}
      <section className="py-12 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">All Insights</h2>
            <span className="text-muted-foreground text-sm">{filteredInsights.length} articles</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {regularInsights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/insights/${insight.id}`}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      className="group cursor-pointer bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all h-full"
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                            {insight.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{insight.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {insight.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {insight.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{insight.excerpt}</p>

                        <div className="mt-4 flex items-center text-primary text-sm font-medium">
                          Read more
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredInsights.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-muted-foreground">No insights found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border"
          >
            <h2 className="text-3xl font-bold text-foreground">Stay Informed</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights, trends, and thought leadership delivered to your
              inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-background border-border" />
              <Button className="bg-emerald hover:bg-emerald/90 text-background">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
