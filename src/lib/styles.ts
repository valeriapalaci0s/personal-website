import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PillVariant = 'solid' | 'outline';

/** Sonora-style pill button classes: white solid pill, or a white-outlined pill on dark. */
export function pill(variant: PillVariant = 'solid', className?: string) {
  return cn(
    buttonVariants({ variant: variant === 'solid' ? 'default' : 'outline', size: 'lg' }),
    'h-10 rounded-full px-5 text-xs font-bold tracking-wide uppercase',
    variant === 'outline' && 'border-white/35 bg-transparent hover:bg-white hover:text-black',
    className,
  );
}
