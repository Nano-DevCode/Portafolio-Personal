export type TechCategory = 'mobile' | 'frontend' | 'backend' | 'devops' | 'database' | 'ai';

export interface TechTag {
  name: string;
  category: TechCategory;
}

export interface TechnicalArchitecture {
  architecturePattern: string;
  stateAndDataManagement: string;
  keyChallenges: string[];
  engineeringDecisions: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: TechTag[];
  githubUrl: string;
  liveUrl?: string;
  images: {
    thumbnail: string;
    gallery: string[];
  };
  featured: boolean;
  technicalDetails?: TechnicalArchitecture;
}
