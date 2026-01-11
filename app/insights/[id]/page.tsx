"use client"

import { motion } from "framer-motion"
import { Clock, ArrowLeft, Share2, Linkedin, Twitter, LinkIcon, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useParams } from "next/navigation"

const insightsData: Record<
  string,
  {
    category: string
    title: string
    excerpt: string
    content: string[]
    readTime: string
    date: string
    author: string
    authorRole: string
    authorImage: string
    image: string
  }
> = {
  "ai-enterprise-operations": {
    category: "AI & Technology",
    title: "How Generative AI is Reshaping Enterprise Operations in 2026",
    excerpt:
      "Explore the transformative impact of AI on business processes and strategic decision-making. Learn how leading enterprises are leveraging AI to drive efficiency and innovation.",
    content: [
      "The enterprise landscape is undergoing a fundamental transformation as generative AI technologies mature and find practical applications across every industry vertical. From automating complex document processing to enabling natural language interfaces for data analysis, AI is no longer a futuristic concept but a present-day operational necessity.",
      "Our research across 200+ enterprise implementations reveals that organizations adopting AI-first strategies are seeing 40-60% improvements in operational efficiency, with the most significant gains in areas like customer service, financial analysis, and supply chain optimization.",
      "However, successful AI implementation requires more than technology adoption. It demands a comprehensive approach that addresses data quality, workforce training, ethical considerations, and integration with existing systems. The enterprises achieving the best results are those treating AI as a strategic capability rather than a point solution.",
      "Key success factors include executive sponsorship, clear use case prioritization, robust data governance, and a culture that embraces experimentation. Organizations should start with high-impact, low-complexity use cases to build momentum and demonstrate value before tackling more ambitious projects.",
      "Looking ahead, we expect AI to become even more deeply embedded in enterprise operations, with multimodal AI enabling new capabilities in areas like visual inspection, voice interfaces, and real-time decision support. The companies that invest now in building AI capabilities will have a significant competitive advantage in the years to come.",
    ],
    readTime: "8 min read",
    date: "Jan 8, 2026",
    author: "Marcus Thompson",
    authorRole: "Partner, Digital Transformation",
    authorImage: "/professional-man-executive-portrait.png",
    image: "/futuristic-ai-technology-abstract-visualization.jpg",
  },
  "esg-reporting-standards": {
    category: "ESG",
    title: "The New ESG Reporting Standards: What Enterprises Need to Know",
    excerpt:
      "A comprehensive guide to navigating the evolving landscape of sustainability disclosures and regulatory requirements.",
    content: [
      "The global regulatory landscape for ESG reporting is undergoing rapid evolution, with new standards and requirements emerging across major jurisdictions. Understanding these changes is critical for enterprises seeking to maintain compliance while building sustainable business practices.",
      "The convergence of ISSB standards, SEC climate disclosure rules, and EU CSRD requirements creates both challenges and opportunities. While compliance complexity has increased, the harmonization of frameworks offers the potential for more streamlined reporting processes.",
      "Our analysis indicates that leading companies are moving beyond compliance to use ESG reporting as a strategic tool for stakeholder engagement, risk management, and value creation. They're investing in robust data collection systems, cross-functional governance structures, and third-party assurance.",
      "Key areas requiring attention include Scope 3 emissions measurement, biodiversity impact assessment, and social metrics around workforce and supply chain. Companies should also prepare for increased scrutiny around climate transition plans and net-zero commitments.",
      "The enterprises that embrace ESG reporting as an opportunity for transformation rather than a compliance burden will be best positioned to build trust with investors, customers, and regulators while driving long-term value creation.",
    ],
    readTime: "6 min read",
    date: "Jan 5, 2026",
    author: "David Park",
    authorRole: "Partner, ESG & Sustainability",
    authorImage: "/professional-man-portrait.png",
    image: "/sustainable-green-business-abstract.jpg",
  },
}

const defaultInsight = {
  category: "Insights",
  title: "Article Not Found",
  excerpt: "The requested article could not be found.",
  content: ["Please check the URL or browse our other insights."],
  readTime: "1 min read",
  date: "Jan 1, 2026",
  author: "StratEdge Team",
  authorRole: "StratEdge",
  authorImage: "/professional-portrait.png",
  image: "/business-consulting-abstract.jpg",
}

export default function InsightDetailPage() {
  const params = useParams()
  const id = params.id as string
  const insight = insightsData[id] || defaultInsight

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = insight.title

    const shareUrls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      copy: url,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      alert("Link copied to clipboard!")
    } else {
      window.open(shareUrls[platform], "_blank")
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/insights">
              <motion.span
                whileHover={{ x: -4 }}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </motion.span>
            </Link>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="text-sm text-primary font-medium">{insight.category}</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              {insight.title}
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">{insight.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={insight.authorImage || "/placeholder.svg"}
                  alt={insight.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{insight.author}</p>
                  <p className="text-sm text-muted-foreground">{insight.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{insight.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {insight.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={insight.image || "/placeholder.svg"}
              alt={insight.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {insight.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this article
              </span>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleShare("linkedin")}
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleShare("twitter")}
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleShare("copy")}
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                >
                  <LinkIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground">Explore More Insights</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Discover more expert perspectives on the trends shaping the future of business.
            </p>
            <div className="mt-8">
              <Link href="/insights">
                <Button className="bg-emerald hover:bg-emerald/90 text-background">Browse All Articles</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
