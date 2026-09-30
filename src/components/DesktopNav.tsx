import { ArrowUpRightIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import type { NavItem } from '@/data/links';
import { pill } from '@/lib/styles';

interface Props {
  items: NavItem[];
}

export default function DesktopNav({ items }: Props) {
  const links = items.filter((item) => !item.cta);
  const cta = items.find((item) => item.cta);

  return (
    <div className="flex items-center gap-4">
      <NavigationMenu viewport={false} aria-label="Main">
        <NavigationMenuList className="gap-1">
          {links.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className="gap-1 rounded-full px-3 text-xs font-bold tracking-wide text-white/80 uppercase hover:bg-white/10 hover:text-white focus:bg-white/10"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
                {item.external && <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />}
                {item.external && <span className="sr-only">(opens in a new tab)</span>}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {cta && (
        <a href={cta.href} className={pill('solid', 'h-9')}>
          {cta.label}
        </a>
      )}
    </div>
  );
}
