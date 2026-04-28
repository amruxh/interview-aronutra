"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";

const contentSets = [
  {
    left: {
      title: "Made in Wayanad",
      desc: "Sourced from the lush, rich forests of the Western Ghats, Kerala.",
    },
    right: {
      title: "12 Variety Combo",
      desc: "A premium collection of 12 unique honey varieties in one box.",
    },
  },
  {
    left: {
      title: "Premium Gift Box",
      desc: "Elegant forest-green octagonal case, perfect for gifting excellence.",
    },
    right: {
      title: "100% Pure & Natural",
      desc: "Unprocessed, raw honey with no added sugar or preservatives.",
    },
  },
  {
    left: {
      title: "Rich Forest Flora",
      desc: "Each jar captures the distinct essence of wild medicinal blooms.",
    },
    right: {
      title: "Launch Offer",
      desc: "Experience the collection now at a limited-time price of ₹1,299.",
    },
  },
];

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const leftContentRefs = useRef([]);
  const rightContentRefs = useRef([]);

  const frameCount = 151;
  const getFramePath = (index) => {
    let frameName;
    if (index >= 42 && index <= 99) {
      frameName = `0${index}`;
    } else {
      frameName = `${index}`;
    }
    return `/hero-frames/${frameName}.jpg`;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      const isMobile = window.innerWidth < 1024;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context2d = canvas.getContext("2d");

      canvas.width = 1920;
      canvas.height = 1080;

      const images = [];
      const sequence = { frame: 0 };

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        images.push(img);
      }

      const render = () => {
        const img = images[sequence.frame];
        if (img && img.complete) {
          context2d.clearRect(0, 0, canvas.width, canvas.height);
          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = img.width / img.height;
          let drawWidth, drawHeight, drawX, drawY;

          if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
            drawX = (canvas.width - drawWidth) / 2;
            drawY = 0;
          } else {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            drawX = 0;
            drawY = (canvas.height - drawHeight) / 2;
          }
          context2d.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      };

      if (images[0]) images[0].onload = render;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=400%" : "+=800%",
          scrub: 1,
          pin: true,
          onUpdate: render,
          anticipatePin: 1,
        },
      });

      masterTl.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 12,
      }, 0);

      if (contentRef.current) {
        masterTl.to(contentRef.current, {
          opacity: 0,
          y: -100,
          duration: 2,
          ease: "power2.inOut",
        }, 0.5);
      }

      const setDuration = 2;
      const setGap = 1.5;

      contentSets.forEach((_, index) => {
        const leftRef = leftContentRefs.current[index];
        const rightRef = rightContentRefs.current[index];

        if (leftRef && rightRef) {
          const startTime = 3 + index * (setDuration + setGap);

          masterTl.fromTo(leftRef,
            { opacity: 0, x: -50, filter: "blur(10px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out" },
            startTime
          );
          masterTl.fromTo(rightRef,
            { opacity: 0, x: 50, filter: "blur(10px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out" },
            startTime
          );

          masterTl.to(leftRef,
            { opacity: 0, x: -50, filter: "blur(10px)", duration: 1.5, ease: "power3.in" },
            startTime + setDuration
          );
          masterTl.to(rightRef,
            { opacity: 0, x: 50, filter: "blur(10px)", duration: 1.5, ease: "power3.in" },
            startTime + setDuration
          );
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative w-full bg-surface">
      <header
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 md:w-1/3 bg-linear-to-r from-background via-background/10 to-transparent pointer-events-none opacity-80 md:opacity-90"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 md:w-1/3 bg-linear-to-l from-background via-background/10 to-transparent pointer-events-none opacity-80 md:opacity-90"></div>
          <div className="md:hidden absolute top-0 right-0 w-full h-1/2 bg-linear-to-b from-background/60 via-transparent to-transparent pointer-events-none"></div>
          <div className="md:hidden absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div
            ref={contentRef}
            className="glass-panel p-5 md:p-8 max-w-lg md:max-w-2xl text-center md:text-left border-t border-l border-white/10 rounded-xl mx-4 pointer-events-auto"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Gift Box Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-28 md:w-44 aspect-square shrink-0"
              >
                <NextImage 
                  src="/gifting-box.png"
                  alt="Mellifera Gold Combo Gift Box"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                  priority
                />
              </motion.div>

              <div className="flex-1 flex flex-col items-center md:items-start">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-label-caps text-[9px] md:text-[11px] text-primary-container mb-2 block uppercase tracking-[0.2em]"
                >
                  LIMITED TIME LAUNCH OFFER
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display-md text-2xl md:text-4xl mb-3 md:mb-4 text-[#FDF5E6] leading-tight"
                >
                  Mellifera Gold - <br className="hidden md:block" />
                  Premium Experience
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-body-md text-xs md:text-sm text-on-surface-variant mb-5 md:mb-6 leading-relaxed"
                >
                  Crafted in Wayanad, this exclusive 12-variety collection brings nature's richness to every jar.
                </motion.p>
                
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <span className="text-on-surface-variant/50 line-through text-xs md:text-sm">₹1,499</span>
                  <span className="text-primary-container text-xl md:text-2xl font-light tracking-wide">₹1,299</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Link href="/gifting" className="flex-1 sm:flex-none">
                    <motion.button className="w-full bg-primary-container text-on-primary-container px-6 md:px-8 py-2.5 md:py-3.5 font-label-caps text-[10px] md:text-[11px] transition-all duration-500 hover:scale-[1.02] gold-glow uppercase tracking-widest">
                      Buy Now
                    </motion.button>
                  </Link>
                  <Link href="/collection" className="flex-1 sm:flex-none">
                    <motion.button className="w-full border border-primary-container/40 text-primary-container px-6 md:px-8 py-2.5 md:py-3.5 font-label-caps text-[10px] md:text-[11px] hover:bg-primary-container/5 transition-all uppercase tracking-widest">
                      Explore
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none px-4 md:px-16">
          <div className="absolute bottom-[12%] left-[4%] md:left-[4%] w-full max-w-[200px] md:max-w-[400px]">
            {contentSets.map((set, i) => (
              <div
                key={`left-${i}`}
                ref={(el) => (leftContentRefs.current[i] = el)}
                className="opacity-0 absolute bottom-0 left-0 w-full"
              >
                <h3 className="font-display-md text-lg md:text-3xl text-[#FDF5E6] mb-2 md:mb-4 drop-shadow-lg">{set.left.title}</h3>
                <p className="font-body-md text-[10px] md:text-body-md text-on-surface-variant/70 leading-relaxed line-clamp-3 md:line-clamp-none">{set.left.desc}</p>
              </div>
            ))}
          </div>
          <div className="absolute top-[25%] right-[4%] md:right-[4%] w-full max-w-[200px] md:max-w-[400px] text-right">
            {contentSets.map((set, i) => (
              <div
                key={`right-${i}`}
                ref={(el) => (rightContentRefs.current[i] = el)}
                className="opacity-0 absolute top-0 right-0 w-full"
              >
                <h3 className="font-display-md text-lg md:text-3xl text-[#FDF5E6] mb-2 md:mb-4 drop-shadow-lg">{set.right.title}</h3>
                <p className="font-body-md text-[10px] md:text-body-md text-on-surface-variant/70 leading-relaxed line-clamp-3 md:line-clamp-none">{set.right.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </section>
  );
}
