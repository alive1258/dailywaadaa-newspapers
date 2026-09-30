import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/src/types/types";

export default function RelatedCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300">
      {/* Thumbnail */}
      <Link
        href={`/news/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-gray-100"
      >
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}

        {/* Category badge over the image */}
        {article.category && (
          <span className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md z-10">
            {article.category}
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <Link href={`/news/${article.slug}`}>
          <h3 className="text-[15px] md:text-base font-bold leading-snug text-brand-900 line-clamp-3 group-hover:text-brand-600 transition-colors">
            {article.title}
          </h3>
        </Link>

        {/* Meta */}
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
          {article.author && (
            <>
              <span className="font-medium text-gray-700 truncate max-w-[60%]">
                {article.author}
              </span>
              <span className="text-gray-300">•</span>
            </>
          )}
          <span>{article.publishedAt}</span>
        </div>

        {/* Read More */}
        <Link
          href={`/news/${article.slug}`}
          className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all"
        >
          Read More
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
