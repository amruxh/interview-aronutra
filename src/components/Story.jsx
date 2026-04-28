import React from 'react';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="py-stack-lg bg-surface relative">
      <div className="max-w-container-max mx-auto px-margin-edge flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="w-12 h-px bg-primary-container"></div>
          <h2 className="font-display-md text-display-md text-on-surface">The Alchemy of Nature</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            At AroNutra, we do not simply produce honey; we preserve the fleeting whispers of the seasons. Each jar in our Mellifera Gold 12-variety combo represents a single geographical provenance, captured at its peak bloom. From the high-altitude lavender fields to the dense, ancient cedar forests.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant/80 italic">
            "Our bees are the master alchemists, turning sunlight and soil into liquid history."
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 border border-primary-container/20 rounded-xl"></div>
          <div className="relative aspect-4/5 w-full z-10">
            <Image
              className="object-cover rounded-lg shadow-2xl"
              alt="Artisan honey harvest process, close-up of a honeycomb with flowing golden honey, warm ethereal sunlight, dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY0G2yUggG2Xj0i_6NLa70oVPNrSeaFuKHvAQ_oG-0k0FSsND95Y7dj5fYrgf-ya22-auO5Nuhu4uEJm6yhLSCsObVlHuIlpEEytj2iVQm1OKA1FDiOlvDo12p7X3-njseJmCVO399CT_ZSWN7rfQl_AMHmPLA7P_wVGDfuUeP_Z_4kXmMXHIxGIXp7nG-IaOhzSmpQGaz0Yx3moo_N8PhMsH8Li1SS5XbQ5R7J1u9jiK5xO8fporPFWGG8pTi6K8G5BxUms9Y2qM"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
