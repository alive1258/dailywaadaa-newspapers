import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/src/types/types";
import {
  dayBriefLeft,
  dayBriefMiddle,
  dayBriefRight,
} from "@/src/utils/data/dayBriefData";

/* ── helper: small text-only brief row ── */
function BriefRow({
  article,
  showImage = false,
}: {
  article: Article;
  showImage?: boolean;
}) {
  return (
    <article className="group border-b border-gray-200 last:border-b-0 py-3 first:pt-0">
      <Link href={`/news/${article.slug}`} className="block">
        {/* image only when showImage is true */}
        {showImage && article.image && (
          <div className="relative aspect-16/10 overflow-hidden rounded-md mb-3">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <h3 className="text-base font-semibold leading-snug text-brand-900 group-hover:text-accent-500 transition line-clamp-3">
          {article.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-1 text-xs text-gray-500">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </Link>
    </article>
  );
}

/* ── helper: featured brief (image + title + excerpt) ── */
function FeaturedBrief({ article }: { article: Article }) {
  return (
    <article className="group pb-5 border-b border-gray-200 last:border-b-0 last:pb-0">
      <Link href={`/news/${article.slug}`} className="block">
        {article.image && (
          <div className="relative aspect-video overflow-hidden rounded-md mb-3">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {article.category && (
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent-500 mb-1">
            {article.category}
          </span>
        )}

        <h3 className="text-base font-bold leading-snug text-brand-900 group-hover:text-accent-500 transition line-clamp-3">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="mt-2 text-base text-gray-600 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        )}

        <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </Link>
    </article>
  );
}

/* ── main section ── */
export default function DayBriefSection() {
  return (
    <section className="container py-10">
      {/* Section header */}
      <div className="flex items-center justify-between border-b-2 border-brand-900 pb-2 mb-6">
        <h2 className="font-serif text-2xl font-bold text-brand-900 uppercase tracking-wide">
          Day’s Brief
        </h2>
        <Link
          href="/category/latest"
          className="text-base font-medium text-accent-500 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ── LEFT: 4 short briefs ── */}
        <div className="lg:col-span-4 lg:border-r lg:border-gray-200 lg:pr-8">
          {dayBriefLeft.map((a) => (
            <BriefRow key={a.id} article={a} />
          ))}
        </div>

        {/* ── MIDDLE: 2 featured briefs ── */}
        <div className="lg:col-span-4 lg:border-r lg:border-gray-200 lg:pr-8 space-y-5">
          {dayBriefMiddle.map((a) => (
            <FeaturedBrief key={a.id} article={a} />
          ))}
        </div>

        {/* ── RIGHT: 5 short briefs ── */}
        <div className="lg:col-span-4">
          {dayBriefRight.map((a) => (
            <BriefRow key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
