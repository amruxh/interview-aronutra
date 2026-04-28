'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleCheckout = () => {
    setShowSuccess(true);
  };

  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        title="Your Collection" 
        subtitle="Review your curated selection of liquid gold before finalizing your selection."
      />

      <section className="py-12 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        {cart.length === 0 && !showSuccess ? (
          <div className="text-center py-16 md:py-32 border border-dashed border-white/10 rounded-2xl px-6">
            <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-primary-container/20 mx-auto mb-6" />
            <h2 className="font-headline-lg text-lg md:text-headline-lg mb-4 text-on-surface-variant">The collection is currently empty</h2>
            <Link href="/" className="text-primary-container hover:underline underline-offset-8 transition-all font-label-caps text-[10px] md:text-label-caps uppercase tracking-widest">
              Explore the Collection
            </Link>
          </div>
        ) : showSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 md:py-32 glass-panel rounded-3xl border border-primary-container/20 max-w-2xl mx-auto px-6"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 text-primary-container">
              <ShoppingBag size={32} className="md:w-12 md:h-12" />
            </div>
            <h2 className="font-display-md text-2xl md:text-display-md mb-4 md:mb-6">Order Confirmed</h2>
            <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant mb-8 md:mb-12 md:px-12 leading-relaxed">
              Your journey has begun. Our master apiarists are preparing your curated collection for climate-controlled transit.
            </p>
            <Link 
              href="/"
              className="inline-block bg-primary-container text-on-primary-container px-10 md:px-12 py-4 md:py-5 font-label-caps text-[10px] md:text-label-caps hover:scale-[1.02] transition-transform gold-glow uppercase tracking-widest"
            >
              Return Home
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="lg:col-span-2 space-y-4 md:space-y-8">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="glass-panel p-4 md:p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 md:gap-8 border-t border-white/5"
                  >
                    <div className="relative w-full sm:w-32 aspect-square rounded-lg overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    
                    <div className="grow w-full text-center sm:text-left">
                      <h3 className="font-headline-md text-lg md:text-headline-md text-[#D4AF37] mb-1">{item.name}</h3>
                      <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-4">${item.price.toLocaleString()}</p>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start">
                        <div className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-1.5">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-on-surface-variant hover:text-primary-container"><Minus size={14} /></button>
                          <span className="font-label-caps text-[10px] md:text-label-caps min-w-[20px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-on-surface-variant hover:text-primary-container"><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-error/60 hover:text-error transition-colors flex items-center gap-2 font-label-caps text-[10px] md:text-label-caps uppercase tracking-wider">
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-full sm:w-auto text-center sm:text-right border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
                      <span className="text-lg md:text-xl font-light text-on-surface">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="space-y-8">
              <div className="glass-panel p-6 md:p-8 rounded-xl border-t border-white/5 lg:sticky lg:top-32">
                <h3 className="font-headline-md text-lg md:text-headline-md mb-6 md:mb-8">Summary</h3>
                <div className="space-y-4 mb-6 md:mb-8">
                  <div className="flex justify-between font-body-md text-sm md:text-body-md text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-body-md text-sm md:text-body-md text-on-surface-variant">
                    <span>Shipping</span>
                    <span>Complimentary</span>
                  </div>
                  <div className="h-px bg-white/5 my-4"></div>
                  <div className="flex justify-between font-headline-md text-lg md:text-headline-md">
                    <span>Total</span>
                    <span className="text-primary-container">${cartTotal.toLocaleString()}</span>
                  </div>
                </div>
                <Link 
                  href="/checkout"
                  className="w-full bg-primary-container text-on-primary-container py-4 md:py-5 font-label-caps text-[10px] md:text-label-caps flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform gold-glow uppercase tracking-widest"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
