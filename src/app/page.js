import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import ProductShowcase from '../components/ProductShowcase';
import CollectionBox from '../components/CollectionBox';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ProductShowcase />
      <CollectionBox />
      <Features />
      <Footer />
    </>
  );
}