export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  category: 'cloud' | 'security' | 'backend' | 'frontend' | 'mobile' | 'devops' | 'ai' | 'academic' | 'other';
  importance: number; // 1 (más relevante) en adelante
}
