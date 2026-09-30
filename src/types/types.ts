export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string; // ← full body (HTML or plain paragraphs)
  image?: string;
  category?: string;
  categorySlug?: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  isFeatured?: boolean;
  tags?: string[];
}
