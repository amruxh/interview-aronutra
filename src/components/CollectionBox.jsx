import React from 'react';

export default function CollectionBox() {
  const varieties = [
    { no: '01', name: 'Wild Flower Honey' },
    { no: '02', name: 'Eucalyptus Honey' },
    { no: '03', name: 'Cinnamon Honey' },
    { no: '04', name: 'Lay Bee Honey' },
    { no: '05', name: 'Coffee Honey' },
    { no: '06', name: 'Neem Honey' },
    { no: '07', name: 'Vanilla Honey' },
    { no: '08', name: 'Acacia Honey' },
    { no: '09', name: 'Sidr Honey' },
    { no: '10', name: 'Litchi Honey' },
    { no: '11', name: 'Multifloral Honey' },
    { no: '12', name: 'Tulsi Honey' }
  ];

  return (
    <section className="py-12 md:py-24 px-6 md:px-16 bg-surface">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
        <h2 className="font-display-md text-3xl md:text-display-md mb-6">Mellifera Gold – 12 Variety Collection</h2>
        <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant">Twelve unique expressions of nature, housed in premium glass vials and presented in an elegant gift box.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        {varieties.map((honey, index) => (
          <div key={index} className="text-center p-4 md:p-8 glass-panel rounded-xl group transition-all duration-500 hover:bg-surface-container-high border-t border-white/5">
            <span className="font-label-caps text-[9px] md:text-label-caps text-primary-container/60 mb-1 md:mb-2 block">NO. {honey.no}</span>
            <p className="font-headline-md text-on-surface group-hover:text-primary-container transition-colors text-xs md:text-base tracking-wide uppercase">
              {honey.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
