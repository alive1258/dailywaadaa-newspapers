import type { Article } from "@/src/types/types";

export const longReadStories: Article[] = [
  {
    id: "lr-1",
    slug: "at-radda-vaccines-returned-before-walls",
    title: "At Radda, the vaccines returned before the walls",
    excerpt:
      "Healthcare workers continue a measles-rubella vaccination campaign at a makeshift station outside the damaged Radda MCH-FP Centre in Mirpur-1.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "28 Sep 2026",
  },
  {
    id: "lr-2",
    slug: "the-cart-the-cafe-and-the-mayor",
    title: "The cart, the café, and the mayor",
    excerpt:
      "Customers work at Qisa Coffee in Sacramento, California, a Peshawar-inspired café that has become a gathering place for the city’s Muslim community.",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "28 Sep 2026",
  },
  {
    id: "lr-3",
    slug: "the-wrecking-of-salman-muqtadirs-brownfish",
    title: "The wrecking of Salman Muqtadir’s BrownFish",
    excerpt: "Broken glass in BrownFish studio.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "27 Sep 2026",
  },
  {
    id: "lr-4",
    slug: "no-trouble-with-jinnah",
    title: "No trouble with Jinnah",
    excerpt:
      "The claims being made and parallels being drawn by Roy actually substantiates the case he makes against the Quaid.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "20 Sep 2026",
  },
  /* extra items so the carousel has 2 pages */
  {
    id: "lr-5",
    slug: "the-quiet-return-of-the-tea-stall",
    title: "The quiet return of the tea stall",
    excerpt:
      "Across Dhaka, the corner tea stall is making a comeback — and with it, a very old kind of public life.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "18 Sep 2026",
  },
  {
    id: "lr-6",
    slug: "letters-from-a-vanishing-river",
    title: "Letters from a vanishing river",
    excerpt:
      "A photographer spends three years documenting the Padma’s shifting shoreline.",
    image:
      "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "15 Sep 2026",
  },
  {
    id: "lr-7",
    slug: "the-machines-that-remember",
    title: "The machines that remember",
    excerpt:
      "Inside the archive digitising Bangladesh’s disappearing film reels.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "12 Sep 2026",
  },
  {
    id: "lr-8",
    slug: "a-school-under-the-flyover",
    title: "A school under the flyover",
    excerpt:
      "Every evening, dozens of children gather under a Dhaka flyover for two hours of lessons.",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80",
    category: "Long Read",
    categorySlug: "long-read",
    publishedAt: "10 Sep 2026",
  },
];

/* Carousel data */
export const longReadCarousel: Article[] = longReadStories.slice(0, 8);
