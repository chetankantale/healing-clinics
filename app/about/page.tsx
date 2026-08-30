import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">About Dermacare Elite</p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">A premium dermatology clinic built for exceptional patient results.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600">At Dermacare Elite, we combine clinical dermatology, aesthetic expertise, and a luxury care environment to provide transformative skin and hair solutions for discerning patients.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Vision</p>
                <p className="mt-3 text-slate-600">Elevate confidence through healthy, luminous skin and tailored hair restoration.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Approach</p>
                <p className="mt-3 text-slate-600">Medical precision, personalized care and curated patient experiences in every treatment.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
              Contact Our Clinic
            </Link>
          </div>
          <div className="rounded-[32px] bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center p-10 shadow-glow" style={{ minHeight: 420 }} />
        </div>
      </div>
    </section>
  );
}
