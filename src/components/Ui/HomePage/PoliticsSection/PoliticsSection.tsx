import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/src/types/types";
import { politicsStories } from "@/src/utils/data/politicsData";

/* ── Left lead card (bigger, image on top) ── */
function LeadCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-gray-100">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <h3 className="mt-3 text-lg md:text-xl font-bold leading-snug text-brand-900 group-hover:text-accent-500 transition line-clamp-3">
          {article.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </Link>
    </article>
  );
}

/* ── Middle/Right row (text left, thumbnail right) ── */
function RowItem({ article }: { article: Article }) {
  return (
    <article className="group border-b border-gray-200 last:border-b-0 py-4 first:pt-0">
      <Link href={`/news/${article.slug}`} className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold leading-snug text-brand-900 group-hover:text-accent-500 transition line-clamp-3">
            {article.title}
          </h3>
          <div className="mt-1.5 flex items-center gap-1 text-xs text-gray-500">
            <Clock size={11} className="text-gray-400" />
            <span>{article.publishedAt}</span>
          </div>
        </div>

        {article.image && (
          <div className="relative w-20 h-16 sm:w-24 sm:h-18 shrink-0 overflow-hidden rounded-md bg-gray-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="96px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </Link>
    </article>
  );
}

export default function PoliticsSection() {
  /* 1 lead (left) + 3 middle + 3 right = 7 total */
  const [lead, ...rest] = politicsStories;
  const middle = rest.slice(0, 3);
  const right = rest.slice(3, 6);

  return (
    <section className="container py-10">
      {/* Section header */}
      <div className="flex items-center justify-between border-b-2 border-brand-900 pb-2 mb-6">
        <h2 className="font-serif text-2xl font-bold text-brand-900 uppercase tracking-wide">
          Politics
        </h2>
        <Link
          href="/category/politics"
          className="text-base font-medium text-accent-500 hover:underline"
        >
          View all →
        </Link>
      </div>

      {/* 3-column grid: left 1 | middle 3 | right 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── LEFT: single lead story ── */}
        <div className="lg:border-r lg:border-gray-200 lg:pr-8">
          {lead && <LeadCard article={lead} />}
        </div>

        {/* ── MIDDLE: 3 rows ── */}
        <div className="lg:border-r lg:border-gray-200 lg:pr-8">
          {middle.map((a) => (
            <RowItem key={a.id} article={a} />
          ))}
        </div>

        {/* ── RIGHT: 3 rows ── */}
        <div>
          {right.map((a) => (
            <RowItem key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
