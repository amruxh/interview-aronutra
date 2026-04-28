'use client';

import React from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Leaf, Droplets, ShieldCheck, Stars } from 'lucide-react';
import Image from 'next/image';

export default function ProcessPage() {
  const steps = [
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Reverent Harvest",
      desc: "Our master apiarists work in harmony with nature, harvesting only the surplus nectar during peak floral blooms to ensure the colony's vitality."
    },
    {
      icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cold-Pressed Purity",
      desc: "We never heat or micro-filter our honey. Every jar is cold-pressed to preserve the delicate enzymes, pollen, and nuanced floral profiles."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Twelve-Fold Analysis",
      desc: "Each batch undergoes rigorous testing for purity, pollen count, and therapeutic markers, ensuring the highest MGO and NPA levels."
    },
    {
      icon: <Stars className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Artisanal Aging",
      desc: "Select varietals are aged in controlled environments, allowing their complex flavor profiles to reach their peak maturity before bottling."
    }
  ];

  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        title="Artisanal Process" 
        subtitle="The sacred journey from the bloom to the collection box. A commitment to purity that transcends the industry standard."
      />

      <section className="py-12 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display-md text-2xl md:text-display-md mb-6 md:mb-8 leading-tight">Harmony with the Hive</h2>
            <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant leading-relaxed">
              At AroNutra, we believe that true luxury is found in nature's unadulterated perfection. Our process is one of minimal intervention and maximal reverence. We prioritize the health of the hive above all, ensuring a sustainable cycle that honors the bees as our primary partners.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video relative rounded-2xl overflow-hidden glass-panel border border-white/10 group shadow-2xl"
          >
            <Image 
              src="/harmony.png"
              alt="Harmony with the Hive - AroNutra Artisanal Process"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-xl border-t border-white/5 hover:bg-surface-container-high transition-colors duration-500"
            >
              <div className="text-primary-container mb-4 md:mb-6">{step.icon}</div>
              <h3 className="font-headline-md text-lg md:text-headline-md mb-3 md:mb-4">{step.title}</h3>
              <p className="font-body-md text-xs md:text-body-md text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
