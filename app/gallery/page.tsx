'use client';

import { useMemo, useState } from 'react';
import { galleryItems } from '@/lib/content';

const categories = ['All', 'Clinic Gallery', 'Before & After Results'];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active !== 'All') {
      return galleryItems.filter((item) => item.category === active);
    }

    return [...galleryItems].sort((firstItem, secondItem) => Number(secondItem.category === 'Clinic Gallery') - Number(firstItem.category === 'Clinic Gallery'));
  }, [active]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Visual stories from our clinical treatments.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Browse our clinic, plus before-and-after treatment results across skin and hair concerns.</p>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)} className={`rounded-full border px-5 py-2 text-sm transition ${active === category ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-900'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.label} className="group overflow-hidden rounded-[28px] bg-white shadow-soft">
              <div className="aspect-[4/5] bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">{item.category}</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
