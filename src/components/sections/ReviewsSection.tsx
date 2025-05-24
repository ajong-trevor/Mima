
import { reviews } from '@/lib/data';
import { ReviewCard } from '@/components/shared/ReviewCard';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">What Our Customers Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Hear from those who have tasted the delight!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
