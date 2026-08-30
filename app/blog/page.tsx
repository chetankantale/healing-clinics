import Link from 'next/link';

const posts = [
  { title: 'Modern skin care strategies for lasting radiance', category: 'Skin Care', href: '/blog/modern-skin-care' },
  { title: 'How PRP therapy supports natural hair restoration', category: 'Hair Care', href: '/blog/prp-hair-restoration' },
  { title: 'Advanced acne solutions for clearer skin', category: 'Acne', href: '/blog/advanced-acne-solutions' }
];

export default function BlogPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Dermatology and skin health articles</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Explore expert-guided content on clinical skincare, hair restoration, and aesthetic wellness.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft transition hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">{post.category}</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Insightful guidance and clinical perspectives for skin and hair care decisions.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
