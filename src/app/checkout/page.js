'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        title="Bespoke Checkout" 
        subtitle="Secure your collection with our discreet and insured payment gateway."
      />

      <section className="py-24 px-16 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!isOrdered ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-24"
            >
              {/* Checkout Form */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-8 text-[#FDF5E6]">Shipping Details</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-primary-container outline-none transition-colors" required />
                      <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-primary-container outline-none transition-colors" required />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-primary-container outline-none transition-colors" required />
                    <input type="text" placeholder="Shipping Address" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-primary-container outline-none transition-colors" required />
                    <div className="grid grid-cols-2 gap-6">
                      <input type="text" placeholder="City" className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-primary-container outline-none transition-colors" required />
                      <input type="text" placeholder="Postal Code" className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-primary-container outline-none transition-colors" required />
                    </div>
                  </form>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-8 text-[#FDF5E6]">Payment Method</h2>
                  <div className="glass-panel p-8 rounded-xl border border-primary-container/20 flex items-center gap-6 mb-8">
                    <CreditCard className="text-primary-container w-8 h-8" />
                    <div>
                      <div className="font-headline-md text-headline-md">Credit Card</div>
                      <div className="text-on-surface-variant text-sm">Secure Stripe Payment Gateway</div>
                    </div>
                  </div>
                  <button 
                    onClick={handleOrder}
                    className="w-full bg-primary-container text-on-primary-container py-5 font-label-caps text-label-caps flex items-center justify-center gap-3 hover:scale-[1.01] transition-transform gold-glow"
                  >
                    Confirm Payment • ${cartTotal.toLocaleString()}
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="glass-panel p-8 rounded-2xl border-t border-white/5">
                  <h3 className="font-headline-md text-headline-md mb-8">Your Collection</h3>
                  <div className="space-y-6 mb-8">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <span className="text-on-surface-variant font-body-md">{item.quantity}x</span>
                          <span className="font-body-md">{item.name}</span>
                        </div>
                        <span className="font-body-md">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-white/5 my-6"></div>
                  <div className="flex justify-between text-xl">
                    <span>Total</span>
                    <span className="text-primary-container font-light">${cartTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-20"
            >
              <div className="w-24 h-24 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-10 text-primary-container">
                <CheckCircle size={48} />
              </div>
              <h2 className="font-display-md text-display-md mb-6">Order Placed Successfully</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 px-12 leading-relaxed">
                Thank you for your acquisition. Your order has been registered, and a confirmation email has been sent. Your curated honey collection will be dispatched shortly.
              </p>
              <Link 
                href="/"
                className="inline-block bg-primary-container text-on-primary-container px-12 py-5 font-label-caps text-label-caps hover:scale-[1.02] transition-transform gold-glow"
              >
                Back to Gallery
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
