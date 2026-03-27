'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '@/contexts/store-context';
import { products } from '@/data/products';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-muted-foreground/50" />
          <h1 className="text-2xl mb-4">Your wishlist is empty</h1>
          <p className="text-muted-foreground mb-8">
            Save your favorite fragrances for later.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-secondary/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-4">Wishlist</h1>
            <p className="text-muted-foreground">
              {wishlist.length} saved item{wishlist.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {wishlistProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 bg-secondary/20 border border-border/50 text-center"
        >
          <h2 className="text-xl mb-4">Ready to indulge?</h2>
          <p className="text-muted-foreground mb-6">
            Add all your favorites to cart with one click.
          </p>
          <Button
            onClick={() => {
              wishlistProducts.forEach((product) => {
                addToCart(product, 1, product.sizes[1]?.size || '50ml');
              });
            }}
            className="h-12 px-8 text-base tracking-wide"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Add All to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
