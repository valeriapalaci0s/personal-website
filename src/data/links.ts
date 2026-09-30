// Placeholder values — replaced with the real ones in Phase 5 (task 5.6).

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteLinks {
  email: string;
  substack: string;
  social: SocialLink[];
}

export const links: SiteLinks = {
  email: 'hello@example.com',
  substack: 'https://substack.com',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
    { label: 'X', href: 'https://x.com' },
  ],
};

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  /** Rendered as the white pill call-to-action on desktop. */
  cta?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Writing', href: links.substack, external: true },
  { label: 'Contact', href: '/#contact', cta: true },
];
