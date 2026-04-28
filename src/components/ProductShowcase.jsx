'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const pinRef = useRef(null);

  const products = [
    { id: 'wild-flower', name: 'Wild Flower Honey', desc: 'A rich blend of multi-floral nectars from the deep forest.', src: '/products/royal-sidr.png' },
    { id: 'eucalyptus', name: 'Eucalyptus Honey', desc: 'Distinctly aromatic with subtle herbal undertones.', src: '/products/wild-eucalyptus.png' },
    { id: 'cinnamon', name: 'Cinnamon Honey', desc: 'Infused with the warmth of naturally sourced spice.', src: '/products/thyme-essence.png' },
    { id: 'lay-bee', name: 'Lay Bee Honey', desc: 'Rare medicinal honey from stingless forest bees.', src: '/products/manuka.png' },
    { id: 'coffee', name: 'Coffee Honey', desc: 'Rich, dark, and captured from blooming coffee estates.', src: '/products/chestnut-noir.png' },
    { id: 'neem', name: 'Neem Honey', desc: 'Potent therapeutic honey with bitter-sweet notes.', src: '/products/himalayan-neem.png' },
    { id: 'vanilla', name: 'Vanilla Honey', desc: 'Smooth, creamy, and delicately sweet essence.', src: '/products/white-kiawe.png' },
    { id: 'acacia', name: 'Acacia Honey', desc: 'Light, clear, and exceptionally mild in flavor.', src: '/products/linden-silver.png' },
    { id: 'sidr', name: 'Sidr Honey', desc: 'The most elusive and prestigious of all varietals.', src: '/products/royal-sidr.png' },
    { id: 'litchi', name: 'Litchi Honey', desc: 'Fruit-forward sweetness with a refreshing finish.', src: '/products/tupelo-blossom.png' },
    { id: 'multifloral', name: 'Multifloral Honey', desc: 'A balanced spectrum of seasonal forest blooms.', src: '/products/heather-moorland.png' },
    { id: 'tulsi', name: 'Tulsi Honey', desc: 'Sacred herbal honey with powerful wellness benefits.', src: '/products/orange-grove.png' },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = sectionRef.current.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      const st = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: `+=${scrollWidth}`,
        pin: pinRef.current,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(sectionRef.current, {
          x: -amountToScroll,
          ease: 'none'
        })
      });

      return () => {
        st.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set(sectionRef.current, { x: 0 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      ref={triggerRef} 
      className="bg-surface-container-low lg:min-h-screen overflow-hidden lg:overflow-visible"
    >
      <div ref={pinRef} className="w-full">
        <div 
          ref={sectionRef} 
          className="relative flex flex-col lg:flex-row items-center px-6 md:px-16 lg:h-screen w-full lg:w-fit py-16 lg:py-0 gap-10 md:gap-12"
        >
          {/* Section Header Card */}
          <div className="w-full lg:min-w-[500px] flex flex-col justify-center lg:pr-12 text-center lg:text-left pt-10 lg:pt-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-label-caps text-[10px] md:text-label-caps text-primary-container mb-4 block uppercase tracking-[0.2em]"
            >
              SENSORY JOURNEY
            </motion.span>
            <h2 className="font-display-md text-3xl md:text-5xl lg:text-display-md text-on-surface leading-tight">
              The Spectrum <br className="hidden lg:block" />
              of Excellence
            </h2>
            <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant mt-6 md:mt-8 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Explore our curated selection of 12 elusive varietals, each a unique expression of its geographical provenance.
            </p>
          </div>

          {/* Product Grid (Mobile) / Row (Desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-4 md:gap-8 lg:gap-12 w-full lg:w-fit mt-8 lg:mt-0 pb-10 lg:pb-0">
            {products.map((product, i) => (
              <Link 
                key={product.id}
                href={`/product/${product.id}`}
                className="w-full lg:min-w-[450px] group flex flex-col justify-between cursor-pointer"
              >
                <div className="glass-panel p-3 md:p-6 mb-3 md:mb-8 transition-all duration-700 group-hover:border-primary-container group-hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] rounded-2xl relative overflow-hidden aspect-square lg:h-[60vh] flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      className="object-contain rounded-lg transition-transform duration-1000 group-hover:scale-110"
                      alt={product.name}
                      src={product.src}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 450px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-1">
                  <h3 className="font-headline-md text-xs md:text-lg lg:text-headline-md text-[#D4AF37] mb-0.5 md:mb-2">{product.name}</h3>
                  <p className="font-body-md text-[9px] md:text-xs lg:text-body-md text-on-surface-variant leading-relaxed line-clamp-2 lg:line-clamp-none">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Spacer at the end for Desktop */}
          <div className="hidden lg:block min-w-[200px]"></div>
        </div>
      </div>
    </section>
  );
}
