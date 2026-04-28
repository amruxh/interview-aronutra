'use client';

import React, { use } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, Thermometer, Shield, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const productsData = {
  'mellifera-gold-combo': { 
    name: 'Mellifera Gold Combo (12 Variety)', 
    price: 1299, 
    originalPrice: 1499,
    image: '/gifting-box.png', 
    desc: 'The ultimate honey experience. An elegant forest-green octagonal case featuring our complete collection of 12 signature varietals. Perfect for gifting or personal exploration of nature\'s diverse nectar profiles.', 
    specs: { potency: 'Multi', source: 'Western Ghats', purity: '100% Raw' } 
  },
  'pure-honey-500': { 
    name: 'Pure Honey (500g)', 
    price: 699, 
    image: '/products/white-kiawe.png', 
    desc: 'Our signature multi-floral honey in a larger format. Sustainably harvested from the wild blossoms of Wayanad, providing a rich, balanced sweetness for your daily wellness experience.', 
    specs: { potency: 'High', source: 'Wayanad', purity: '100% Raw' } 
  },
  'pure-honey-250': { 
    name: 'Pure Honey (250g)', 
    price: 399, 
    image: '/products/white-kiawe.png', 
    desc: 'The perfect companion for your morning tea or breakfast. This raw, unprocessed honey captures the essence of forest wildflowers in every spoonful.', 
    specs: { potency: 'High', source: 'Wayanad', purity: '100% Raw' } 
  },
  'wild-flower': { 
    name: 'Wild Flower Honey', 
    price: 150, 
    image: '/products/royal-sidr.png', 
    desc: 'A vibrant and complex honey collected from thousands of unique wildflowers blooming deep within the Wayanad forests.', 
    specs: { potency: 'Medium', source: 'Deep Forest', purity: '100% Raw' } 
  },
  'eucalyptus': { 
    name: 'Eucalyptus Honey', 
    price: 150, 
    image: '/products/wild-eucalyptus.png', 
    desc: 'Distinctly aromatic with a refreshing herbal finish. Known for its soothing properties and unique menthol-like undertones.', 
    specs: { potency: 'High', source: 'Highlands', purity: '100% Raw' } 
  },
  'cinnamon': { 
    name: 'Cinnamon Honey', 
    price: 160, 
    image: '/products/thyme-essence.png', 
    desc: 'A naturally warm and spicy profile. This honey carries the essence of wild cinnamon bark found in the spice gardens of Kerala.', 
    specs: { potency: 'Active', source: 'Spice Gardens', purity: '100% Raw' } 
  },
  'lay-bee': { 
    name: 'Lay Bee Honey', 
    price: 320, 
    image: '/products/manuka.png', 
    desc: 'Extremely rare medicinal honey produced by stingless bees. Prize for its high antioxidant content and unique tangy-sweet profile.', 
    specs: { potency: 'Ultra', source: 'Medicinal', purity: '100% Raw' } 
  },
  'coffee': { 
    name: 'Coffee Honey', 
    price: 140, 
    image: '/products/chestnut-noir.png', 
    desc: 'Rich, dark, and sophisticated. Collected during the brief flowering season of coffee estates, offering subtle notes of roasted beans.', 
    specs: { potency: 'Medium', source: 'Estates', purity: '100% Raw' } 
  },
  'neem': { 
    name: 'Neem Honey', 
    price: 120, 
    image: '/products/himalayan-neem.png', 
    desc: 'Dark and intense with a signature bitter-sweet complexity. Widely used in traditional wellness for its powerful purifying properties.', 
    specs: { potency: 'Strong', source: 'Arid Forest', purity: '100% Raw' } 
  },
  'vanilla': { 
    name: 'Vanilla Honey', 
    price: 130, 
    image: '/products/white-kiawe.png', 
    desc: 'A delicate and creamy sweetness. Naturally smooth with soft floral notes reminiscent of fresh vanilla beans.', 
    specs: { potency: 'Mild', source: 'Foothills', purity: '100% Raw' } 
  },
  'acacia': { 
    name: 'Acacia Honey', 
    price: 145, 
    image: '/products/linden-silver.png', 
    desc: 'Exceptionally clear and liquid. Known for its mild, sweet flavor that doesn\'t overpower other ingredients.', 
    specs: { potency: 'Light', source: 'Valley', purity: '100% Raw' } 
  },
  'sidr': { 
    name: 'Sidr Honey', 
    price: 350, 
    image: '/products/royal-sidr.png', 
    desc: 'The "Liquid Gold" of the honey world. Highly prestigious and rare, collected from the blossoms of the sacred Sidr tree.', 
    specs: { potency: 'Elite', source: 'Ancient', purity: '100% Raw' } 
  }
};

export default function ProductPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const product = productsData[id] || productsData['mellifera-gold-combo'];
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-surface">
      <div className="pt-24 md:pt-32 px-6 md:px-16 max-w-7xl mx-auto pb-20">
        <Link href="/collection" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary-container transition-colors font-label-caps text-[10px] md:text-label-caps mb-8 md:mb-12 uppercase tracking-widest">
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square glass-panel p-6 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="relative w-full h-full">
              <Image src={product.image} alt={product.name} fill className="object-contain" priority />
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label-caps text-[10px] md:text-label-caps text-primary-container mb-3 md:mb-4 block uppercase tracking-widest"
            >
              PREMIUM VARIETAL
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display-md text-3xl md:text-5xl lg:text-display-lg text-[#FDF5E6] mb-6 md:mb-8 leading-tight"
            >
              {product.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body-md text-sm md:text-body-lg text-on-surface-variant mb-8 md:mb-12 leading-relaxed"
            >
              {product.desc}
            </motion.p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16 border-y border-white/5 py-8 md:py-12">
              {[
                { icon: <Droplet size={20} />, label: "Potency", val: product.specs.potency },
                { icon: <Thermometer size={20} />, label: "Source", val: product.specs.source },
                { icon: <Shield size={20} />, label: "Purity", val: product.specs.purity }
              ].map((spec, i) => (
                <div key={i} className="text-center">
                  <div className="text-primary-container/40 flex justify-center mb-2 md:mb-3">{spec.icon}</div>
                  <div className="font-label-caps text-[8px] md:text-[10px] text-on-surface-variant/60 mb-1 uppercase tracking-widest">{spec.label}</div>
                  <div className="font-headline-md text-xs md:text-headline-md text-on-surface uppercase">{spec.val}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-light text-[#D4AF37]">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-sm md:text-base text-on-surface-variant line-through opacity-40">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <button 
                onClick={() => addToCart({ id, ...product })}
                className="w-full sm:grow bg-primary-container text-on-primary-container py-4 md:py-5 font-label-caps text-[10px] md:text-label-caps hover:scale-[1.02] transition-transform flex items-center justify-center gap-4 gold-glow uppercase tracking-widest"
              >
                <ShoppingBag size={18} /> Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
