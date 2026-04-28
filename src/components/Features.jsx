import React from 'react';

export default function Features() {
  return (
    <section className="py-stack-lg border-y border-primary-container/10">
      <div className="max-w-container-max mx-auto px-margin-edge grid md:grid-cols-2 gap-20">
        <div className="flex gap-8">
          <div className="shrink-0">
            <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-[#FDF5E6] mb-4">Zero Heat Policy</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">We never exceed 35°C during extraction. This preserves every enzyme, antioxidant, and delicate aromatic molecule that commercial heat-processing destroys.</p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="shrink-0">
            <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-[#FDF5E6] mb-4">Artisanal Harvest</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Our apiaries are located in protected biodiversity zones. We only harvest the surplus honey, ensuring the hive’s health remains our absolute priority.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
