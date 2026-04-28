'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024;
      const threshold = pathname === "/" ? window.innerHeight * (isMobile ? 4 : 8) : 20;
      setIsScrolled(window.scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'The Collection', href: '/collection' },
    { name: 'Artisanal Process', href: '/process' },
    { name: 'Our Story', href: '/story' },
    { name: 'Gifting', href: '/gifting' },
  ];

  const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
      <path 
        d="M20 35C20 35 34 26 34 16C34 11 30 7 25 7C22 7 20 9 20 9C20 9 18 7 15 7C10 7 6 11 6 16C6 26 20 35 20 35Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        className="opacity-90"
      />
      <path 
        d="M20 12V32" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="opacity-40"
      />
      <circle cx="20" cy="35" r="1.5" fill="currentColor" />
    </svg>
  );

  return (
    <>
      <div className="fixed top-0 w-full z-50 pointer-events-none">
        
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full flex justify-between items-center px-6 lg:px-10 xl:px-16 py-4 md:py-6 transition-all duration-700 pointer-events-auto ${
            isScrolled || isMenuOpen
              ? 'bg-surface/90 backdrop-blur-3xl border-b border-primary/20 shadow-[0_10px_50px_rgba(0,0,0,0.5)]' 
              : 'bg-transparent border-b-0 shadow-none'
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 md:gap-3 group z-50">
            <div className="text-primary group-hover:scale-110 transition-transform duration-500">
              <LogoIcon />
            </div>
            <span className="font-display-md text-xl md:text-2xl xl:text-3xl tracking-tight text-primary hover:opacity-80 transition-all">
              AroNutra
            </span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 xl:gap-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <Link 
                  className={`font-label-caps text-[10px] xl:text-label-caps uppercase transition-all duration-700 relative group ${pathname === link.href ? 'text-primary' : 'text-on-surface/60 hover:text-primary'}`} 
                  href={link.href}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left ${pathname === link.href ? 'scale-x-100' : ''}`}></span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-10 z-50">
            {/* Cart Icon */}
            <Link href="/cart" className="relative group">
              <ShoppingBag size={20} className="text-primary cursor-pointer group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Desktop Shop Button */}
            <Link href="/collection" className="hidden md:flex bg-primary text-on-primary px-6 lg:px-8 xl:px-10 py-2.5 lg:py-3 xl:py-3.5 font-label-caps text-[10px] xl:text-label-caps hover:bg-white hover:text-black transition-all duration-500 rounded-sm uppercase tracking-widest whitespace-nowrap">
              Shop Now
            </Link>

            {/* Hamburger Menu Toggle */}
            <button 
              className="lg:hidden text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-40 bg-surface flex flex-col pt-40 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={`mobile-${link.name}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    href={link.href}
                    className={`font-display-md text-xl transition-colors ${pathname === link.href ? 'text-primary' : 'text-on-surface/60'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link 
                  href="/collection" 
                  className="bg-primary text-on-primary px-8 py-5 font-label-caps text-center block rounded-sm uppercase tracking-widest"
                >
                  Explore Collection
                </Link>
              </motion.div>
            </div>

            {/* Ambient background decorative elements */}
            <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none">
              <span className="font-label-caps text-[100px] text-primary block leading-none">A</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
