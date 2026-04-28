'use client';

import React from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gift, Package, Send, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function GiftingPage() {
  const { addToCart } = useCart();
  
  const comboCollection = {
    id: 'mellifera-gold-combo',
    name: 'Mellifera Gold – 12 Variety Honey Combo',
    price: 1299,
    image: '/gifting-box.png'
  };

  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        title="The Art of Gifting" 
        subtitle="The ultimate expression of refinement. Our handcrafted gift boxes are designed for those who appreciate the extraordinary."
      />

      <section className="py-12 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10"
          >
            <Image
              src="/gifting-box.png"
              alt="Mellifera Gold 12 Variety Honey Combo"
              fill
              className="object-contain p-8 md:p-12"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display-md text-2xl md:text-display-md mb-6 md:mb-8 text-[#FDF5E6] leading-tight">Mellifera Gold – 12 Variety Honey Combo</h2>
            <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed">
              Presented in an octagonal forest-green case with gold-embossed details, this collection features our 12 signature varietals. Perfect for gifting and everyday wellness, it is an invitation to explore the diverse richness of nature.
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
              {[
                { icon: <Package size={20} />, text: "Premium Gift Ready Packaging" },
                { icon: <Gift size={20} />, text: "Includes 12 unique honey varieties (50g each)" },
                { icon: <Send size={20} />, text: "Free Delivery Across India" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-on-surface">
                  <div className="text-primary-container shrink-0">{item.icon}</div>
                  <span className="font-body-md text-sm md:text-body-md">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-light text-[#D4AF37]">₹1,299</span>
                <span className="text-sm text-on-surface-variant line-through opacity-50">₹1,499</span>
              </div>
              <button 
                onClick={() => addToCart(comboCollection)}
                className="w-full sm:w-auto bg-primary-container text-on-primary-container px-10 md:px-12 py-4 md:py-5 font-label-caps text-[10px] md:text-label-caps hover:scale-[1.02] transition-transform gold-glow uppercase"
              >
                Add to Collection
              </button>
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-primary-container font-label-caps animate-pulse">Launch Offer – Limited Time Only</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
