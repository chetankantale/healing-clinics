import { TreatmentCard } from '@/components/TreatmentCard';

const treatments = [
  { title: 'Acne Treatment', description: 'Medical acne care for lasting clarity.', href: '/treatments/acne-treatment' },
  { title: 'Pigmentation Treatment', description: 'Even tone and brighter skin.', href: '/treatments/pigmentation-treatment' },
  { title: 'Hair Transplant', description: 'Natural restoration for thinning hair.', href: '/treatments/hair-transplant' },
  { title: 'PRP Therapy', description: 'Regenerative hair and skin rejuvenation.', href: '/treatments/prp-therapy' },
  { title: 'Laser Hair Removal', description: 'Smooth, long-lasting hair reduction.', href: '/treatments/laser-hair-removal' },
  { title: 'Anti Aging', description: 'Youthful skin through premium treatments.', href: '/treatments/anti-aging' },
  { title: 'Chemical Peel', description: 'Renew texture with a clinical peel.', href: '/treatments/chemical-peel' }
];

export default function TreatmentsPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Treatments</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Advanced dermatology treatments for every skin and hair concern.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Explore our comprehensive treatment menu designed for safe, effective results with a premium clinic experience.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.title} title={treatment.title} description={treatment.description} href={treatment.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
