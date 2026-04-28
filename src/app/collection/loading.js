'use client';

import React from 'react';

export default function CollectionLoading() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="pt-24 md:pt-40 px-6 md:px-16 max-w-7xl mx-auto pb-20">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="w-64 h-12 md:h-20 bg-white/5 rounded-2xl animate-pulse"></div>
          <div className="w-full max-w-2xl h-4 bg-white/5 rounded-full animate-pulse"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
          <div className="w-32 h-4 bg-white/5 rounded-full animate-pulse"></div>
          <div className="w-48 h-10 bg-white/5 rounded-lg animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-6">
              <div className="aspect-square glass-panel rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-white/10 to-white/5 animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="w-3/4 h-5 bg-white/5 rounded-lg animate-pulse"></div>
                <div className="w-1/3 h-6 bg-primary-container/10 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
