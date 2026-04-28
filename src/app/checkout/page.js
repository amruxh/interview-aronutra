'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle, ArrowLeft, ShoppingBag, Package, MapPin, Truck } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
    // Scroll to top on success
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-surface">
      <section className="px-6 md:px-16 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!isOrdered ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-32 md:pt-48 pb-12 md:pb-24"
            >
              {/* Checkout Form */}
              <div className="space-y-10 md:space-y-16">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <MapPin size={20} />
                    </div>
                    <h2 className="font-display-md text-2xl md:text-3xl text-[#FDF5E6]">Shipping Details</h2>
                  </div>
                  
                  <form className="space-y-5 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">First Name</label>
                        <input type="text" placeholder="e.g. John" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary-container outline-none transition-all placeholder:text-white/10" required />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">Last Name</label>
                        <input type="text" placeholder="e.g. Doe" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary-container outline-none transition-all placeholder:text-white/10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary-container outline-none transition-all placeholder:text-white/10" required />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">Shipping Address</label>
                      <input type="text" placeholder="Full delivery address" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary-container outline-none transition-all placeholder:text-white/10" required />
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">City</label>
                        <input type="text" placeholder="Wayanad" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary-container outline-none transition-all placeholder:text-white/10" required />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">Postal Code</label>
                        <input type="text" placeholder="673121" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary-container outline-none transition-all placeholder:text-white/10" required />
                      </div>
                    </div>
                  </form>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <CreditCard size={20} />
                    </div>
                    <h2 className="font-display-md text-2xl md:text-3xl text-[#FDF5E6]">Payment</h2>
                  </div>

                  <div className="glass-panel p-6 md:p-8 rounded-2xl border border-primary-container/20 flex items-center gap-6 mb-10 group hover:border-primary-container/40 transition-colors">
                    <div className="p-3 bg-primary-container/10 rounded-lg text-primary-container group-hover:scale-110 transition-transform">
                      <CreditCard className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <div className="font-display-md text-lg md:text-xl text-on-surface">Online Payment</div>
                      <div className="text-on-surface-variant text-xs md:text-sm">Secure UPI, Credit Card & Debit Card</div>
                    </div>
                  </div>

                  <button 
                    onClick={handleOrder}
                    className="w-full bg-primary-container text-on-primary-container py-4 md:py-6 font-label-caps text-[10px] md:text-label-caps flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all gold-glow uppercase tracking-widest"
                  >
                    Place Order • ₹{cartTotal.toLocaleString()}
                  </button>
                  <p className="text-[10px] text-center text-on-surface-variant/40 mt-4 uppercase tracking-[0.2em]">
                    By clicking, you agree to our terms of artisanal service.
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-32 h-fit order-first lg:order-last">
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <ShoppingBag size={80} />
                  </div>
                  
                  <h3 className="font-display-md text-xl md:text-2xl mb-8 border-b border-white/5 pb-6">Your Selection</h3>
                  <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center group">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <span className="text-primary-container font-label-caps text-[10px]">{item.quantity}x</span>
                          </div>
                          <span className="font-body-md text-sm md:text-base group-hover:text-primary-container transition-colors">{item.name}</span>
                        </div>
                        <span className="font-body-md text-sm md:text-base">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <div className="flex justify-between text-xs md:text-sm text-on-surface-variant uppercase tracking-widest font-label-caps">
                      <span>Subtotal</span>
                      <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-on-surface-variant uppercase tracking-widest font-label-caps">
                      <span>Shipping</span>
                      <span className="text-primary-container">Complimentary</span>
                    </div>
                    <div className="h-px bg-white/5 my-4"></div>
                    <div className="flex justify-between text-lg md:text-2xl font-display-md items-end">
                      <span className="text-sm uppercase tracking-widest font-label-caps mb-1 opacity-60">Total</span>
                      <span className="text-primary-container">₹{cartTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto pt-32 md:pt-40 pb-12"
            >
              <div className="glass-panel p-6 md:p-12 rounded-3xl border border-primary-container/20 text-center relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary-container to-transparent"></div>
                
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                  className="w-16 h-16 md:w-24 md:h-24 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-primary-container border border-primary-container/20 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                >
                  <CheckCircle className="w-8 h-8 md:w-12 md:h-12" />
                </motion.div>

                <h2 className="font-display-md text-2xl md:text-4xl mb-4 text-[#FDF5E6]">Order Confirmed</h2>
                <p className="font-body-md text-xs md:text-base text-on-surface-variant mb-8 md:mb-10 md:px-12 leading-relaxed">
                  The preparation has begun. Your selection of Wayanad's finest honey has been registered. Our master apiarists are now preparing your collection for climate-controlled transit.
                </p>

                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 max-w-lg mx-auto">
                  <div className="flex flex-col items-center gap-3">
                    <Package className="text-primary-container opacity-40" />
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label-caps">Eco-Packaging</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Truck className="text-primary-container opacity-40" />
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label-caps">Priority Dispatch</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <CheckCircle className="text-primary-container opacity-40" />
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label-caps">Authentic Source</span>
                  </div>
                </div>

                <Link 
                  href="/"
                  className="inline-block bg-primary-container text-on-primary-container px-12 md:px-20 py-4 md:py-6 rounded-sm font-label-caps text-[10px] md:text-label-caps hover:scale-[1.05] active:scale-[0.98] transition-all gold-glow uppercase tracking-widest"
                >
                  Return to Sanctuary
                </Link>
                
                <p className="mt-8 text-[9px] text-on-surface-variant/30 uppercase tracking-[0.3em]">A confirmation email is on its way to your inbox.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
