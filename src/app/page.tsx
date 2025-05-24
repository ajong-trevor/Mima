
import { HeroSection } from '@/components/sections/HeroSection';
import { PastryShowcaseSection } from '@/components/sections/PastryShowcaseSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { AICustomerSupportSection } from '@/components/sections/AICustomerSupportSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PastryShowcaseSection />
      <ReviewsSection />
      <AICustomerSupportSection />
      <ContactSection />
    </>
  );
}
