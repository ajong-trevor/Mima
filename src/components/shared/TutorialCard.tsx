
import type { Tutorial } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image
            src={tutorial.thumbnailUrl}
            alt={tutorial.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={tutorial.dataAiHint}
          />
           <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="h-16 w-16 text-white/80" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-semibold text-primary">{tutorial.title}</CardTitle>
        <CardDescription className="mt-2 text-foreground/80 line-clamp-3">{tutorial.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
          {/* In a real app, this would link to the video or open a modal player */}
          <Link href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">
            <PlayCircle className="mr-2 h-4 w-4" />
            Watch Video
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
