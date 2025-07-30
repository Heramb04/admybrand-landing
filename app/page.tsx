import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DemoSection } from "@/components/sections/demo-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { PricingCalculatorSection } from "@/components/sections/pricing-calculator-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogSection } from "@/components/sections/blog-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/navigation/navbar"
import { CreativeBackground } from "@/components/ui/creative-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 relative">
      <CreativeBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <DemoSection />
          <PricingSection />
          <PricingCalculatorSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
