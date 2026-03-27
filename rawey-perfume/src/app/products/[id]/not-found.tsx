import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The fragrance you&apos;re looking for doesn&apos;t exist or has been discontinued.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-accent hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Shop
        </Link>
      </div>
    </div>
  );
}
