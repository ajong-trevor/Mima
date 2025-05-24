
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-accent/50 via-background to-background overflow-hidden">
      <div className="absolute inset-0 opacity-20">
         {/* Decorative background image or pattern can go here */}
      </div>

      {/* Animating Pastries */}
      <div className="absolute top-[15%] left-[5%] sm:left-[10%] z-0 animate-float-pastry-1 opacity-70" style={{ animationDelay: '0s' }}>
        <svg width="80" height="80" viewBox="0 0 24 24">
          <path fill="#FBCFE8" d="M12 5.2L5 9.7V17l7 4.5 7-4.5V9.7L12 5.2z" />
          <path fill="#FFFFFF" d="M5 9.7l7-4.5 7 4.5-7 3.5L5 9.7z" />
          <circle fill="#E11D48" cx="12" cy="4.5" r="1.5" />
        </svg>
      </div>

      <div className="absolute top-[60%] left-[2%] sm:left-[5%] z-0 animate-float-pastry-2 opacity-70" style={{ animationDelay: '1s' }}>
        <svg width="60" height="60" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="#FDE68A" />
          <circle cx="9" cy="10" r="1.2" fill="#78350F" />
          <circle cx="15" cy="9" r="1" fill="#78350F" />
          <circle cx="12" cy="15" r="1.5" fill="#78350F" />
          <circle cx="16" cy="13" r="0.8" fill="#78350F" />
        </svg>
      </div>

      <div className="absolute top-[18%] right-[3%] sm:right-[8%] z-0 animate-float-pastry-3 opacity-70" style={{ animationDelay: '0.5s' }}>
        <svg width="70" height="70" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="1" fill="#FDBA74" />
          <line x1="9" y1="4" x2="9" y2="20" stroke="#F97316" strokeWidth="1"/>
          <line x1="15" y1="4" x2="15" y2="20" stroke="#F97316" strokeWidth="1"/>
          <line x1="4" y1="9" x2="20" y2="9" stroke="#F97316" strokeWidth="1"/>
          <line x1="4" y1="15" x2="20" y2="15" stroke="#F97316" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute bottom-[10%] right-[5%] sm:right-[12%] z-0 animate-float-pastry-4 opacity-60" style={{ animationDelay: '1.5s' }}>
          <svg width="50" height="50" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" stroke="#A16207" fill="#FEF3C7" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3" fill="hsl(var(--background))"/> {/* Use background for hole to adapt */}
              <path d="M15 9 A3 1.5 0 0 0 9 9" stroke="#F472B6" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M15.5 10.5 A3 1.5 0 0 0 8.5 10.5" stroke="#F472B6" strokeWidth="1.2" fill="none" strokeLinecap="round" transform="rotate(25 12 12)"/>
              <path d="M14.5 11.5 A3 1.5 0 0 0 9.5 11.5" stroke="#F472B6" strokeWidth="1.2" fill="none" strokeLinecap="round" transform="rotate(-25 12 12)"/>
          </svg>
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
            <Link href="/pastries">Explore Our Pastries</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-accent/50">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
       {/* Optional: Add a subtle image as part of the hero, e.g., a beautifully blurred pastry */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
