import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";
import { SolutionsSection } from "./SolutionsSection";
import { MascotGuideSection } from "./MascotGuideSection";
import { CatlBannerSection } from "./CatlBannerSection";
import { WhyNesSection } from "./WhyNesSection";
import { PartnersSection } from "./PartnersSection";
import { BlogPreviewSection } from "./BlogPreviewSection";
import { FinalCtaSection } from "./FinalCtaSection";

/** Composes home sections in spec order — single import for the page route. */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <MascotGuideSection />
      <CatlBannerSection />
      <WhyNesSection />
      <PartnersSection />
      <BlogPreviewSection />
      <FinalCtaSection />
    </>
  );
}
