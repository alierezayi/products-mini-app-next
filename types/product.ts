export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  images: string[];
  features: Record<string, string>;
  rating: number;
  reviews: Review[];
}

export interface Review {
  name: string;
  comment: string;
  rate: number;
}
