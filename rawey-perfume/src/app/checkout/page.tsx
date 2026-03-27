'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CreditCard, Package, Truck, Check } from 'lucide-react';
import Link from 'next/link';
import { useStore } from '@/contexts/store-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsComplete(true);
    clearCart();
  };

  if (cart.length === 0 && !isComplete) {
    router.push('/cart');
    return null;
  }

  if (isComplete) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl mb-4">Order Confirmed</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. We will send you a confirmation email shortly.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
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
            <h1 className="text-4xl md:text-5xl mb-4">Checkout</h1>
            <p className="text-muted-foreground">Complete your order</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Forms */}
            <div className="space-y-8">
              {/* Contact */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-medium flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Contact Information
                </h2>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
              </motion.div>

              <Separator />

              {/* Shipping */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-medium flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Street Name"
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </motion.div>

              <Separator />

              {/* Payment */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-medium flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment
                </h2>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      name="expiry"
                      required
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      name="cvc"
                      required
                      value={formData.cvc}
                      onChange={handleChange}
                      placeholder="123"
                      className="mt-1"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24 p-6 bg-secondary/20 border border-border/50 h-fit"
              >
                <h2 className="text-lg font-medium mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => {
                    const sizePrice =
                      item.product.sizes.find((s) => s.size === item.selectedSize)
                        ?.price || item.product.price;
                    return (
                      <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                        <div className="w-16 h-20 bg-gradient-to-br from-secondary/50 to-secondary flex-shrink-0">
                          <div className="w-full h-full flex items-center justify-center p-2">
                            <span className="text-[9px] text-muted-foreground text-center">
                              {item.product.name}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.selectedSize} x {item.quantity}
                          </p>
                          <p className="text-sm mt-1">${sizePrice * item.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between mb-6">
                  <span className="font-medium">Total</span>
                  <span className="font-medium text-lg">
                    ${(cartTotal * 1.08).toFixed(2)}
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full h-12 text-base tracking-wide"
                >
                  {isProcessing ? 'Processing...' : `Pay $${(cartTotal * 1.08).toFixed(2)}`}
                </Button>

                <Link
                  href="/cart"
                  className="block mt-4 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Return to Cart
                </Link>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
