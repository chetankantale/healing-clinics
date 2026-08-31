import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TreatmentItem, treatmentItems } from '@/lib/content';

export function generateStaticParams() {
  return treatmentItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const treatment = treatmentItems.find((item) => item.slug === params.slug);
  if (!treatment) return {};

  return {
    title: `${treatment.title} | Healing Clinic`,
    description: treatment.summary,
    openGraph: {
      title: `${treatment.title} | Healing Clinic`,
      description: treatment.summary,
      url: `https://www.dermacareelite.com/treatments/${treatment.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.title} | Healing Clinic`,
      description: treatment.summary
    }
  };
}

function TreatmentPage({ treatment }: { treatment: TreatmentItem }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">{treatment.title}</p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{treatment.title} designed for premium results.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600">{treatment.overview}</p>
          </div>
          <div className="rounded-[32px] bg-slate-900 p-10 text-white shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Personalized care</p>
            <h2 className="mt-5 text-3xl font-semibold">What your plan can support</h2>
            <ul className="mt-8 space-y-4">
              {treatment.benefits.map((benefit) => (
                <li key={benefit} className="border-b border-slate-700 pb-4 text-base leading-7 text-slate-200">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Treatment overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{treatment.overview}</p>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Benefits</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {treatment.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-950">Expected results</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{treatment.results}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">Procedure steps</h2>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              {treatment.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {treatment.faqs.map((item) => (
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
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Ready for expert care?</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Reserve your consultation for {treatment.title}.</h2>
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

export default function TreatmentSlugPage({ params }: { params: { slug: string } }) {
  const treatment = treatmentItems.find((item) => item.slug === params.slug);
  if (!treatment) return notFound();

  return <TreatmentPage treatment={treatment} />;
}
