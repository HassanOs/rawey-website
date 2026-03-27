// Rawey Perfume Store - Product Catalog

export type ScentFamily =
  | 'Floral'
  | 'Oriental'
  | 'Woody'
  | 'Fresh'
  | 'Fruity'
  | 'Gourmand'
  | 'Chypre'
  | 'Fougere';

export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter' | 'All Seasons';
export type Occasion = 'Daily' | 'Evening' | 'Special Occasion' | 'Romantic' | 'Office' | 'Casual';

export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  sizes: { size: string; price: number }[];
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  rating: number;
  reviewCount: number;
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Coming Soon';
  season: Season;
  occasion: Occasion[];
  scentFamily: ScentFamily;
  image: string;
  images: string[];
  bestseller?: boolean;
  new?: boolean;
  limited?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

// Collections
export const collections: Collection[] = [
  {
    id: 'signature',
    name: 'Signature Collection',
    description: 'Timeless scents that define elegance. Our most beloved fragrances, crafted for those who appreciate the art of fine perfumery.',
    image: '/collections/signature.jpg',
    productCount: 5,
  },
  {
    id: 'noir',
    name: 'Noir Intense',
    description: 'Bold, mysterious, and unforgettable. Deep compositions for evening wear and special moments.',
    image: '/collections/noir.jpg',
    productCount: 4,
  },
  {
    id: 'blanc',
    name: 'Blanc Pur',
    description: 'Pure, ethereal, and effortlessly chic. Light fragrances that whisper rather than shout.',
    image: '/collections/blanc.jpg',
    productCount: 4,
  },
  {
    id: 'reserve',
    name: 'Reserve Privee',
    description: 'Exclusive creations for the discerning few. Limited edition scents from our master perfumer.',
    image: '/collections/reserve.jpg',
    productCount: 3,
  },
];

// Products
export const products: Product[] = [
  // Signature Collection
  {
    id: 'rawey-no1',
    name: 'Rawey No. 1',
    collection: 'Signature Collection',
    price: 285,
    sizes: [
      { size: '30ml', price: 165 },
      { size: '50ml', price: 245 },
      { size: '100ml', price: 385 },
    ],
    description: 'The fragrance that started it all. A sophisticated blend of rare ingredients that has become our signature scent.',
    notes: {
      top: ['Bergamot', 'Saffron', 'Pink Pepper'],
      heart: ['Oud', 'Rose Absolute', 'Iris'],
      base: ['Sandalwood', 'Amber', 'Musk'],
    },
    rating: 4.9,
    reviewCount: 847,
    availability: 'In Stock',
    season: 'All Seasons',
    occasion: ['Special Occasion', 'Evening', 'Romantic'],
    scentFamily: 'Oriental',
    image: '/products/rawey-no1.jpg',
    images: ['/products/rawey-no1-1.jpg', '/products/rawey-no1-2.jpg', '/products/rawey-no1-3.jpg'],
    bestseller: true,
  },
  {
    id: 'velvet-orchid',
    name: 'Velvet Orchid',
    collection: 'Signature Collection',
    price: 265,
    sizes: [
      { size: '30ml', price: 155 },
      { size: '50ml', price: 225 },
      { size: '100ml', price: 365 },
    ],
    description: 'A luxurious floral symphony. Velvet orchid meets creamy sandalwood in this unforgettable composition.',
    notes: {
      top: ['Champagne Accord', 'Honey', 'Jasmine'],
      heart: ['Orchid', 'Tuberose', 'Rose'],
      base: ['Sandalwood', 'Vanilla', 'Tonka Bean'],
    },
    rating: 4.8,
    reviewCount: 623,
    availability: 'In Stock',
    season: 'Spring',
    occasion: ['Romantic', 'Special Occasion', 'Evening'],
    scentFamily: 'Floral',
    image: '/products/velvet-orchid.jpg',
    images: ['/products/velvet-orchid-1.jpg', '/products/velvet-orchid-2.jpg'],
    bestseller: true,
  },
  {
    id: 'golden-amber',
    name: 'Golden Amber',
    collection: 'Signature Collection',
    price: 295,
    sizes: [
      { size: '30ml', price: 175 },
      { size: '50ml', price: 255 },
      { size: '100ml', price: 395 },
    ],
    description: 'Warm, radiant, and utterly captivating. Golden amber wrapped in precious woods and spices.',
    notes: {
      top: ['Cardamom', 'Cinnamon', 'Orange Blossom'],
      heart: ['Amber', 'Labdanum', 'Benzoin'],
      base: ['Cedarwood', 'Patchouli', 'Vanilla'],
    },
    rating: 4.7,
    reviewCount: 512,
    availability: 'In Stock',
    season: 'Fall',
    occasion: ['Evening', 'Special Occasion'],
    scentFamily: 'Oriental',
    image: '/products/golden-amber.jpg',
    images: ['/products/golden-amber-1.jpg', '/products/golden-amber-2.jpg'],
  },
  {
    id: 'white-cashmere',
    name: 'White Cashmere',
    collection: 'Signature Collection',
    price: 245,
    sizes: [
      { size: '30ml', price: 145 },
      { size: '50ml', price: 205 },
      { size: '100ml', price: 325 },
    ],
    description: 'Soft, sensual, and impossibly smooth. Like wrapping yourself in the finest cashmere.',
    notes: {
      top: ['Pear', 'Freesia', 'Bergamot'],
      heart: ['Cashmeran', 'Orris', 'Violet'],
      base: ['White Musk', 'Blonde Woods', 'Cashmere'],
    },
    rating: 4.8,
    reviewCount: 734,
    availability: 'In Stock',
    season: 'All Seasons',
    occasion: ['Daily', 'Office', 'Casual'],
    scentFamily: 'Floral',
    image: '/products/white-cashmere.jpg',
    images: ['/products/white-cashmere-1.jpg', '/products/white-cashmere-2.jpg'],
    bestseller: true,
  },
  {
    id: 'midnight-rose',
    name: 'Midnight Rose',
    collection: 'Signature Collection',
    price: 275,
    sizes: [
      { size: '30ml', price: 160 },
      { size: '50ml', price: 235 },
      { size: '100ml', price: 375 },
    ],
    description: 'A rose like you have never smelled before. Dark, mysterious, and utterly intoxicating.',
    notes: {
      top: ['Blackcurrant', 'Saffron', 'Pink Pepper'],
      heart: ['Turkish Rose', 'Oud', 'Incense'],
      base: ['Patchouli', 'Amber', 'Leather'],
    },
    rating: 4.6,
    reviewCount: 445,
    availability: 'Low Stock',
    season: 'Winter',
    occasion: ['Evening', 'Romantic', 'Special Occasion'],
    scentFamily: 'Floral',
    image: '/products/midnight-rose.jpg',
    images: ['/products/midnight-rose-1.jpg', '/products/midnight-rose-2.jpg'],
  },

  // Noir Intense
  {
    id: 'noir-extreme',
    name: 'Noir Extreme',
    collection: 'Noir Intense',
    price: 325,
    sizes: [
      { size: '50ml', price: 285 },
      { size: '100ml', price: 425 },
    ],
    description: 'The darkest expression of luxury. An intense oriental for those who dare to be remembered.',
    notes: {
      top: ['Black Truffle', 'Saffron', 'Bergamot'],
      heart: ['Oud', 'Black Rose', 'Incense'],
      base: ['Agarwood', 'Black Amber', 'Leather'],
    },
    rating: 4.9,
    reviewCount: 389,
    availability: 'In Stock',
    season: 'Winter',
    occasion: ['Evening', 'Special Occasion'],
    scentFamily: 'Oriental',
    image: '/products/noir-extreme.jpg',
    images: ['/products/noir-extreme-1.jpg', '/products/noir-extreme-2.jpg'],
    bestseller: true,
    limited: true,
  },
  {
    id: 'smoked-vanilla',
    name: 'Smoked Vanilla',
    collection: 'Noir Intense',
    price: 305,
    sizes: [
      { size: '50ml', price: 265 },
      { size: '100ml', price: 405 },
    ],
    description: 'Vanilla reimagined. Smoky, boozy, and dangerously addictive.',
    notes: {
      top: ['Rum', 'Tobacco Leaf', 'Pink Pepper'],
      heart: ['Smoked Vanilla', 'Tonka Bean', 'Cocoa'],
      base: ['Guaiac Wood', 'Cedar', 'Benzoin'],
    },
    rating: 4.7,
    reviewCount: 567,
    availability: 'In Stock',
    season: 'Fall',
    occasion: ['Evening', 'Romantic'],
    scentFamily: 'Gourmand',
    image: '/products/smoked-vanilla.jpg',
    images: ['/products/smoked-vanilla-1.jpg', '/products/smoked-vanilla-2.jpg'],
  },
  {
    id: 'oud-imperial',
    name: 'Oud Imperial',
    collection: 'Noir Intense',
    price: 485,
    sizes: [
      { size: '50ml', price: 425 },
      { size: '100ml', price: 685 },
    ],
    description: 'Pure oud luxury. A masterful blend of aged agarwood and precious ingredients.',
    notes: {
      top: ['Saffron', 'Cardamom', 'Rose'],
      heart: ['Aged Oud', 'Sandalwood', 'Amber'],
      base: ['Oud Wood', 'Musk', 'Leather'],
    },
    rating: 5.0,
    reviewCount: 234,
    availability: 'Low Stock',
    season: 'All Seasons',
    occasion: ['Special Occasion', 'Evening'],
    scentFamily: 'Woody',
    image: '/products/oud-imperial.jpg',
    images: ['/products/oud-imperial-1.jpg', '/products/oud-imperial-2.jpg'],
    limited: true,
  },
  {
    id: 'black-orchid-noir',
    name: 'Black Orchid Noir',
    collection: 'Noir Intense',
    price: 315,
    sizes: [
      { size: '50ml', price: 275 },
      { size: '100ml', price: 415 },
    ],
    description: 'Dark florals meet earthy truffle. A mysterious scent for the bold and beautiful.',
    notes: {
      top: ['Black Truffle', 'Ylang-Ylang', 'Bergamot'],
      heart: ['Black Orchid', 'Lotus', 'Spices'],
      base: ['Incense', 'Patchouli', 'Dark Chocolate'],
    },
    rating: 4.6,
    reviewCount: 412,
    availability: 'In Stock',
    season: 'Winter',
    occasion: ['Evening', 'Special Occasion'],
    scentFamily: 'Floral',
    image: '/products/black-orchid-noir.jpg',
    images: ['/products/black-orchid-noir-1.jpg', '/products/black-orchid-noir-2.jpg'],
  },

  // Blanc Pur
  {
    id: 'blanc-absolute',
    name: 'Blanc Absolute',
    collection: 'Blanc Pur',
    price: 235,
    sizes: [
      { size: '30ml', price: 135 },
      { size: '50ml', price: 195 },
      { size: '100ml', price: 315 },
    ],
    description: 'Pure elegance in a bottle. Clean, fresh, and effortlessly sophisticated.',
    notes: {
      top: ['Neroli', 'Petitgrain', 'Bergamot'],
      heart: ['White Flowers', 'Orange Blossom', 'Jasmine'],
      base: ['White Musk', 'Cedar', 'Ambrette'],
    },
    rating: 4.8,
    reviewCount: 689,
    availability: 'In Stock',
    season: 'Spring',
    occasion: ['Daily', 'Office', 'Casual'],
    scentFamily: 'Floral',
    image: '/products/blanc-absolute.jpg',
    images: ['/products/blanc-absolute-1.jpg', '/products/blanc-absolute-2.jpg'],
    bestseller: true,
  },
  {
    id: 'cotton-cloud',
    name: 'Cotton Cloud',
    collection: 'Blanc Pur',
    price: 215,
    sizes: [
      { size: '30ml', price: 125 },
      { size: '50ml', price: 175 },
      { size: '100ml', price: 285 },
    ],
    description: 'Fresh laundry and soft musks. The scent of pure comfort and cleanliness.',
    notes: {
      top: ['Cotton Flower', 'Aldehydes', 'Pear'],
      heart: ['Lily of the Valley', 'White Tea', 'Freesia'],
      base: ['Clean Musk', 'Blonde Woods', 'Ambroxan'],
    },
    rating: 4.7,
    reviewCount: 523,
    availability: 'In Stock',
    season: 'All Seasons',
    occasion: ['Daily', 'Casual', 'Office'],
    scentFamily: 'Fresh',
    image: '/products/cotton-cloud.jpg',
    images: ['/products/cotton-cloud-1.jpg', '/products/cotton-cloud-2.jpg'],
  },
  {
    id: 'pearl-essence',
    name: 'Pearl Essence',
    collection: 'Blanc Pur',
    price: 255,
    sizes: [
      { size: '30ml', price: 150 },
      { size: '50ml', price: 215 },
      { size: '100ml', price: 345 },
    ],
    description: 'Luminous and refined. A delicate floral that glows from within.',
    notes: {
      top: ['Pear', 'Water Lily', 'Pink Grapefruit'],
      heart: ['Peony', 'Magnolia', 'White Rose'],
      base: ['Pearl Accord', 'Musk', 'Cedar'],
    },
    rating: 4.6,
    reviewCount: 445,
    availability: 'In Stock',
    season: 'Spring',
    occasion: ['Daily', 'Romantic', 'Casual'],
    scentFamily: 'Floral',
    image: '/products/pearl-essence.jpg',
    images: ['/products/pearl-essence-1.jpg', '/products/pearl-essence-2.jpg'],
    new: true,
  },
  {
    id: 'linen-rose',
    name: 'Linen & Rose',
    collection: 'Blanc Pur',
    price: 225,
    sizes: [
      { size: '30ml', price: 130 },
      { size: '50ml', price: 185 },
      { size: '100ml', price: 295 },
    ],
    description: 'Fresh linen meets dewy rose petals. Simple, clean, beautiful.',
    notes: {
      top: ['Fresh Linen', 'Cucumber', 'White Tea'],
      heart: ['Rose Petals', 'Violet', 'Iris'],
      base: ['White Musk', 'Sandalwood', 'Moss'],
    },
    rating: 4.5,
    reviewCount: 367,
    availability: 'In Stock',
    season: 'Spring',
    occasion: ['Daily', 'Casual', 'Office'],
    scentFamily: 'Floral',
    image: '/products/linen-rose.jpg',
    images: ['/products/linen-rose-1.jpg', '/products/linen-rose-2.jpg'],
  },

  // Reserve Privee
  {
    id: 'royal-oud',
    name: 'Royal Oud',
    collection: 'Reserve Privee',
    price: 650,
    sizes: [
      { size: '50ml', price: 550 },
      { size: '100ml', price: 850 },
    ],
    description: 'The pinnacle of oud perfumery. Aged ingredients and masterful craftsmanship.',
    notes: {
      top: ['Saffron', 'Ambergris', 'Bergamot'],
      heart: ['Royal Oud', 'Rose Absolute', 'Incense'],
      base: ['Sandalwood', 'Amber', 'Exotic Woods'],
    },
    rating: 5.0,
    reviewCount: 156,
    availability: 'Low Stock',
    season: 'All Seasons',
    occasion: ['Special Occasion'],
    scentFamily: 'Woody',
    image: '/products/royal-oud.jpg',
    images: ['/products/royal-oud-1.jpg', '/products/royal-oud-2.jpg'],
    limited: true,
  },
  {
    id: 'amber-elixir',
    name: 'Amber Elixir',
    collection: 'Reserve Privee',
    price: 595,
    sizes: [
      { size: '50ml', price: 495 },
      { size: '100ml', price: 795 },
    ],
    description: 'Liquid gold. Pure amber essence aged to perfection.',
    notes: {
      top: ['Pink Saffron', 'Vanilla Orchid', 'Champagne'],
      heart: ['Golden Amber', 'Oud', 'Rose'],
      base: ['Ambergris', 'Musk', 'Precious Woods'],
    },
    rating: 4.9,
    reviewCount: 189,
    availability: 'In Stock',
    season: 'Winter',
    occasion: ['Special Occasion', 'Evening'],
    scentFamily: 'Oriental',
    image: '/products/amber-elixir.jpg',
    images: ['/products/amber-elixir-1.jpg', '/products/amber-elixir-2.jpg'],
    limited: true,
  },
  {
    id: 'santal-royal',
    name: 'Santal Royal',
    collection: 'Reserve Privee',
    price: 575,
    sizes: [
      { size: '50ml', price: 475 },
      { size: '100ml', price: 775 },
    ],
    description: 'Rare sandalwood from Mysore. A meditation in a bottle.',
    notes: {
      top: ['Cardamom', 'Neroli', 'Bergamot'],
      heart: ['Mysore Sandalwood', 'Orris', 'Rose'],
      base: ['Cedar', 'Amber', 'Leather'],
    },
    rating: 4.8,
    reviewCount: 167,
    availability: 'In Stock',
    season: 'All Seasons',
    occasion: ['Special Occasion', 'Evening', 'Romantic'],
    scentFamily: 'Woody',
    image: '/products/santal-royal.jpg',
    images: ['/products/santal-royal-1.jpg', '/products/santal-royal-2.jpg'],
    limited: true,
  },

  // Additional Products - Fresh & Fruity
  {
    id: 'citron-folle',
    name: 'Citron Folle',
    collection: 'Signature Collection',
    price: 225,
    sizes: [
      { size: '30ml', price: 130 },
      { size: '50ml', price: 185 },
      { size: '100ml', price: 295 },
    ],
    description: 'Effervescent citrus energy. Like sunshine in a bottle.',
    notes: {
      top: ['Sicilian Lemon', 'Yuzu', 'Grapefruit'],
      heart: ['Neroli', 'Petitgrain', 'Orange Blossom'],
      base: ['White Musk', 'Cedar', 'Amber'],
    },
    rating: 4.6,
    reviewCount: 478,
    availability: 'In Stock',
    season: 'Summer',
    occasion: ['Daily', 'Casual'],
    scentFamily: 'Fresh',
    image: '/products/citron-folle.jpg',
    images: ['/products/citron-folle-1.jpg', '/products/citron-folle-2.jpg'],
  },
  {
    id: 'fig-dor',
    name: 'Fig Dor',
    collection: 'Signature Collection',
    price: 245,
    sizes: [
      { size: '30ml', price: 145 },
      { size: '50ml', price: 205 },
      { size: '100ml', price: 325 },
    ],
    description: 'Sun-kissed figs and Mediterranean gardens. Warm, green, irresistible.',
    notes: {
      top: ['Fresh Fig', 'Green Leaf', 'Coconut'],
      heart: ['Fig Tree', 'Cedar', 'Solar Notes'],
      base: ['Sandalwood', 'Musk', 'Amber'],
    },
    rating: 4.7,
    reviewCount: 512,
    availability: 'In Stock',
    season: 'Summer',
    occasion: ['Daily', 'Casual', 'Romantic'],
    scentFamily: 'Fruity',
    image: '/products/fig-dor.jpg',
    images: ['/products/fig-dor-1.jpg', '/products/fig-dor-2.jpg'],
    bestseller: true,
  },
  {
    id: 'bergamot-soleil',
    name: 'Bergamot Soleil',
    collection: 'Blanc Pur',
    price: 235,
    sizes: [
      { size: '30ml', price: 135 },
      { size: '50ml', price: 195 },
      { size: '100ml', price: 315 },
    ],
    description: 'Italian bergamot meets Mediterranean sunshine. Pure joy.',
    notes: {
      top: ['Bergamot', 'Lemon', 'Mandarin'],
      heart: ['Neroli', 'Orange Blossom', 'Jasmine'],
      base: ['White Musk', 'Amber', 'Cedar'],
    },
    rating: 4.5,
    reviewCount: 389,
    availability: 'In Stock',
    season: 'Summer',
    occasion: ['Daily', 'Casual'],
    scentFamily: 'Fresh',
    image: '/products/bergamot-soleil.jpg',
    images: ['/products/bergamot-soleil-1.jpg', '/products/bergamot-soleil-2.jpg'],
    new: true,
  },
  {
    id: 'wild-vanilla',
    name: 'Wild Vanilla',
    collection: 'Signature Collection',
    price: 255,
    sizes: [
      { size: '30ml', price: 150 },
      { size: '50ml', price: 215 },
      { size: '100ml', price: 345 },
    ],
    description: 'Not your average vanilla. Wild, untamed, and beautifully complex.',
    notes: {
      top: ['Rum', 'Pear', 'Pink Pepper'],
      heart: ['Madagascar Vanilla', 'Tonka Bean', 'Heliotrope'],
      base: ['Cedar', 'Sandalwood', 'Praline'],
    },
    rating: 4.8,
    reviewCount: 634,
    availability: 'In Stock',
    season: 'Fall',
    occasion: ['Daily', 'Romantic', 'Evening'],
    scentFamily: 'Gourmand',
    image: '/products/wild-vanilla.jpg',
    images: ['/products/wild-vanilla-1.jpg', '/products/wild-vanilla-2.jpg'],
    bestseller: true,
  },
  {
    id: 'jasmin-nuit',
    name: 'Jasmin Nuit',
    collection: 'Noir Intense',
    price: 295,
    sizes: [
      { size: '50ml', price: 255 },
      { size: '100ml', price: 395 },
    ],
    description: 'Night-blooming jasmine under moonlight. Intoxicating and mysterious.',
    notes: {
      top: ['Saffron', 'Pink Pepper', 'Mandarin'],
      heart: ['Night Jasmine', 'Tuberose', 'Gardenia'],
      base: ['Amber', 'Sandalwood', 'Musk'],
    },
    rating: 4.7,
    reviewCount: 423,
    availability: 'In Stock',
    season: 'Summer',
    occasion: ['Evening', 'Romantic'],
    scentFamily: 'Floral',
    image: '/products/jasmin-nuit.jpg',
    images: ['/products/jasmin-nuit-1.jpg', '/products/jasmin-nuit-2.jpg'],
  },
  {
    id: 'cuir-precieux',
    name: 'Cuir Precieux',
    collection: 'Reserve Privee',
    price: 625,
    sizes: [
      { size: '50ml', price: 525 },
      { size: '100ml', price: 825 },
    ],
    description: 'Precious leather like you have never experienced. Refined, not rugged.',
    notes: {
      top: ['Saffron', 'Cardamom', 'Lavender'],
      heart: ['Iris', 'Leather', 'Oud'],
      base: ['Sandalwood', 'Amber', 'Musk'],
    },
    rating: 4.9,
    reviewCount: 134,
    availability: 'In Stock',
    season: 'Fall',
    occasion: ['Special Occasion', 'Evening'],
    scentFamily: 'Chypre',
    image: '/products/cuir-precieux.jpg',
    images: ['/products/cuir-precieux-1.jpg', '/products/cuir-precieux-2.jpg'],
    limited: true,
  },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export function getProductsByCollection(collectionId: string): Product[] {
  const collection = getCollectionById(collectionId);
  if (!collection) return [];

  return products.filter((p) =>
    p.collection.toLowerCase().includes(collection.name.toLowerCase())
  );
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.new);
}

export function getLimitedEditions(): Product[] {
  return products.filter((p) => p.limited);
}

export function getProductsByScentFamily(family: ScentFamily): Product[] {
  return products.filter((p) => p.scentFamily === family);
}

export function getProductsBySeason(season: Season): Product[] {
  return products.filter((p) => p.season === season || p.season === 'All Seasons');
}

export function getProductsByOccasion(occasion: Occasion): Product[] {
  return products.filter((p) => p.occasion.includes(occasion));
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.collection.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.notes.top.some((n) => n.toLowerCase().includes(lowerQuery)) ||
      p.notes.heart.some((n) => n.toLowerCase().includes(lowerQuery)) ||
      p.notes.base.some((n) => n.toLowerCase().includes(lowerQuery)) ||
      p.scentFamily.toLowerCase().includes(lowerQuery)
  );
}

export const scentFamilies: ScentFamily[] = [
  'Floral',
  'Oriental',
  'Woody',
  'Fresh',
  'Fruity',
  'Gourmand',
  'Chypre',
  'Fougere',
];

export const seasons: Season[] = ['Spring', 'Summer', 'Fall', 'Winter', 'All Seasons'];

export const occasions: Occasion[] = [
  'Daily',
  'Evening',
  'Special Occasion',
  'Romantic',
  'Office',
  'Casual',
];

export const priceRanges = [
  { label: 'Under $200', min: 0, max: 200 },
  { label: '$200 - $300', min: 200, max: 300 },
  { label: '$300 - $500', min: 300, max: 500 },
  { label: '$500+', min: 500, max: Infinity },
];
