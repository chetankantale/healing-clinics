import { faqItems } from '@/lib/content';

export default function FAQPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Frequently asked questions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Answers to common questions about our dermatology treatments, consultations, and clinic experience.</p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:border-gold">
              <summary className="cursor-pointer text-lg font-semibold text-slate-950">{item.question}</summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
