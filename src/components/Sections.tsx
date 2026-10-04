import type { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SocialIcon from '@/components/SocialIcon';
import type { ExperienceItem, SkillGroup, SocialLink } from '@/data/profile';

interface Props {
  about: string[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  socialLinks: SocialLink[];
}

function Section({ value, title, children }: { value: string; title: string; children: ReactNode }) {
  return (
    <AccordionItem value={value} className="border-border">
      <AccordionTrigger className="items-center rounded-none py-4 text-[15px] font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
        <span>{title}</span>
        {/* Nicolas-style toggle label instead of the chevron */}
        <span aria-hidden="true" className="text-sm font-light text-muted-foreground group-aria-expanded/accordion-trigger:hidden">
          more ↓
        </span>
        <span aria-hidden="true" className="hidden text-sm font-light text-muted-foreground group-aria-expanded/accordion-trigger:inline">
          less ↑
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-6 text-[15px] leading-relaxed font-light">{children}</AccordionContent>
    </AccordionItem>
  );
}

const linkClass = 'underline-offset-4 transition-colors hover:text-foreground hover:underline';

export default function Sections({ about, skills, experience, socialLinks }: Props) {
  return (
    <Accordion type="multiple" defaultValue={['about']} className="border-t border-border">
      <Section value="about" title="About me">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </Section>

      <Section value="skills" title="Skills">
        <dl className="grid gap-3">
          {skills.map((group) => (
            <div key={group.category} className="grid gap-0.5 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="text-muted-foreground">{group.category}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section value="experience" title="Experience">
        <ul className="grid gap-3">
          {experience.map((item) => (
            <li key={item.company}>
              <span className="font-medium">{item.company}</span>
              <span className="text-muted-foreground"> · {item.details.join(' · ')}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section value="contact" title="Contact">
        <ul className="grid gap-3 text-muted-foreground">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${linkClass}`}>
                <SocialIcon name={link.icon} size={15} />
                {link.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </Accordion>
  );
}
