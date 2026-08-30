'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, HeartHandshake, Sparkles, Star, TrendingUp, Stethoscope } from 'lucide-react';

const stats = [
  { label: 'Patients Treated', value: '9,500+' },
  { label: 'Years Experience', value: '18+' },
  { label: 'Procedures Completed', value: '12,000+' },
  { label: 'Google Rating', value: '4.9/5' }
];

const treatments = [
  'Acne Treatment',
  'Pigmentation Treatment',
  'Hair Transplant',
  'PRP Therapy',
  'Laser Hair Removal',
  'Anti Aging',
  'Chemical Peel',
  'Skin Brightening'
];

const features = [
  { icon: Sparkles, title: 'Signature Skin Programs', description: 'Personalized plans for lasting improvement and healthy complexion.' },
  { icon: CheckCircle2, title: 'Advanced Clinical Care', description: 'Evidence-based dermatology with leading technology and comfort.' },
  { icon: HeartHandshake, title: 'Compassionate Patient Support', description: 'Premium guidance from consultation through recovery.' },
  { icon: TrendingUp, title: 'Transformative Results', description: 'Visible skin renewal and hair restoration outcomes.' }
];

const previewImages = [
  { label: 'Acne Renewal', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { label: 'Glow Treatment', src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80' },
  { label: 'Hair Recovery', src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80' }
];

const faqs = [
  { question: 'How do I book a consultation?', answer: 'Schedule online, call our team, or start a WhatsApp consultation to receive a tailored treatment plan.' },
  { question: 'What should I expect during my first visit?', answer: 'A comprehensive skin and hair assessment followed by a precise treatment recommendation and premium care plan.' },
  { question: 'Are treatments safe for sensitive skin?', answer: 'Yes. We offer medical-grade, gentle protocols designed for all skin types with advanced monitoring.' }
];

const blogs = [
  { title: 'Modern skin care strategies for lasting radiance', category: 'Skin Care', href: '/blog/modern-skin-care' },
  { title: 'How PRP therapy supports natural hair restoration', category: 'Hair Care', href: '/blog/prp-hair-restoration' },
  { title: 'Advanced acne solutions for clearer skin', category: 'Acne', href: '/blog/advanced-acne-solutions' }
];

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Premium dermatology care
              </span>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                  Revitalize your skin and hair with tailored luxury treatments.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Healing Clinic combines medical expertise, advanced dermatology, and personalized aesthetic care for healthier, confident skin and restored beauty.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/book-appointment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800">
                  Book Appointment
                </Link>
                <Link href="https://wa.me/917447681111" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-gold hover:text-slate-900">
                  WhatsApp Consultation
                </Link>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="absolute -left-10 top-4 h-24 w-24 rounded-full bg-gold/10 blur-3xl" />
              <div className="space-y-6">
                <div className="rounded-3xl bg-slate-800 px-6 py-7 text-white shadow-lg">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-200">Signature consultation</p>
                  <p className="mt-4 text-3xl font-semibold">Luxury skin assessment</p>
                </div>
                <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <BookOpen className="h-7 w-7 text-gold" />
                    <div>
                      <p className="text-sm text-slate-500">Personalized treatment plans</p>
                      <p className="font-semibold text-slate-900">Tailored for your skin goals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <Stethoscope className="h-7 w-7 text-gold" />
                    <div>
                      <p className="text-sm text-slate-500">Expert dermatology team</p>
                      <p className="font-semibold text-slate-900">Medical care with premium comfort</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.23em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Core treatments</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Expert therapies for every skin and hair concern</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">A premium clinical approach to deliver long-term skin and hair improvement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Lead specialist
            </span>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Meet Dr. Supriya Ghodke</h2>
            <p className="max-w-xl text-base leading-8 text-slate-600">B.A.M.S, PGDFC, FFAC - Fellowship in Facial Aesthetics & Clinical Cosmetology. Specialized dermatologist with expertise in advanced clinical care and aesthetic treatments.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-lg font-semibold text-slate-900">18+</p>
                <p className="mt-1 text-sm text-slate-500">Years experience</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-lg font-semibold text-slate-900">10k+</p>
                <p className="mt-1 text-sm text-slate-500">Treatments delivered</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-lg font-semibold text-slate-900">Board certified</p>
                <p className="mt-1 text-sm text-slate-500">Dermatology</p>
              </div>
            </div>
            <Link href="/doctors" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
              View Doctor Profile
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-slate-900 p-8 text-white shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,168,106,0.24),_transparent_60%)]" />
            <div className="relative grid gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-[url('/images/doctors/dr-supriya.jpg')] bg-cover bg-center" />
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Lead dermatologist</p>
                <h3 className="text-2xl font-semibold">Dr. Supriya Ghodke</h3>
                <p className="text-sm leading-6 text-slate-200">Expert in advanced dermatology, facial aesthetics, and cosmetic procedures for radiant skin transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Premium care driven by clinical excellence</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <feature.icon className="h-10 w-10 text-gold" />
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Before & after</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Real results with clinical precision</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">Explore transformative skin and hair journeys delivered by our expert team and premium treatment protocols.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {previewImages.map((item) => (
                <div key={item.label} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${item.src})` }} />
                  <div className="p-5">
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-500">Clinical image illustrating improvements after tailored care.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] bg-slate-900 p-10 text-white shadow-glow">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Client praise</p>
              <div className="space-y-4 rounded-3xl bg-slate-800/95 p-6">
                <p className="text-2xl font-semibold">"Healing Clinic elevated my treatment experience. Results were visible, and every step felt professional and caring."</p>
                <p className="text-sm text-slate-300">- Maya R., Acne Treatment Client</p>
              </div>
              <div className="space-y-4 rounded-3xl bg-slate-800/95 p-6">
                <p className="text-2xl font-semibold">"Hair restoration was smooth and professional. The team guided me with clarity and confidence."</p>
                <p className="text-sm text-slate-300">- Noah K., PRP & Hair Transplant Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_0.25fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Frequently asked questions</p>
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 transition group-open:text-gold">{faq.question}</summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="rounded-[32px] bg-slate-900 p-10 text-white shadow-glow">
            <p className="uppercase tracking-[0.3em] text-gold">Latest insights</p>
            <div className="mt-8 space-y-5">
              {blogs.map((post) => (
                <Link key={post.href} href={post.href} className="block rounded-3xl border border-slate-800 bg-slate-950 p-6 transition hover:border-gold">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{post.category}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold/5 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-white p-10 shadow-soft sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Ready for premium care?</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Start your consultation with Dermacare Elite</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">Book a specialized appointment or reach out through WhatsApp for fast guidance from our dermatology experts.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:mt-0 sm:flex-row">
              <Link href="/book-appointment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
                Book Appointment
              </Link>
              <a href="https://wa.me/18005551234" className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
