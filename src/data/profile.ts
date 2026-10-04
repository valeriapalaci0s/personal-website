// All text comes from documents/copy.md — edit there first, then mirror here.

export type SocialIcon = 'linkedin' | 'x' | 'substack' | 'github';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  /** Shown after the company, joined with " · ". Kept exactly as Valeria wrote them. */
  details: string[];
}

export const profile = {
  name: 'Valeria Palacios',
  role: 'Software Engineer @Microsoft',
  location: 'Based in NYC',
  email: 'vale.palacios181@gmail.com',
  /** Pending: a resume without the phone number (spec, "Pendientes"). The link is hidden while undefined. */
  resumeUrl: undefined as string | undefined,
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeriapalaciosa/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/valitapala', icon: 'x' },
  { label: 'Substack', href: 'https://valeriapalaciosss.substack.com/', icon: 'substack' },
  { label: 'GitHub', href: 'https://github.com/valeriapalaci0s', icon: 'github' },
];

export const about: string[] = [
  "I'm a software engineer at Microsoft in New York, building AI for network diagnostics. I grew up in Ecuador, studied Computer Science at Georgia Tech, and have been hooked on building things since my first CS class in high school.",
  "Outside of code, you'll find me playing tennis, running or doing yoga. I love the logic of computer science and how present sports make me feel. One makes me think. The other makes me present.",
];

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java'] },
  { category: 'Frameworks', items: ['React'] },
  { category: 'Cloud', items: ['Azure', 'Kubernetes (AKS)', 'distributed systems', 'REST APIs'] },
  { category: 'AI', items: ['Agentic AI', 'RAG', 'evals', 'semantic search', 'prompt engineering'] },
];

export const experience: ExperienceItem[] = [
  { company: 'Microsoft', details: ['2024 – Present', 'AI for Network Diagnostics'] },
  { company: 'Komfort', details: ['Founder', 'Ergonomic Laptop Stands'] },
  { company: 'Oceaneers', details: ['Web Developer'] },
  { company: 'Banco ProCredit', details: ['Program Manager'] },
];
