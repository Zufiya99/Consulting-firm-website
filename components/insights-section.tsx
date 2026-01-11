"use client"

import { motion } from "framer-motion"
import { Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const insights = [
  {
    id: "ai-enterprise-operations",
    category: "AI & Technology",
    title: "How Generative AI is Reshaping Enterprise Operations in 2026",
    excerpt: "Explore the transformative impact of AI on business processes and strategic decision-making.",
    readTime: "8 min read",
    image: "/futuristic-ai-technology-abstract-visualization.jpg",
  },
  {
    id: "esg-reporting-standards",
    category: "ESG",
    title: "The New ESG Reporting Standards: What Enterprises Need to Know",
    excerpt: "A comprehensive guide to navigating the evolving landscape of sustainability disclosures.",
    readTime: "6 min read",
    image: "/sustainable-green-business-abstract.jpg",
  },
  {
    id: "resilient-supply-chains",
    category: "Strategy",
    title: "Building Resilient Supply Chains in an Uncertain World",
    excerpt: "Strategies for creating adaptable, risk-aware supply chain networks.",
    readTime: "5 min read",
    image: "/global-supply-chain-network.jpg",
  },
  {
    id: "cross-border-tax",
    category: "Compliance",
    title: "Navigating Cross-Border Tax Regulations: A 2026 Update",
    excerpt: "Key changes in international tax law and their implications for global enterprises.",
    readTime: "7 min read",
    image: "/global-finance-regulations.jpg",
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 relative bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Thought Leadership</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Latest Insights</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Expert perspectives on the trends and challenges shaping the future of business.
            </p>
          </div>
          <Link href="/insights">
            <motion.span
              whileHover={{ x: 4 }}
              className="mt-6 md:mt-0 inline-flex items-center text-primary font-medium hover:text-foreground transition-colors cursor-pointer"
            >
              View all insights
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <Link key={insight.id} href={`/insights/${insight.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium"
                  >
                    {insight.category}
                  </motion.span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {insight.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">{insight.excerpt}</p>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
