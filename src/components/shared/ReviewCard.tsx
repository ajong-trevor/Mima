
import type { Review } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="bg-muted/30 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Avatar className="h-12 w-12">
          {review.avatarUrl && <AvatarImage src={review.avatarUrl} alt={review.customerName} data-ai-hint={review.dataAiHint} />}
          <AvatarFallback>{review.customerName.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg text-primary">{review.customerName}</CardTitle>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-foreground/80 italic">"{review.reviewText}"</CardDescription>
      </CardContent>
    </Card>
  );
}
