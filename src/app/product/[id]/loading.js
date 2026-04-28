'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-surface pt-24 md:pt-32 px-6 md:px-16 max-w-7xl mx-auto pb-20">
      <div className="w-32 h-4 bg-white/5 rounded-full mb-12 animate-pulse"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Skeleton */}
        <div className="aspect-square glass-panel rounded-3xl border border-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-white/10 to-white/5 animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="w-24 h-3 bg-primary-container/20 rounded-full animate-pulse"></div>
            <div className="w-full h-12 md:h-16 bg-white/5 rounded-xl animate-pulse"></div>
            <div className="w-3/4 h-12 md:h-16 bg-white/5 rounded-xl animate-pulse"></div>
          </div>

          <div className="space-y-4">
            <div className="w-full h-4 bg-white/5 rounded-full animate-pulse"></div>
            <div className="w-full h-4 bg-white/5 rounded-full animate-pulse"></div>
            <div className="w-2/3 h-4 bg-white/5 rounded-full animate-pulse"></div>
          </div>

          {/* Specs Skeleton */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 border-y border-white/5 py-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="w-8 h-8 bg-primary-container/10 rounded-full animate-pulse"></div>
                <div className="w-12 h-2 bg-white/5 rounded-full animate-pulse"></div>
                <div className="w-16 h-4 bg-white/5 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-10 pt-4">
            <div className="w-32 h-10 bg-[#D4AF37]/20 rounded-lg animate-pulse"></div>
            <div className="grow h-14 bg-primary-container/10 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
