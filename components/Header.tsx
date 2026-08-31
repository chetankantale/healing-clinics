'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-slate-900" onClick={() => setIsMenuOpen(false)}>
          <img src="/logo.png" alt="Healing Clinic" className="h-11 w-11 shrink-0 rounded-full object-cover" />
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Healing Clinic</p>
            <p className="text-base font-semibold">Cosmetology & Aesthetics</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+917447681111" className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 md:inline-flex">
            <Phone size={16} /> Call
          </a>
          <a href="https://wa.me/917447681111" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800">
            <MessageSquare size={16} /> WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 shadow-lg md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
