// Placeholder entries — replaced with real experience in Phase 5 (task 5.3).

export interface Experience {
  role: string;
  company: string;
  start: string;
  /** Omit for a current role. */
  end?: string;
  location?: string;
  summary: string;
  highlights?: string[];
}

export const experience: Experience[] = [
  {
    role: 'Role title',
    company: 'Company One',
    start: '2024',
    location: 'City',
    summary: 'One or two sentences about what you do here and the impact it has.',
    highlights: ['A highlight or achievement', 'Another highlight worth mentioning'],
  },
  {
    role: 'Role title',
    company: 'Company Two',
    start: '2022',
    end: '2024',
    location: 'City',
    summary: 'One or two sentences about the scope of this role.',
    highlights: ['A highlight or achievement'],
  },
  {
    role: 'Internship title',
    company: 'Company Three',
    start: '2021',
    end: '2022',
    summary: 'A short description of what you worked on.',
  },
  {
    role: 'Degree, Field of study',
    company: 'University',
    start: '2018',
    end: '2022',
    summary: 'Focus areas, honors or anything notable.',
  },
];
