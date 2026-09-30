import type { Article } from "@/src/types/types";

export const businessStories: Article[] = [
  {
    id: "bus-c1",
    slug: "bangladesh-bank-keeps-9-5-policy-rate",
    title: "Bangladesh Bank keeps 9.5% policy rate to contain inflation",
    excerpt:
      "Bangladesh Bank Deputy Governor Dr Md Habibur Rahman speaks at a press briefing on the central bank’s first quarterly Monetary Policy Statement.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "6 hours ago",
  },
  {
    id: "bus-c2",
    slug: "bangla-qr-transaction-jumps-fivefold",
    title: "Bangla QR transaction value jumps nearly fivefold in 3 months",
    excerpt:
      "Digital payments surge as merchants adopt Bangla QR across the country.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "9 hours ago",
  },
  {
    id: "bus-c3",
    slug: "bsec-approves-tk3500cr-bonds",
    title: "BSEC approves Tk3,500cr bonds from five banks",
    excerpt:
      "The securities regulator clears a major round of bank bond issuances.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "29 Sep 2026",
  },
  {
    id: "bus-c4",
    slug: "bsec-beximco-pharma-board-reconstruction",
    title:
      "BSEC gives no-objection to Beximco Pharma board reconstruction, Salman left out",
    excerpt: "Regulator approves the restructuring with a new board lineup.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "29 Sep 2026",
  },
  {
    id: "bus-m1",
    slug: "bangladesh-bank-policy-rate-details",
    title: "Bangladesh Bank keeps 9.5% policy rate to contain inflation",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "6 hours ago",
  },
  {
    id: "bus-m2",
    slug: "bangla-qr-transaction-details",
    title: "Bangla QR transaction value jumps nearly fivefold in 3 months",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "9 hours ago",
  },
  {
    id: "bus-m3",
    slug: "bsec-tk3500cr-bonds-details",
    title: "BSEC approves Tk3,500cr bonds from five banks",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "29 Sep 2026",
  },
  {
    id: "bus-r1",
    slug: "bsec-beximco-pharma-details",
    title:
      "BSEC gives no-objection to Beximco Pharma board reconstruction, Salman left out",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=600&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "29 Sep 2026",
  },
  {
    id: "bus-r2",
    slug: "banking-sector-outlook-2026",
    title: "Banking sector outlook: what analysts expect in 2026",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "28 Sep 2026",
  },
  {
    id: "bus-r3",
    slug: "rmg-exports-post-modest-growth",
    title: "RMG exports post modest growth amid global slowdown",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    category: "Business",
    categorySlug: "business",
    publishedAt: "28 Sep 2026",
  },
];

/* ── Carousel data: 8 items → 2 pages of 4 ── */
export const businessCarousel: Article[] = [
  ...businessStories.slice(0, 4),
  ...businessStories.slice(4, 8),
];
