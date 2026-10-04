import { siGithub, siSubstack, siX } from 'simple-icons';
import type { SocialIcon as IconName } from '@/data/profile';

// simple-icons (CC0) dropped LinkedIn at LinkedIn's request, so its mark is drawn here:
// a rounded square with the "in" cut out (even-odd fill).
const linkedinPath =
  'M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z' +
  'M5.6 7.2a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0-3.2 0Z' +
  'M5.8 9.8h2.8v8.4H5.8Z' +
  'M10.4 9.8h2.6v1.2c.5-.8 1.5-1.4 2.8-1.4 2.3 0 3.4 1.5 3.4 4v4.6h-2.7v-4.2c0-1.2-.4-2-1.5-2s-1.9.8-1.9 2v4.2h-2.7Z';

const paths: Record<IconName, string> = {
  linkedin: linkedinPath,
  x: siX.path,
  substack: siSubstack.path,
  github: siGithub.path,
};

interface Props {
  name: IconName;
  size?: number;
  className?: string;
}

export default function SocialIcon({ name, size = 18, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      fillRule="evenodd"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
