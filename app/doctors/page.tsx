export default function DoctorsPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Our specialists</p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Expert dermatologists delivering premium care.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600">Our team brings board-certified dermatology and aesthetic medicine together to provide trusted skin and hair care outcomes.</p>
          </div>
          <div className="rounded-[32px] bg-[url('/images/doctors/dr-supriya.jpg')] bg-cover bg-center p-10 shadow-glow" style={{ minHeight: 420 }} />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <div className="mb-6 aspect-[4/5] overflow-hidden rounded-[28px] bg-[url('/images/doctors/dr-supriya.jpg')] bg-cover bg-center" />
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Dr. Supriya Ghodke</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Lead dermatologist</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">11 years of experience in advanced dermatology, facial aesthetics, clinical cosmetology, and hair restoration care.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Qualification: B.A.M.S, PGDFC, FFAC</p>
              <p>Focus: Facial aesthetics and clinical cosmetology</p>
              <p>Expertise: Acne, pigmentation, anti-aging, hair restoration</p>
            </div>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <div className="mb-6 aspect-[4/5] overflow-hidden rounded-[28px] bg-[url('/images/doctors/dr-virendra.jpeg')] bg-cover bg-center" />
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Dr. Virendra Ghodke, MD</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Medical aesthetician partner</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Specializes in advanced laser therapy, skin rejuvenation, and personalized treatment protocols.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Certification: Proctology and Panchakarma</p>
              <p>Expertise: Laser therapies, peels, skin brightening</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
