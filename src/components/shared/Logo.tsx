
"use client";

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="https://placehold.co/200x100.png" // Placeholder for the new logo
        alt="Mima's Delights Logo"
        width={180} // Adjusted width, maintain aspect ratio with height
        height={90}  // Adjusted height for the new logo
        data-ai-hint="bakery logo"
        className="h-auto" 
        priority // Add priority to preload the LCP image
      />
    </Link>
  );
}
