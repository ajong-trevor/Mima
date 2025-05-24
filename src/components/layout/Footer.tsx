
"use client";

import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-muted/40 py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>&copy; {currentYear ?? new Date().getFullYear()} Mima&apos;s Delights. All rights reserved.</p>
        <p className="mt-1">Made with <span className="text-red-500">♥</span> for delicious pastries.</p>
      </div>
    </footer>
  );
}
