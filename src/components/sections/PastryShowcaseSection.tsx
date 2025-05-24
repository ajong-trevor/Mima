
"use client";

import { useState, useMemo } from 'react';
import type { Pastry } from '@/types';
import { pastries, categories } from '@/lib/data';
import { PastryCard } from '@/components/shared/PastryCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"


export function PastryShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPastries = useMemo(() => {
    if (selectedCategory === 'all') {
      return pastries;
    }
    return pastries.filter((pastry) => pastry.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="pastries" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Our Delicious Offerings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Browse through our delightful selection of freshly baked goods.
          </p>
        </div>

        <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {category.icon && <category.icon className="mr-2 h-4 w-4" />}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {filteredPastries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredPastries.map((pastry) => (
              <PastryCard key={pastry.id} pastry={pastry} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-foreground/70 py-8">
            No pastries found in this category. Please try another one!
          </p>
        )}
      </div>
    </section>
  );
}
