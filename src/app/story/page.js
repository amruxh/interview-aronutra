'use client';

import React from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { History, Globe, Heart, Award } from 'lucide-react';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        title="Our Story" 
        subtitle="A legacy of gold, born from the deepest forests and highest peaks. Discover the obsession behind AroNutra."
      />

      <section className="py-12 md:py-24 px-6 md:px-16 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <History className="w-10 h-10 md:w-12 md:h-12 text-primary-container mx-auto mb-6 md:mb-8" />
          <h2 className="font-display-md text-2xl md:text-display-md mb-6 md:mb-8 leading-tight">A Decades-Long Obsession</h2>
          <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant leading-relaxed text-balance">
            AroNutra began with a single jar of Sidr honey from the Wadi Do’an valley. The complexity of its flavor and the depth of its healing properties sparked a lifelong quest to curate the world's most exceptional nectars, culminating in the Mellifera Gold collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
          {[
            { icon: <Globe />, label: "Global Reach", detail: "Sourcing from 5 continents and the most remote ecological niches." },
            { icon: <Heart />, label: "Ethical Soul", detail: "Protecting the pollinators and the indigenous wisdom of our harvesters." },
            { icon: <Award />, label: "Gold Standard", detail: "Multiple international awards for quality, purity, and presentation." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-4 md:mb-6">
                {item.icon}
              </div>
              <h3 className="font-headline-md text-lg md:text-headline-md mb-2">{item.label}</h3>
              <p className="font-body-md text-xs md:text-body-md text-on-surface-variant">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
