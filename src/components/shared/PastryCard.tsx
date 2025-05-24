
import type { Pastry } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface PastryCardProps {
  pastry: Pastry;
}

export function PastryCard({ pastry }: PastryCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image
            src={pastry.imageUrl}
            alt={pastry.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={pastry.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-semibold text-primary">{pastry.name}</CardTitle>
        <CardDescription className="mt-2 text-foreground/80 line-clamp-3">{pastry.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-0">
        <p className="text-lg font-bold text-primary">{pastry.price}</p>
        <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/80">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Order
        </Button>
      </CardFooter>
    </Card>
  );
}
