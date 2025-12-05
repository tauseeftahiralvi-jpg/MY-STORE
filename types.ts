export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  pros: string[];
  cons: string[];
  features: string[];
  affiliateLink: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object;
}