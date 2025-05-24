
import { tutorials } from '@/lib/data';
import { TutorialCard } from '@/components/shared/TutorialCard';
import { Youtube } from 'lucide-react';

export function BakingTutorialsSection() {
  return (
    <section id="baking-tutorials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Youtube className="h-10 w-10 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Learn to Bake with Mima</h2>
          </div>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
            Follow along with our easy video tutorials and bake your favorite pastries at home!
          </p>
        </div>

        {tutorials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-foreground/70 py-8">
            No tutorials available at the moment. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
