'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { collections, getBestsellers, getNewArrivals } from '@/data/products';

export default function HomePage() {
  const bestsellers = getBestsellers();
  const newArrivals = getNewArrivals();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Rawey Parfums
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-8 text-foreground">
            The Art of
            <br />
            <span className="italic text-muted-foreground">Essence</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Luxury fragrances crafted for those who appreciate the refined beauty of fine perfumery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="group px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center gap-3"
            >
              Discover the Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border border-border text-foreground text-sm tracking-wide hover:border-foreground/30 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        {/* Subtle decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Collections Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four distinct expressions of luxury, each telling its own olfactory story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/shop?collection=${collection.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-secondary/50 to-secondary relative overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-32 bg-background/50 rounded-sm flex items-center justify-center p-4">
                        <span className="text-[10px] text-muted-foreground text-center">
                          {collection.name}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  </div>
                  <h3 className="font-medium tracking-wide group-hover:text-accent transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {collection.productCount} Fragrances
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Bestsellers</h2>
              <p className="text-muted-foreground">
                The most beloved fragrances from our house.
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-2 text-sm tracking-wide hover:text-accent transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {bestsellers.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-accent transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl mt-6 mb-8">
              Luxury is in the Details
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Every Rawey fragrance is a masterpiece, crafted with the finest ingredients
              from around the world. Our perfumers blend art and science to create scents
              that evoke emotion, memory, and desire.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Section */}
      {newArrivals.length > 0 && (
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl mb-4">New Arrivals</h2>
              <p className="text-muted-foreground">
                The latest additions to our fragrance family.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {newArrivals.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Find Your Signature Scent</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Explore our complete collection and discover the fragrance that speaks to you.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground text-sm tracking-wide hover:bg-background/90 transition-colors"
            >
              Shop All Fragrances
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
