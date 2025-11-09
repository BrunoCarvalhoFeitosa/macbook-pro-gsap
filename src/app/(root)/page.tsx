import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { HeroSection } from "@/components/root/hero-section"
import { CarouselSection } from "@/components/root/carousel-section"
import { TridimensionalSection } from "@/components/root/tridimensional-section"
import { ExploreDetailsSection } from "@/components/root/explore-details-section"
import { ChipsetSection } from "@/components/root/chipset-section"
import { ShowcaseSection } from "@/components/root/showcase-section"
import { ArtificialIntelligenceSection } from "@/components/root/artificial-intelligence-section"
import { CameraSection } from "@/components/root/camera-section"
import { BatterySection } from "@/components/root/battery-section"

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <TridimensionalSection />
      <ExploreDetailsSection />
      <ChipsetSection />
      <ShowcaseSection />
      <ArtificialIntelligenceSection />
      <CameraSection />
      <BatterySection />
    </main>
  )
}

export default HomePage
