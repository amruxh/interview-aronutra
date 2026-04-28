'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CollectionPage() {
  const initialProducts = [
    { id: 'mellifera-gold-combo', name: 'Mellifera Gold Combo (12 Variety)', price: 1299, originalPrice: 1499, src: '/gifting-box.png', tag: 'Best Seller', featured: true },
    { id: 'pure-honey-500', name: 'Pure Honey (500g)', price: 699, src: '/products/white-kiawe.png', tag: 'New', featured: true },
    { id: 'pure-honey-250', name: 'Pure Honey (250g)', price: 399, src: '/products/white-kiawe.png', tag: 'New', featured: false },
    { id: 'wild-flower', name: 'Wild Flower Honey', price: 150, src: '/products/royal-sidr.png' },
    { id: 'eucalyptus', name: 'Eucalyptus Honey', price: 150, src: '/products/wild-eucalyptus.png' },
    { id: 'cinnamon', name: 'Cinnamon Honey', price: 160, src: '/products/thyme-essence.png' },
    { id: 'lay-bee', name: 'Lay Bee Honey', price: 320, src: '/products/manuka.png' },
    { id: 'coffee', name: 'Coffee Honey', price: 140, src: '/products/chestnut-noir.png' },
    { id: 'neem', name: 'Neem Honey', price: 120, src: '/products/himalayan-neem.png' },
    { id: 'vanilla', name: 'Vanilla Honey', price: 130, src: '/products/white-kiawe.png' },
    { id: 'acacia', name: 'Acacia Honey', price: 145, src: '/products/linden-silver.png' },
    { id: 'sidr', name: 'Sidr Honey', price: 350, src: '/products/royal-sidr.png' },
  ];

  const [sortBy, setSortBy] = useState('Featured');
  
  const sortedProducts = useMemo(() => {
    let list = [...initialProducts];
    if (sortBy === 'Price: Low to High') {
      return list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      return list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Name: A to Z') {
      return list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Featured: Priority to combo and tagged items
      return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [sortBy]);

  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        title="Shop Our Honey Collection" 
        subtitle="Premium honey sourced from the rich forests of Wayanad. Choose your favorite or try them all."
      />

      <section className="py-12 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <span className="font-label-caps text-on-surface-variant text-sm tracking-widest uppercase">Showing {sortedProducts.length} Results</span>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-label-caps text-xs text-on-surface-variant/60 uppercase tracking-widest whitespace-nowrap">Sort by</span>
            <div className="relative w-full md:w-64 group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-surface-container-low border border-primary/20 text-on-surface font-label-caps text-[10px] md:text-xs py-3 px-4 focus:outline-none focus:border-primary-container cursor-pointer rounded-sm appearance-none hover:bg-surface-container transition-colors"
              >
                <option className="bg-[#0A0A0A] text-on-surface py-2">Featured</option>
                <option className="bg-[#0A0A0A] text-on-surface py-2">Price: Low to High</option>
                <option className="bg-[#0A0A0A] text-on-surface py-2">Price: High to Low</option>
                <option className="bg-[#0A0A0A] text-on-surface py-2">Name: A to Z</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary-container opacity-50">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="glass-panel p-4 md:p-6 mb-4 md:mb-6 transition-all duration-700 group-hover:border-primary-container group-hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] rounded-2xl relative overflow-hidden aspect-square flex items-center justify-center bg-white/5">
                    {product.tag && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                          ★ {product.tag}
                        </span>
                      </div>
                    )}
                    <div className="relative w-full h-full">
                      <Image
                        className="object-contain rounded-lg transition-transform duration-1000 group-hover:scale-110"
                        alt={product.name}
                        src={product.src}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-headline-md text-lg md:text-headline-md text-on-surface group-hover:text-primary-container transition-colors line-clamp-1">{product.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="font-display-md text-xl text-primary-container">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="font-body-md text-sm text-on-surface-variant/50 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
