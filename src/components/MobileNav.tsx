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
        <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full text-white hover:bg-white/10">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-0 bg-background data-[side=right]:w-full data-[side=right]:sm:max-w-none"
      >
        <SheetHeader>
          <SheetTitle className="text-sm font-black tracking-tight uppercase">Valeria Palacios</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <nav aria-label="Main" className="flex flex-col px-4 pt-6">
          {items.map((item) => (
            <SheetClose asChild key={item.label}>
              <a
                href={item.href}
                className="display flex items-center gap-2 border-b border-white/10 py-5 text-5xl"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
                {item.external && <ArrowUpRightIcon aria-hidden="true" className="size-8" />}
                {item.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
