import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/src/types/types";
import { businessCarousel } from "@/src/utils/data/businessData";
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

        <h3 className="mt-2 text-sm font-bold leading-snug text-brand-900 line-clamp-3 group-hover/slide:text-brand-600 transition">
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

export default function BusinessSection() {
  const slides = businessCarousel.map((a) => (
    <SlideCard key={a.id} article={a} />
  ));

  return (
    <section className="container py-10">
      <div className="flex items-center justify-between border-b-2 border-brand-900 pb-2 mb-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-900 uppercase tracking-wide">
          Business
        </h2>
        <Link
          href="/category/business"
          className="text-sm font-medium text-brand-600 hover:underline"
        >
          View all →
        </Link>
      </div>

      {/* Padding only needed on desktop where arrows sit outside */}
      <div className="sm:px-8">
        <Carousel slides={slides} />
      </div>
    </section>
  );
}
