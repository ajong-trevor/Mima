
import { HeroSection } from '@/components/sections/HeroSection';
import { SamplePastriesSection } from '@/components/sections/SamplePastriesSection';
import { FullWidthImageSection } from '@/components/sections/FullWidthImageSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SamplePastriesSection />
      <FullWidthImageSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
