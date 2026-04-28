'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // List of critical assets to track
    const assets = [
      '/gifting-box.png',
      '/harmony.png',
      '/products/royal-sidr.png',
      '/products/wild-eucalyptus.png',
      '/products/thyme-essence.png',
      '/products/manuka.png',
      '/products/chestnut-noir.png',
      '/products/himalayan-neem.png',
      '/products/white-kiawe.png',
      '/products/linden-silver.png',
      '/products/tupelo-blossom.png',
      '/products/heather-moorland.png',
      '/products/orange-grove.png',
      // Sample of hero frames to show progress
      '/hero-frames/1.jpg',
      '/hero-frames/50.jpg',
      '/hero-frames/100.jpg',
      '/hero-frames/151.jpg',
    ];

    let loadedCount = 0;
    const totalAssets = assets.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.floor((loadedCount / totalAssets) * 100);
      setProgress(newProgress);

      if (loadedCount >= totalAssets) {
        setTimeout(() => {
          setIsLoading(false);
          // Unlock scroll
          document.body.style.overflow = 'unset';
        }, 800);
      }
    };

    // Lock scroll during loading
    document.body.style.overflow = 'hidden';

    assets.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      if (img.complete) {
        updateProgress();
      } else {
        img.onload = updateProgress;
        img.onerror = updateProgress; // Count as loaded even if error to avoid stuck loader
      }
    });

    // Fallback if assets take too long
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Bee Animation Container */}
            <motion.div 
              className="relative w-32 h-32 md:w-48 md:h-48 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
              <Image 
                src="/bee-fly.gif" 
                alt="AroNutra Loading Bee" 
                fill 
                className="object-contain relative z-10"
                unoptimized // Keep GIF animation
              />
            </motion.div>

            {/* Progress Information */}
            <div className="flex flex-col items-center gap-4 px-6 w-full max-w-xs md:max-w-xl">
              <div className="flex justify-between items-end w-full mb-2 gap-8">
                <span className="font-label-caps text-[10px] md:text-xs text-primary-container tracking-[0.3em] uppercase whitespace-nowrap">The Journey Begins</span>
                <span className="font-display-md text-sm md:text-xl text-primary-container leading-none">{progress}%</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/50 via-primary to-primary/50 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-label-caps text-[9px] text-on-surface-variant/40 uppercase tracking-[0.4em] mt-2 text-center"
              >
                Liquid Gold Is Bottling...
              </motion.p>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-primary opacity-50">
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35C20 35 34 26 34 16C34 11 30 7 25 7C22 7 20 9 20 9C20 9 18 7 15 7C10 7 6 11 6 16C6 26 20 35 20 35Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="font-display-md text-sm tracking-widest uppercase">AroNutra</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
