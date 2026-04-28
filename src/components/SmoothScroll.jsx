'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const update = (time) => {
        ScrollTrigger.update();
      };
      gsap.ticker.add(update);
    });

    return () => ctx.revert();
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Refresh ScrollTrigger to ensure animations are calculated for new page content
    ScrollTrigger.refresh();
  }, [pathname, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
