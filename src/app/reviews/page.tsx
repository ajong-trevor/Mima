
import type { Metadata } from 'next';
import { ReviewsSection } from '@/components/sections/ReviewsSection';

export const metadata: Metadata = {
  title: "Customer Reviews - Mima's Delights",
  description: "See what our customers are saying about Mima's Delights. Read reviews for our cakes, cookies, and other pastries.",
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsSection />
    </>
  );
}
