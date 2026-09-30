import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Experience } from '@/data/experience';

interface Props {
  items: Experience[];
}

function formatDates({ start, end }: Experience) {
  return `${start} – ${end ?? 'Present'}`;
}

export default function ExperienceAccordion({ items }: Props) {
  return (
    <Accordion type="multiple" className="border-y border-white/10">
      {items.map((item, index) => (
        <AccordionItem key={`${item.company}-${index}`} value={`item-${index}`}>
          <AccordionTrigger className="items-center gap-4 rounded-none py-5 text-base hover:no-underline">
            <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span>
                <span className="font-semibold">{item.role}</span>
                <span className="text-muted-foreground">, {item.company}</span>
              </span>
              <span className="shrink-0 text-xs font-bold tracking-wide text-muted-foreground uppercase tabular-nums">{formatDates(item)}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-6 text-base text-muted-foreground">
            {item.location && <p className="text-xs font-bold tracking-wide uppercase">{item.location}</p>}
            <p>{item.summary}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="list-disc space-y-1 pl-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
