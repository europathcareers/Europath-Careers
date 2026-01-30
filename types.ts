import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  linkText: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface CommitmentItem {
  title: string;
  description: string;
}