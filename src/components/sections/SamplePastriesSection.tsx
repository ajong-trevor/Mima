
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PastryCard } from '@/components/shared/PastryCard';
import { pastries } from '@/lib/data';
import type { Pastry } from '@/types';

const SAMPLE_COUNT = 4;

export function SamplePastriesSection() {
  const samplePastries: Pastry[] = pastries.slice(0, SAMPLE_COUNT);

  return (
    <section id="sample-pastries" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Taste Our Favorites
          </h2>
          <Button asChild variant="outline" size="icon" className="border-primary text-primary hover:bg-accent/50">
            <Link href="/pastries" aria-label="View All Pastries">
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">View All Pastries</span>
            </Link>
          </Button>
        </div>

        {samplePastries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {samplePastries.map((pastry) => (
              <PastryCard key={pastry.id} pastry={pastry} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-foreground/70 py-8">
            No sample pastries to display at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
