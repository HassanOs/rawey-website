'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/contexts/store-context';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const { cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-500 border-b',
        scrolled
          ? 'bg-rawey-black/95 backdrop-blur-xl border-rawey-tan/20 shadow-lg shadow-black/20'
          : 'bg-rawey-black border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="RAWEY Parfums"
              width={150}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 py-1',
                  pathname === item.href
                    ? 'text-rawey-gold'
                    : 'text-rawey-white/60 hover:text-rawey-gold'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-rawey-gold"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <Link
              href="/search"
              className="text-rawey-white/60 hover:text-rawey-gold transition-colors duration-200 p-1"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>

            <Link
              href="/wishlist"
              className="relative text-rawey-white/60 hover:text-rawey-gold transition-colors duration-200 p-1"
              aria-label="Wishlist"
            >
              <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <AnimatePresence>
                {wishlist.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-rawey-gold text-[9px] text-rawey-black rounded-full flex items-center justify-center font-medium"
                  >
                    {wishlist.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <Link
              href="/cart"
              className="relative text-rawey-white/60 hover:text-rawey-gold transition-colors duration-200 p-1"
              aria-label="Cart"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-rawey-gold text-[9px] text-rawey-black rounded-full flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="md:hidden text-rawey-white/60 hover:text-rawey-gold transition-colors p-1"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-rawey-black/95 backdrop-blur-xl border-l border-rawey-tan/20">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="mb-10">
                    <Image
                      src="/images/logo.png"
                      alt="RAWEY Parfums"
                      width={100}
                      height={34}
                      className="h-8 w-auto object-contain"
                      priority
                    />
                  </div>

                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'text-lg tracking-wide transition-colors duration-200 py-3 border-b border-rawey-tan/15',
                          pathname === item.href
                            ? 'text-rawey-gold'
                            : 'text-rawey-white/60 hover:text-rawey-gold'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile footer links */}
                  <div className="mt-auto pt-8 border-t border-rawey-tan/15 space-y-4">
                    <Link
                      href="/search"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-sm text-rawey-white/50 hover:text-rawey-gold transition-colors"
                    >
                      <Search className="w-4 h-4" /> Search
                    </Link>
                    <Link
                      href="/wishlist"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-sm text-rawey-white/50 hover:text-rawey-gold transition-colors"
                    >
                      <Heart className="w-4 h-4" /> Wishlist ({wishlist.length})
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
