'use client';

import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '@/contexts/store-context';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

// Unique gradient palettes per collection for visual richness
const collectionGradients: Record<string, string> = {
  'Signature Collection': 'from-amber-100/80 via-orange-50/60 to-yellow-50/40',
  'Noir Intense': 'from-stone-300/80 via-neutral-200/60 to-stone-100/40',
  'Blanc Pur': 'from-sky-50/60 via-slate-50/40 to-white/60',
  'Reserve Privee': 'from-amber-200/70 via-yellow-100/50 to-orange-50/40',
};

// SVG bottle silhouettes for visual interest
function BottleSVG({ variant = 0, className }: { variant?: number; className?: string }) {
  const bottles = [
    // Tall elegant bottle
    <svg key="0" viewBox="0 0 60 120" className={className} fill="currentColor" opacity="0.12">
      <rect x="24" y="0" width="12" height="10" rx="2" />
      <rect x="26" y="10" width="8" height="8" />
      <path d="M20 18 Q20 28 16 38 L16 110 Q16 118 24 118 L36 118 Q44 118 44 110 L44 38 Q40 28 40 18 Z" />
    </svg>,
    // Round bottle
    <svg key="1" viewBox="0 0 60 120" className={className} fill="currentColor" opacity="0.12">
      <rect x="25" y="0" width="10" height="12" rx="2" />
      <rect x="27" y="12" width="6" height="6" />
      <ellipse cx="30" cy="72" rx="26" ry="42" />
    </svg>,
    // Square bottle
    <svg key="2" viewBox="0 0 60 120" className={className} fill="currentColor" opacity="0.12">
      <rect x="24" y="0" width="12" height="8" rx="3" />
      <rect x="26" y="8" width="8" height="10" />
      <rect x="10" y="18" width="40" height="95" rx="4" />
    </svg>,
  ];
  return bottles[variant % bottles.length];
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);
  const gradient = collectionGradients[product.collection] || collectionGradients['Signature Collection'];

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20">
          {/* Rich gradient background */}
          <div className={cn('absolute inset-0 bg-gradient-to-br', gradient)} />

          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Bottle silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <BottleSVG variant={index} className="w-20 h-32 text-foreground" />
          </div>

          {/* Product name overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 pt-8 bg-gradient-to-t from-black/10 to-transparent">
            <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/50 font-medium">
              {product.collection}
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.bestseller && (
              <span className="px-2.5 py-1 bg-primary text-primary-foreground text-[9px] font-medium tracking-[0.1em] uppercase">
                Bestseller
              </span>
            )}
            {product.new && (
              <span className="px-2.5 py-1 bg-accent text-accent-foreground text-[9px] font-medium tracking-[0.1em] uppercase">
                New
              </span>
            )}
            {product.limited && (
              <span className="px-2.5 py-1 bg-foreground/90 text-background text-[9px] font-medium tracking-[0.1em] uppercase">
                Limited
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id);
            }}
            className={cn(
              'absolute top-3 right-3 p-2 backdrop-blur-sm transition-all duration-300',
              inWishlist
                ? 'bg-accent/20 opacity-100'
                : 'bg-background/60 opacity-0 group-hover:opacity-100'
            )}
          >
            <Heart
              className={cn(
                'w-4 h-4 transition-all duration-300',
                inWishlist ? 'fill-accent text-accent scale-110' : 'text-muted-foreground hover:text-accent'
              )}
              strokeWidth={1.5}
            />
          </button>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.03] transition-all duration-500" />

          {/* Quick view on hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <div className="w-full px-4 py-3 bg-background/95 backdrop-blur-sm text-center text-[11px] font-medium tracking-[0.15em] uppercase border border-border/30">
              Quick View
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-4 space-y-1.5">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-heading text-base tracking-wide group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/70">{product.collection}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-foreground font-medium tabular-nums">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-[11px] text-muted-foreground tabular-nums">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
