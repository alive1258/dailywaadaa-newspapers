import { Article } from "@/src/types/types";
import Image from "next/image";
import Link from "next/link";

interface NewsHeroSectionProps {
  featured: Article;
  side: Article[];
  sectionTitle?: string;
}

export default function NewsHeroSection({
  featured,
  side,
  sectionTitle = "Top Stories",
}: NewsHeroSectionProps) {
  return (
    <section className="container py-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6 border-b pb-2">
        <h2 className="text-xl font-bold text-brand-900 uppercase tracking-wide">
          {sectionTitle}
        </h2>
        <Link
          href="/category/latest"
          className="text-sm text-accent-500 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── LEFT: FEATURED STORY ─────────────────────── */}
        <article className="group md:col-span-2">
          <Link href={`/news/${featured.slug}`} className="block">
            <div className="relative aspect-16/10 overflow-hidden rounded-lg">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {featured.category && (
              <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-accent-500">
                {featured.category}
              </span>
            )}

            <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug text-brand-900 group-hover:text-accent-500 transition">
              {featured.title}
            </h1>

            {featured.excerpt && (
              <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
            )}

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              {featured.author && (
                <>
                  <span className="font-medium text-gray-700">
                    {featured.author}
                  </span>
                  <span>•</span>
                </>
              )}
              <span>{featured.publishedAt}</span>
            </div>
          </Link>
        </article>

        {/* ── RIGHT: 5 SIDE STORIES ────────────────────── */}
        <div className="md:col-span-1">
          <div className="flex flex-col divide-y divide-gray-200">
            {side.slice(0, 5).map((item) => (
              <article
                key={item.id}
                className="group py-4 first:pt-0 last:pb-0"
              >
                <Link
                  href={`/news/${item.slug}`}
                  className="flex gap-4 items-start"
                >
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold leading-snug text-brand-900 group-hover:text-accent-500 transition line-clamp-3">
                      {item.title}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-500">
                      {item.author && (
                        <>
                          <span className="font-medium text-gray-700">
                            {item.author}
                          </span>
                          <span>•</span>
                        </>
                      )}
                      <span>{item.publishedAt}</span>
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-28 h-20 sm:w-32 sm:h-22 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="140px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
