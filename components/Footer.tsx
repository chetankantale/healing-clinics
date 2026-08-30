import Link from 'next/link';
import { SocialIcon } from './SocialIcon';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/treatments/acne-treatment', label: 'Treatments' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Healing Clinic</p>
          <p className="max-w-sm text-slate-600">A premium dermatology and aesthetic center delivering safe, advanced treatments with personalized expert care under Dr. Supriya Ghodke.</p>
          <div className="flex items-center gap-3">
            <SocialIcon type="facebook" />
            <SocialIcon type="instagram" />
            <SocialIcon type="linkedin" />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-sm uppercase tracking-[0.3em] text-slate-500">Quick links</h2>
          <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <h2 className="text-sm uppercase tracking-[0.3em] text-slate-500">Contact</h2>
          <p>Phone: <a href="tel:+917447681111" className="text-slate-900">+91 7447 681 111</a></p>
          <p>Email: <a href="mailto:supighodke1990@gmail.com" className="text-slate-900">supighodke1990@gmail.com</a></p>
          <p>Address: <a href="https://maps.app.goo.gl/PwtJEbsksgLRP2HQ6?g_st=awb" target="_blank" rel="noopener noreferrer" className="text-slate-900">Shop no. 8, Vimal Vihar Society, Bibwewadi, Pune 411037</a></p>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © 2026 Healing Clinic. All rights reserved.
      </div>
    </footer>
  );
}
