
import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: "Contact Us - Mima's Delights",
  description: "Get in touch with Mima's Delights for inquiries, orders, or any questions you may have about our pastries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
