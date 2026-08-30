import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/content';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[32px] bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{post.title}</h1>
          <p className="mt-6 text-base leading-8 text-slate-600">{post.summary}</p>
          <div className="mt-10 space-y-6 text-slate-700">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
