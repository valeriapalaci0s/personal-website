import { useState } from 'react';
import { CheckIcon, CopyIcon, MailIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Props {
  email: string;
}

export default function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success('Email copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); fall back to the mail client.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="lg" className="px-5" onClick={copy} aria-label={`Copy email address ${email}`}>
            <MailIcon aria-hidden="true" />
            {email}
            {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{copied ? 'Copied!' : 'Click to copy'}</TooltipContent>
      </Tooltip>
      {/* The site has no dark mode, so the toaster is pinned to light. */}
      <Toaster theme="light" position="bottom-center" />
    </TooltipProvider>
  );
}
