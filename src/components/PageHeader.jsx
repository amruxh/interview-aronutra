'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="pt-24 md:pt-32 pb-8 md:pb-12 px-6 md:px-16 text-center border-b border-white/5 bg-linear-to-b from-surface-container-low to-surface">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-label-caps text-[10px] md:text-label-caps text-primary-container mb-3 md:mb-4 block"
      >
        ARONUTRA
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display-md text-3xl md:text-display-md text-on-surface mb-3 md:mb-4 px-4 md:px-0"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body-lg text-sm md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
