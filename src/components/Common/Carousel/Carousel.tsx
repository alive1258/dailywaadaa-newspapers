/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  slides: React.ReactNode[];
  className?: string;
}

/* how many slides to show per breakpoint */
function usePerView() {
  const [n, setN] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setN(1);
      else if (w < 1024) setN(2);
      else setN(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

export default function Carousel({ slides, className = "" }: CarouselProps) {
  const perView = usePerView();
  const total = slides.length;
  const pageCount = Math.max(1, Math.ceil(total / perView));
  const [page, setPage] = useState(0);

  /* reset page when perView changes (e.g. on resize) */
  useEffect(() => {
    setPage(0);
  }, [perView]);

  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  if (total === 0) return null;

  const start = page * perView;
  const visible = slides.slice(start, start + perView);

  return (
    <div className={`relative ${className}`}>
      {/* Grid — 1 / 2 / 4 columns responsively */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
      >
        {visible.map((slide, i) => (
          <div key={start + i}>{slide}</div>
        ))}
      </div>

      {/* Arrows — visible on mobile, positioned inside */}
      {pageCount > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 text-brand-900 flex items-center justify-center transition"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 text-brand-900 flex items-center justify-center transition"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === page
                    ? "w-6 bg-brand-600"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
