import Link from 'next/link';

const faqItems = [
  { question: 'Is acne treatment safe for all ages?', answer: 'Yes. Our acne protocols are tailored for adult and adolescent skin, with medical supervision throughout treatment.' },
  { question: 'How many sessions are typically needed?', answer: 'Most clients see visible improvement in 4 to 6 sessions, depending on skin type and acne severity.' },
  { question: 'Will treatment reduce scarring?', answer: 'Our combined approach targets active acne and helps improve skin texture, reducing the appearance of scars over time.' }
];

export default function AcneTreatmentPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Acne Treatment</p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Clinical acne solutions with gentle, lasting results.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600">Healing Clinic delivers medically guided acne care to reduce inflammation, restore clarity, and protect your skin from future breakout cycles.</p>
          </div>
          <div className="rounded-[32px] bg-[url('/images/treatments/acne-treatment/acne-treatment.png')] bg-cover bg-center p-10 shadow-glow" style={{ minHeight: 420 }} />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Treatment overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Custom acne plans combining clinical exfoliation, targeted therapies, and dermatologist-selected maintenance to calm skin and strengthen resilience.</p>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Benefits</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              <li>Reduce breakouts and inflammation</li>
              <li>Improve skin texture and tone</li>
              <li>Minimize acne scarring over time</li>
            </ul>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Expected results</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Clearer, calmer skin with balanced oil production and a professional plan for long-term skin health.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">Procedure steps</h2>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <li>1. Comprehensive skin evaluation and medical history review.</li>
              <li>2. Targeted treatment selection, including peels, light therapy or prescription care.</li>
              <li>3. Guided treatment session with follow-up recommendations.</li>
              <li>4. Personalized maintenance plan for lasting skin clarity.</li>
            </ol>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-3xl border border-slate-200 p-5 transition hover:border-gold">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-950">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-white via-slate-100 to-white p-10 shadow-glow">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Ready for a clear skin plan?</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Book your acne consultation with our specialist team.</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/book-appointment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
                Book Appointment
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                Contact Clinic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
