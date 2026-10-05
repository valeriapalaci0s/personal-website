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

const toggleClass =
  'shrink-0 text-[15px] font-normal text-muted-foreground transition-colors group-hover/accordion-trigger:text-foreground';

function Section({ value, title, children }: { value: string; title: string; children: ReactNode }) {
  return (
    // The ui default pins the inner height measured on load, leaving a gap after a resize or a
    // phone rotation; let it follow the text instead (open/close animation lives on the outer element).
    <AccordionItem value={value} className="border-border [&_[data-slot=accordion-content]>div]:h-auto">
      <AccordionTrigger className="items-center rounded-none py-6 text-lg font-semibold tracking-tight hover:no-underline sm:text-xl **:data-[slot=accordion-trigger-icon]:hidden">
        <span>{title}</span>
        {/* Nicolas-style toggle label instead of the chevron */}
        <span aria-hidden="true" className={`${toggleClass} group-aria-expanded/accordion-trigger:hidden`}>
          more ↓
        </span>
        <span aria-hidden="true" className={`${toggleClass} hidden group-aria-expanded/accordion-trigger:inline`}>
          less ↑
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-10 text-[17px] leading-[1.75] sm:text-lg [&_p:not(:last-child)]:mb-5">{children}</AccordionContent>
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
        <dl className="grid gap-4">
          {skills.map((group) => (
            <div key={group.category} className="grid gap-0.5 sm:grid-cols-[10.5rem_1fr] sm:gap-6">
              <dt className="text-muted-foreground">{group.category}</dt>
              <dd>{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section value="experience" title="Experience">
        <ul className="grid gap-4">
          {experience.map((item) => (
            <li key={item.company}>
              <span className="font-semibold">{item.company}</span>
              <span className="text-muted-foreground"> · {item.details.join(' · ')}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section value="contact" title="Contact">
        <ul className="grid gap-4 text-muted-foreground">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 ${linkClass}`}>
                <SocialIcon name={link.icon} size={18} />
                {link.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </Accordion>
  );
}
