import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, Tag } from "lucide-react";
import RelatedCard from "@/src/components/Ui/HomePage/NewsHeroSection/RelatedCard";

import { getArticleBySlug, getRelatedStories } from "@/src/utils/data/homeData";

/* ───────────── METADATA ───────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const art = getArticleBySlug(slug);
  if (!art) return {};

  const url = `https://www.dailywaadaa.com/news/${art.slug}`;

  return {
    title: art.title,
    description: art.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: art.title,
      description: art.excerpt,
      url,
      type: "article",
      images: art.image
        ? [{ url: art.image, width: 1200, height: 630, alt: art.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: art.title,
      description: art.excerpt,
      images: art.image ? [art.image] : [],
    },
  };
}

/* ───────────── PAGE ───────────── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getRelatedStories(article.slug, 4);

  return (
    <main className="bg-white">
      {/* ── BREADCRUMB ── */}
      <nav className="max-w-3xl mx-auto px-4 pt-6 text-xs text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        {article.categorySlug && (
          <>
            <Link
              href={`/category/${article.categorySlug}`}
              className="hover:text-brand-600"
            >
              {article.category}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-gray-700 line-clamp-1 inline">
          {article.title}
        </span>
      </nav>

      {/* ── HEADER ── */}
      <header className="max-w-3xl mx-auto px-4 pt-4 pb-6">
        {article.category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
            {article.category}
          </span>
        )}

        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-brand-900">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {article.excerpt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y py-3">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {article.author && (
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-gray-400" />
                <span className="font-medium text-gray-800">
                  {article.author}
                </span>
              </span>
            )}
            {article.updatedAt && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-gray-400" />
                Updated on: {article.updatedAt}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ── HERO IMAGE ── */}
      {article.image && (
        <figure className="max-w-5xl mx-auto px-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </figure>
      )}

      {/* ── BODY ── */}
      <article className="max-w-3xl mx-auto px-4 py-10">
        {article.content && (
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-900 prose-p:text-gray-800 prose-p:leading-relaxed prose-a:text-brand-600 prose-blockquote:border-l-4 prose-blockquote:border-brand-600 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-gray-800"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 flex items-center flex-wrap gap-2">
            <Tag size={14} className="text-gray-400" />
            {article.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* ── RELATED STORIES ── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between border-b pb-3 mb-6">
            <h2 className="font-serif text-2xl font-bold text-brand-900">
              Related Stories
            </h2>
            <Link
              href={`/category/${article.categorySlug ?? "latest"}`}
              className="text-sm font-medium text-brand-600 hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r) => (
              <RelatedCard key={r.id} article={r} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
