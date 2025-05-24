
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="https://placehold.co/150x50.png"
        alt="Mima's Delights Logo"
        width={150}
        height={50}
        data-ai-hint="logo brand"
        className="h-auto" // Maintain aspect ratio, adjust height as needed
      />
    </Link>
  );
}
