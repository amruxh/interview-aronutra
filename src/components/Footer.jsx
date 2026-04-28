import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 px-6 md:px-16 flex flex-col items-center space-y-8 bg-[#00150F] border-t-[0.5px] border-[#D4AF37]/20">
      <div className="text-xl font-medium text-[#FDF5E6] mb-2 md:mb-4">AroNutra</div>
      
      {/* Newsletter Signup */}
      <div className="max-w-md w-full mb-8 md:mb-12 px-4">
        <h4 className="font-label-caps text-[10px] md:text-label-caps text-center text-primary-container mb-4 md:mb-6 uppercase tracking-widest">Join the Registry</h4>
        <div className="flex border-b border-primary-container/40">
          <input 
            className="bg-transparent border-none focus:ring-0 w-full font-label-caps text-[10px] md:text-label-caps text-[#FDF5E6] py-3 uppercase" 
            placeholder="YOUR EMAIL ADDRESS" 
            type="email" 
          />
          <button className="text-primary-container font-label-caps text-[10px] md:text-label-caps hover:text-[#FDF5E6] transition-colors whitespace-nowrap ml-4">SUBSCRIBE</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
        <Link className="font-['Noto_Serif'] font-light tracking-widest text-[9px] md:text-xs uppercase text-[#FDF5E6]/50 hover:text-[#D4AF37] transition-colors duration-1000" href="/">Sustainability</Link>
        <Link className="font-['Noto_Serif'] font-light tracking-widest text-[9px] md:text-xs uppercase text-[#FDF5E6]/50 hover:text-[#D4AF37] transition-colors duration-1000" href="/">Shipping & Returns</Link>
        <Link className="font-['Noto_Serif'] font-light tracking-widest text-[9px] md:text-xs uppercase text-[#FDF5E6]/50 hover:text-[#D4AF37] transition-colors duration-1000" href="/">Contact Us</Link>
        <Link className="font-['Noto_Serif'] font-light tracking-widest text-[9px] md:text-xs uppercase text-[#FDF5E6]/50 hover:text-[#D4AF37] transition-colors duration-1000" href="/">Privacy Policy</Link>
      </div>

      <div className="pt-8 md:pt-10 font-['Noto_Serif'] font-light tracking-widest text-[8px] md:text-xs uppercase text-[#FDF5E6]/50 text-center">
        © 2024 AroNutra. Handcrafted Excellence.
      </div>
    </footer>
  );
}
