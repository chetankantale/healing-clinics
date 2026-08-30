import { testimonials } from '@/lib/content';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Testimonials</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Trusted stories from our patients.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Read verified patient experiences and our premium care impact on skin and hair journeys.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2 text-gold">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-5 w-5" />
                ))}
              </div>
              <p className="mt-6 text-lg font-semibold text-slate-950">{item.quote}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-500">{item.name}</p>
              <p className="text-sm text-slate-600">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
