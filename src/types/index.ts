
import type { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon?: LucideIcon;
}

export interface Pastry {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: string;
  imageUrl: string;
  category: string; // Category ID
  dataAiHint?: string;
}

export interface Review {
  id: string;
  customerName: string;
  reviewText: string;
  rating: number; // e.g., 1-5
  avatarUrl?: string;
  dataAiHint?: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
}
