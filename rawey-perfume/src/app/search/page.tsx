'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { useStore } from '@/contexts/store-context';
import { searchProducts } from '@/data/products';
import ProductCard from '@/components/product-card';
import { Input } from '@/components/ui/input';

export default function SearchPage() {
  const { searchQuery, setSearchQuery } = useStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [results, setResults] = useState(searchProducts(searchQuery));

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchQuery(localQuery);
      setResults(searchProducts(localQuery));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [localQuery, setSearchQuery]);

  const clearSearch = () => {
    setLocalQuery('');
    setSearchQuery('');
    setResults([]);
  };

  return (
    <div className="min-h-screen">
      {/* Search Header */}
      <div className="bg-secondary/30 border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-8">Search</h1>

            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search fragrances, notes, collections..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-base"
                autoFocus
              />
              {localQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {localQuery === '' ? (
          <div className="text-center py-24">
            <SearchIcon className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
            <p className="text-muted-foreground">
              Start typing to search our collection.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-24">
            <SearchIcon className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
            <h2 className="text-xl mb-4">No results found</h2>
            <p className="text-muted-foreground mb-6">
              Try searching for a different term, fragrance note, or collection.
            </p>
            <button
              onClick={clearSearch}
              className="text-accent hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div>
            <p className="text-sm text-muted-foreground mb-8">
              {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{localQuery}&quot;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {results.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
