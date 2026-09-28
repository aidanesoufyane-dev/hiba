export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Mobile' | 'Cross-Platform' | 'Android' | 'Web';
  tag: string;
  accentColor: string;
  thumbnail: string;
  images: string[];
  logo?: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  apkUrl?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    context: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  details?: string;
}

export interface ActivityItem {
  title: string;
  organization: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  note: string;
}
