
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-accent/50 via-background to-background">
      <div className="absolute inset-0 opacity-20">
         {/* Decorative background image or pattern can go here */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
          Welcome to Mima&apos;s Delights
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
          Experience the taste of homemade happiness with our freshly baked pastries, crafted with love and the finest ingredients.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#pastries">Explore Our Pastries</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-accent/50">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
       {/* Optional: Add a subtle image as part of the hero, e.g., a beautifully blurred pastry */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
