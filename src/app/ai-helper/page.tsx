
import type { Metadata } from 'next';
import { AICustomerSupportSection } from '@/components/sections/AICustomerSupportSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: "AI Pastry Helper - Mima's Delights",
  description: "Ask Mima's AI assistant for creative suggestions and answers to your pastry-related questions.",
};

export default function AIHelperPage() {
  return (
    <>
      <AICustomerSupportSection />
      <ContactSection />
    </>
  );
}
