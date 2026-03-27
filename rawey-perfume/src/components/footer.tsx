'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rawey-black text-rawey-white">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-rawey-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="RAWEY Parfums"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-rawey-white/50 leading-relaxed max-w-xs">
              Luxury fragrances crafted for those who appreciate the art of fine perfumery. Since 2020.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-rawey-tan/30 flex items-center justify-center text-rawey-white/50 hover:border-rawey-gold hover:text-rawey-gold transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-rawey-tan/30 flex items-center justify-center text-rawey-white/50 hover:border-rawey-gold hover:text-rawey-gold transition-all duration-300"
                aria-label="External"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:concierge@rawey.com"
                className="w-9 h-9 border border-rawey-tan/30 flex items-center justify-center text-rawey-white/50 hover:border-rawey-gold hover:text-rawey-gold transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-rawey-tan">
              Shop
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/shop', label: 'All Fragrances' },
                { href: '/shop?collection=signature', label: 'Signature Collection' },
                { href: '/shop?collection=noir', label: 'Noir Intense' },
                { href: '/shop?collection=blanc', label: 'Blanc Pur' },
                { href: '/shop?collection=reserve', label: 'Reserve Privée' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rawey-white/50 hover:text-rawey-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-rawey-tan">
              Maison
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'Our Story' },
                { href: '/about#philosophy', label: 'Philosophy' },
                { href: '/contact', label: 'Contact' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rawey-white/50 hover:text-rawey-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-rawey-tan">
              Newsletter
            </h4>
            <p className="text-sm text-rawey-white/50 leading-relaxed">
              Be the first to discover new releases and exclusive offers.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3.5 bg-rawey-white/5 border border-rawey-tan/25 text-sm text-rawey-white placeholder:text-rawey-white/25 focus:outline-none focus:border-rawey-gold/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-3.5 bg-rawey-gold text-rawey-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-rawey-tan transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-rawey-tan/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-rawey-white/30 tracking-wide">
            © 2026 Rawey Parfums. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Shipping & Returns'].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[11px] text-rawey-white/30 hover:text-rawey-gold transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
