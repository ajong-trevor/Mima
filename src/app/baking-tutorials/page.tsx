
import type { Metadata } from 'next';
import { BakingTutorialsSection } from '@/components/sections/BakingTutorialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: "Baking Tutorials - Mima's Delights",
  description: "Learn how to bake delicious pastries with Mima's easy-to-follow video tutorials.",
};

export default function BakingTutorialsPage() {
  return (
    <>
      <BakingTutorialsSection />
      <ContactSection />
    </>
  );
}
