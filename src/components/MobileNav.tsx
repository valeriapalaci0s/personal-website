import { ArrowUpRightIcon, MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type { NavItem } from '@/data/links';

interface Props {
  items: NavItem[];
}

export default function MobileNav({ items }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-background sm:max-w-xs">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl font-medium tracking-tight">Valeria Palacios</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <nav aria-label="Main" className="flex flex-col px-4">
          {items.map((item) => (
            <SheetClose asChild key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-1 border-b py-4 font-heading text-3xl font-medium tracking-tight"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
                {item.external && <ArrowUpRightIcon aria-hidden="true" className="size-5" />}
                {item.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
