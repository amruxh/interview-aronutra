import { Noto_Serif, Work_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "AroNutra | The Twelve-Fold Liquid Gold Collection",
  description: "Ultra-premium luxury honey collection",
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${workSans.variable} bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container antialiased`}
      >
        <CartProvider>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
