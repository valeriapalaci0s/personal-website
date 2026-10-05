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
  /** Pending: a resume without the phone number (spec, "Pendientes"). The link is hidden while undefined. */
  resumeUrl: undefined as string | undefined,
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeriapalaciosa/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/valitapala', icon: 'x' },
  { label: 'Substack', href: 'https://valeriapalaciosss.substack.com/', icon: 'substack' },
  { label: 'GitHub', href: 'https://github.com/valeriapalaci0s', icon: 'github' },
];

/** Valeria's own text, word for word. */
export const about: string[] = [
  "I was born and raised in Ecuador. Growing up, I was always curious about the world: different cultures, food, music, and how much our environment shapes us.",
  "Sports have always been a huge part of my life. I was captain of my high school volleyball team and today spend most of my time playing tennis, running, or doing yoga. I’m fascinated by the role the mind plays in exceptional athletes.",
  "I’ve always had a natural inclination toward math and science. I took computer science in school, loved the feeling of building, and switched majors to Computer Science at Georgia Tech. After graduating, I moved to New York to work as a software engineer.",
  "I love the rationality and logic of computer science. I equally love how present and in my body tennis and yoga make me feel. One makes me think. The other makes me present.",
  "I love creating and building things that make people’s lives better. I also believe in sidequests: they keep me curious and let me experience the world from different angles.",
];

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "C#", "KQL"] },
  { category: "AI & Agents", items: ["Agentic AI", "RAG", "Evals", "Agent Harnesses", "MCP Servers"] },
  { category: "Frontend", items: ["React", "HTML/CSS"] },
  { category: "Backend & Cloud", items: ["Azure", "REST APIs"] },
  { category: "Product", items: ["Full-Stack Development", "Customer-Facing Engineering", "Product Development"] },
];

export const experience: ExperienceItem[] = [
  { company: 'Microsoft', details: ['2024 – Present', 'AI for Network Diagnostics'] },
  { company: 'Komfort', details: ['Founder', 'Ergonomic Laptop Stands'] },
  { company: 'Oceaneers', details: ['Web Developer'] },
  { company: 'Banco ProCredit', details: ['Program Manager'] },
];
