export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  gallery?: GalleryImage[];
  technologies: string[];
  categories: string[];
  featured?: boolean;
  date: string;
  client?: string;
  type: string;
  liveUrl?: string;
  repoUrl?: string;
  aiFeatures?: string[];
}

export interface GalleryImage {
  url: string;
  caption?: string;
} 