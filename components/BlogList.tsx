'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';

const categories = ['All', 'Acne', 'Hair Care', 'Skin Care', 'Pigmentation', 'Anti Aging'];

export function BlogList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.summary.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div>
      <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="relative block w-full">
          <span className="sr-only">Search posts</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search articles"
            className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${category === item ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-900'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft transition hover:shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">{post.category}</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
