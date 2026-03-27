'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore } from '@/contexts/store-context';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground/50" />
          <h1 className="text-2xl mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Discover our collection of luxury fragrances.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
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
            <h1 className="text-4xl md:text-5xl mb-4">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cart.reduce((acc, item) => acc + item.quantity, 0)} item
              {cart.reduce((acc, item) => acc + item.quantity, 0) !== 1 ? 's' : ''}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => {
              const sizePrice =
                item.product.sizes.find((s) => s.size === item.selectedSize)?.price ||
                item.product.price;

              return (
                <motion.div
                  key={`${item.product.id}-${item.selectedSize}`}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-6 p-6 bg-secondary/20 border border-border/50"
                >
                  {/* Image */}
                  <Link
                    href={`/products/${item.product.id}`}
                    className="w-28 h-36 bg-gradient-to-br from-secondary/50 to-secondary flex-shrink-0"
                  >
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <span className="text-[10px] text-muted-foreground text-center">
                        {item.product.name}
                      </span>
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          href={`/products/${item.product.id}`}
                          className="font-medium hover:text-accent transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.product.collection} | {item.selectedSize}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.quantity - 1
                            )
                          }
                          className="px-3 py-2 hover:bg-secondary/50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 py-2 border-x border-border text-sm min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.quantity + 1
                            )
                          }
                          className="px-3 py-2 hover:bg-secondary/50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-medium">${sizePrice * item.quantity}</p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">
                            ${sizePrice} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 p-6 bg-secondary/20 border border-border/50"
            >
              <h2 className="text-lg font-medium mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout" className="block w-full">
                <Button className="w-full h-12 text-base tracking-wide">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link
                href="/shop"
                className="block mt-4 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-border space-y-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Free shipping on all orders
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  30-day return policy
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Secure checkout
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
