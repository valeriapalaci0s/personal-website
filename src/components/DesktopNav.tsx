import { ArrowUpRightIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import type { NavItem } from '@/data/links';

interface Props {
  items: NavItem[];
}

export default function DesktopNav({ items }: Props) {
  return (
    <NavigationMenu viewport={false} aria-label="Main">
      <NavigationMenuList className="gap-1">
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink
              href={item.href}
              className="gap-1 px-3"
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
  );
}
