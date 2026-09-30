import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/src/types/types";
import { longReadCarousel } from "@/src/utils/data/longReadData";
import Carousel from "@/src/components/Common/Carousel/Carousel";

function SlideCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className="block group/slide">
      <article className="flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-gray-100">
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover transition duration-500 group-hover/slide:scale-105"
            />
          )}
        </div>

        <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-600">
          {article.category}
        </span>

        <h3 className="mt-0.5 text-sm font-bold leading-snug text-brand-900 line-clamp-3 group-hover/slide:text-brand-600 transition">
          {article.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-1 text-xs text-gray-500">
          <Clock size={11} className="text-gray-400" />
          <span>{article.publishedAt}</span>
        </div>
      </article>
    </Link>
  );
}

export default function LongReadSection() {
  const slides = longReadCarousel.map((a) => (
    <SlideCard key={a.id} article={a} />
  ));

  return (
    <section className="container py-10">
      <div className="flex items-center justify-between border-b-2 border-brand-900 pb-2 mb-6">
        <h2 className="font-serif text-2xl font-bold text-brand-900 uppercase tracking-wide">
          Long Read
        </h2>
        <Link
          href="/category/long-read"
          className="text-sm font-medium text-brand-600 hover:underline"
        >
          View all →
        </Link>
      </div>

      {/* ✅ no perView — Carousel auto-detects 1/2/4 by screen size */}
      <div className="sm:px-8">
        <Carousel slides={slides} />
      </div>
    </section>
  );
}
