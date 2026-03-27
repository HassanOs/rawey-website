import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProductRating({ rating, reviewCount, size = 'md' }: ProductRatingProps) {
  const sizeClasses = {
    sm: { star: 'w-3.5 h-3.5', text: 'text-xs' },
    md: { star: 'w-4 h-4', text: 'text-sm' },
    lg: { star: 'w-5 h-5', text: 'text-base' },
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizeClasses[size].star,
              star <= Math.floor(rating)
                ? 'fill-accent text-accent'
                : 'text-border fill-border'
            )}
          />
        ))}
      </div>
      <span className={cn('text-muted-foreground', sizeClasses[size].text)}>
        {rating} ({reviewCount})
      </span>
    </div>
  );
}
