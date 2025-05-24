
import type { Metadata } from 'next';
import { PastryShowcaseSection } from '@/components/sections/PastryShowcaseSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: "Our Delicious Pastries - Mima's Delights",
  description: "Browse Mima's Delights' wide selection of freshly baked pastries, including cakes, cookies, meat pies, and doughnuts.",
};

export default function PastriesPage() {
  return (
    <>
      <PastryShowcaseSection />
      <ContactSection />
    </>
  );
}
