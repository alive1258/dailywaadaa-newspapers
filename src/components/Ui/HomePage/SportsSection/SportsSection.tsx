import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/src/types/types";
import { sportsStories } from "@/src/utils/data/sportsData";

/* ── Card ── */
function SportsCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-4">
        {article.category && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 mb-1">
            {article.category}
          </span>
        )}

        <Link href={`/news/${article.slug}`}>
          <h3 className="text-base font-bold leading-snug text-brand-900 line-clamp-3 group-hover:text-brand-600 transition">
            {article.title}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </article>
  );
}

/* ── Section ── */
export default function SportsSection() {
  return (
    <section className="container py-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-brand-900 pb-2 mb-6">
        <h2 className="font-serif text-2xl font-bold text-brand-900 uppercase tracking-wide">
          Sports
        </h2>
        <Link
          href="/category/sports"
          className="text-sm font-medium text-brand-600 hover:underline"
        >
          View all →
        </Link>
      </div>

      {/* 3 cards in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsStories.slice(0, 3).map((a) => (
          <SportsCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
