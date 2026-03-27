'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, ShoppingBag, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import Link from 'next/link';
import ProductRating from '@/components/product-rating';
import { useStore } from '@/contexts/store-context';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const product = getProductById(params.id as string);

  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Product not found</h1>
          <Link href="/shop" className="text-accent hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const currentPrice = product.sizes[selectedSize]?.price || product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, product.sizes[selectedSize]?.size || '50ml');
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] bg-gradient-to-br from-secondary/50 to-secondary relative"
          >
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full h-full bg-background/50 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-64 mx-auto bg-secondary/30 mb-4 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground text-center px-4">
                      {product.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{product.collection}</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {product.bestseller && (
                <span className="px-4 py-2 bg-primary text-primary-foreground text-xs font-medium tracking-wide uppercase">
                  Bestseller
                </span>
              )}
              {product.new && (
                <span className="px-4 py-2 bg-accent text-accent-foreground text-xs font-medium tracking-wide uppercase">
                  New
                </span>
              )}
              {product.limited && (
                <span className="px-4 py-2 bg-accent/80 text-accent-foreground text-xs font-medium tracking-wide uppercase">
                  Limited Edition
                </span>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <Link
                href={`/shop?collection=${product.collection.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {product.collection}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-normal mb-4">{product.name}</h1>

            <div className="mb-6">
              <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <div className="text-3xl font-normal mb-8">${currentPrice}</div>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium tracking-wide mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(index)}
                    className={cn(
                      'px-6 py-3 border text-sm tracking-wide transition-all',
                      selectedSize === index
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border hover:border-foreground/50'
                    )}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium tracking-wide mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-secondary/50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x border-border min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-secondary/50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-14 text-base tracking-wide"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                onClick={toggleWishlist}
                className="h-14 w-14 p-0"
              >
                <Heart
                  className={cn(
                    'w-5 h-5',
                    inWishlist ? 'fill-accent text-accent' : ''
                  )}
                />
              </Button>
            </div>

            {/* Availability */}
            <div className="mb-8 pb-8 border-b border-border">
              <div
                className={cn(
                  'text-sm font-medium',
                  product.availability === 'In Stock'
                    ? 'text-green-600'
                    : product.availability === 'Low Stock'
                    ? 'text-amber-600'
                    : 'text-red-600'
                )}
              >
                {product.availability}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Authentic</p>
              </div>
            </div>

            {/* Scent Notes */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium tracking-wide">Fragrance Notes</h3>

              <div>
                <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Top</h4>
                <div className="flex flex-wrap gap-2">
                  {product.notes.top.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1.5 bg-secondary/50 text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Heart</h4>
                <div className="flex flex-wrap gap-2">
                  {product.notes.heart.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1.5 bg-secondary/50 text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Base</h4>
                <div className="flex flex-wrap gap-2">
                  {product.notes.base.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1.5 bg-secondary/50 text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border space-y-3 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Scent Family</span>
                <span className="text-foreground">{product.scentFamily}</span>
              </div>
              <div className="flex justify-between">
                <span>Season</span>
                <span className="text-foreground">{product.season}</span>
              </div>
              <div className="flex justify-between">
                <span>Occasion</span>
                <span className="text-foreground">{product.occasion.join(', ')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
