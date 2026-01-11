import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { InsightsSection } from "@/components/insights-section"
import { ApproachSection } from "@/components/approach-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <InsightsSection />
      <ApproachSection />
      <CTASection />
      <Footer />
    </main>
  )
}
