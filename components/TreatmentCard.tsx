import Link from 'next/link';
import { Star } from 'lucide-react';

export function TreatmentCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group block rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
        <Star className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <p className="mt-6 text-sm font-semibold text-slate-900">Learn more →</p>
    </Link>
  );
}
