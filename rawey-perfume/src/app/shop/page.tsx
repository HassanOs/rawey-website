'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { products, collections, scentFamilies, seasons, occasions, priceRanges } from '@/data/products';
import type { ScentFamily, Season, Occasion } from '@/data/products';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

interface FilterContentProps {
  selectedCollection: string;
  setSelectedCollection: React.Dispatch<React.SetStateAction<string>>;
  selectedScentFamily: string;
  setSelectedScentFamily: React.Dispatch<React.SetStateAction<string>>;
  selectedSeason: string;
  setSelectedSeason: React.Dispatch<React.SetStateAction<string>>;
  selectedOccasion: string;
  setSelectedOccasion: React.Dispatch<React.SetStateAction<string>>;
  selectedPriceRange: number;
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<number>>;
  hasActiveFilters: boolean;
  clearFilters: () => void;
}

function FilterContent({
  selectedCollection,
  setSelectedCollection,
  selectedScentFamily,
  setSelectedScentFamily,
  selectedSeason,
  setSelectedSeason,
  selectedOccasion,
  setSelectedOccasion,
  selectedPriceRange,
  setSelectedPriceRange,
  hasActiveFilters,
  clearFilters,
}: FilterContentProps) {
  return (
    <div className="space-y-8">
      {/* Collections */}
      <div>
        <h4 className="text-sm font-medium tracking-wide mb-4">Collections</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="collection"
              checked={selectedCollection === 'all'}
              onChange={() => setSelectedCollection('all')}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              All Collections
            </span>
          </label>
          {collections.map((collection) => (
            <label key={collection.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="collection"
                checked={selectedCollection === collection.id}
                onChange={() => setSelectedCollection(collection.id)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {collection.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Scent Families */}
      <div>
        <h4 className="text-sm font-medium tracking-wide mb-4">Scent Family</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="scentFamily"
              checked={selectedScentFamily === 'all'}
              onChange={() => setSelectedScentFamily('all')}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              All Families
            </span>
          </label>
          {scentFamilies.map((family) => (
            <label key={family} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="scentFamily"
                checked={selectedScentFamily === family}
                onChange={() => setSelectedScentFamily(family)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {family}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Season */}
      <div>
        <h4 className="text-sm font-medium tracking-wide mb-4">Season</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="season"
              checked={selectedSeason === 'all'}
              onChange={() => setSelectedSeason('all')}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              All Seasons
            </span>
          </label>
          {seasons.filter((s) => s !== 'All Seasons').map((season) => (
            <label key={season} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="season"
                checked={selectedSeason === season}
                onChange={() => setSelectedSeason(season)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {season}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Occasion */}
      <div>
        <h4 className="text-sm font-medium tracking-wide mb-4">Occasion</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="occasion"
              checked={selectedOccasion === 'all'}
              onChange={() => setSelectedOccasion('all')}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              All Occasions
            </span>
          </label>
          {occasions.map((occasion) => (
            <label key={occasion} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="occasion"
                checked={selectedOccasion === occasion}
                onChange={() => setSelectedOccasion(occasion)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {occasion}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h4 className="text-sm font-medium tracking-wide mb-4">Price</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={selectedPriceRange === -1}
              onChange={() => setSelectedPriceRange(-1)}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              All Prices
            </span>
          </label>
          {priceRanges.map((range, index) => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === index}
                onChange={() => setSelectedPriceRange(index)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full mt-4"
        >
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const collectionFilter = searchParams.get('collection');

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>(collectionFilter || 'all');
  const [selectedScentFamily, setSelectedScentFamily] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(-1);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCollection !== 'all') {
      const collection = collections.find((c) => c.id === selectedCollection);
      if (collection) {
        result = result.filter((p) =>
          p.collection.toLowerCase().includes(collection.name.toLowerCase())
        );
      }
    }

    if (selectedScentFamily !== 'all') {
      result = result.filter((p) => p.scentFamily === selectedScentFamily);
    }

    if (selectedSeason !== 'all') {
      result = result.filter((p) => p.season === selectedSeason || p.season === 'All Seasons');
    }

    if (selectedOccasion !== 'all') {
      result = result.filter((p) => p.occasion.includes(selectedOccasion as Occasion));
    }

    if (selectedPriceRange >= 0) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price <= range.max);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [selectedCollection, selectedScentFamily, selectedSeason, selectedOccasion, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCollection('all');
    setSelectedScentFamily('all');
    setSelectedSeason('all');
    setSelectedOccasion('all');
    setSelectedPriceRange(-1);
  };

  const hasActiveFilters =
    selectedCollection !== 'all' ||
    selectedScentFamily !== 'all' ||
    selectedSeason !== 'all' ||
    selectedOccasion !== 'all' ||
    selectedPriceRange >= 0;

  

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-4">Shop</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover our collection of luxury fragrances.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent
                selectedCollection={selectedCollection}
                setSelectedCollection={setSelectedCollection}
                selectedScentFamily={selectedScentFamily}
                setSelectedScentFamily={setSelectedScentFamily}
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
                selectedOccasion={selectedOccasion}
                setSelectedOccasion={setSelectedOccasion}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                hasActiveFilters={hasActiveFilters}
                clearFilters={clearFilters}
              />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground h-9 px-4 py-2 rounded-md transition-colors">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  )}
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
                <FilterContent
                  selectedCollection={selectedCollection}
                  setSelectedCollection={setSelectedCollection}
                  selectedScentFamily={selectedScentFamily}
                  setSelectedScentFamily={setSelectedScentFamily}
                  selectedSeason={selectedSeason}
                  setSelectedSeason={setSelectedSeason}
                  selectedOccasion={selectedOccasion}
                  setSelectedOccasion={setSelectedOccasion}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  hasActiveFilters={hasActiveFilters}
                  clearFilters={clearFilters}
                />
              </SheetContent>
            </Sheet>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-muted-foreground mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
