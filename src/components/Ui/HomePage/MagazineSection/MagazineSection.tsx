import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/src/types/types";

interface ColumnData {
  title: string;
  categorySlug: string;
  stories: Article[];
  accent?: string;
}

interface MagazineSectionProps {
  columns: ColumnData[];
}

/* ── First item with image ── */
function LeadCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {article.category && (
          <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-brand-600">
            {article.category}
          </span>
        )}

        <h3 className="mt-1 text-base font-bold leading-snug text-brand-900 group-hover:text-brand-600 transition line-clamp-4">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        )}

        <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </Link>
    </article>
  );
}

/* ── Text-only card ── */
function TextCard({
  article,
  accent = "bg-brand-50",
}: {
  article: Article;
  accent?: string;
}) {
  return (
    <article className={`group ${accent} rounded-lg p-4 flex flex-col`}>
      <Link href={`/news/${article.slug}`} className="flex flex-col flex-1">
        <h3 className="text-sm font-bold leading-snug text-brand-900 group-hover:text-brand-600 transition line-clamp-4">
          {article.title}
        </h3>

        <div className="mt-auto pt-3 flex items-center gap-1 text-xs text-gray-600">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </Link>
    </article>
  );
}

/* ── Single column ── */
function Column({ data }: { data: ColumnData }) {
  const [lead, ...rest] = data.stories;
  const accent = data.accent ?? "bg-brand-50";

  return (
    <div className="flex flex-col">
      {/* Column header */}
      <div className="border-b-2 border-brand-900 pb-2 mb-5 flex items-center justify-between">
        <h2 className="font-serif text-xl font-bold text-brand-900 uppercase tracking-wide">
          {data.title}
        </h2>
        <Link
          href={`/category/${data.categorySlug}`}
          className="text-xs font-medium text-brand-600 hover:underline"
        >
          All →
        </Link>
      </div>

      {/* Stacked items */}
      <div className="flex flex-col gap-5">
        {lead && <LeadCard article={lead} />}
        {rest.map((a) => (
          <TextCard key={a.id} article={a} accent={accent} />
        ))}
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function MagazineSection({ columns }: MagazineSectionProps) {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {columns.map((c) => (
          <Column key={c.categorySlug} data={c} />
        ))}
      </div>
    </section>
  );
}
