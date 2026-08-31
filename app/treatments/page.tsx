import { TreatmentCard } from '@/components/TreatmentCard';

const treatments = [
  { title: 'Acne Treatment', description: 'Medical acne care for lasting clarity.', href: '/treatments/acne-treatment' },
  { title: 'Pigmentation Treatment', description: 'Even tone and brighter skin.', href: '/treatments/pigmentation-treatment' },
  { title: 'Hair Growth Treatment', description: 'PRP and personalized care for healthier, fuller-looking hair.', href: '/treatments/hair-growth' },
  { title: 'PRP Therapy', description: 'Regenerative hair and skin rejuvenation.', href: '/treatments/prp-therapy' },
  { title: 'Laser Hair Removal', description: 'Smooth, long-lasting hair reduction.', href: '/treatments/laser-hair-removal' },
  { title: 'Anti Aging', description: 'Youthful skin through premium treatments.', href: '/treatments/anti-aging' },
  { title: 'Chemical Peel', description: 'Renew texture with a clinical peel.', href: '/treatments/chemical-peel' }
];

const serviceCategories = [
  { title: 'Skin & Pigmentation', services: ['Melasma treatment', 'Pigmentation treatment', 'Dark spots and uneven skin tone', 'Chemical peels', 'Medical facials', 'Glow and skin-brightening treatments', 'Skin texture improvement'] },
  { title: 'Acne & Acne Scars', services: ['Active acne treatment', 'Acne scar treatment', 'Acne marks and post-acne pigmentation', 'Skin resurfacing and rejuvenation'] },
  { title: 'Hair & Scalp', services: ['Hair fall treatment', 'PRP hair treatment', 'Hair restoration', 'Hair-growth treatments', 'Scalp treatments', 'Hair growth consultation'] },
  { title: 'Laser Treatments', services: ['Laser skin treatments', 'Laser pigmentation treatments', 'Laser hair removal', 'Other cosmetic laser procedures'] },
  { title: 'Facials & Skin Care', services: ['Medical facials', 'Hydration treatments', 'Glow treatments', 'Skin rejuvenation', 'Customized skin treatments'] },
  { title: 'Cosmetic Dermatology', services: ['Skin tightening and rejuvenation', 'Treatment for pigmentation and uneven skin', 'Cosmetic dermatology procedures', 'Personalized skin-care treatment plans'] },
  { title: 'Consultations', services: ['Dermatology consultation', 'Skin consultation', 'Hair and scalp consultation', 'Pediatric dermatology consultation'] }
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

        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Complete care menu</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">More ways we care for your skin and hair.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Every treatment plan starts with a clinical consultation and is tailored to your needs.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category) => (
              <article key={category.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{category.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {category.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
