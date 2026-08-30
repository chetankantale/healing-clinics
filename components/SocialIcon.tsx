import { Facebook, Instagram, Linkedin } from 'lucide-react';

type SocialType = 'facebook' | 'instagram' | 'linkedin';

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin
};

const socialLinks: Record<SocialType, string> = {
  facebook: 'https://www.facebook.com/share/1DVqUfpCK1/',
  instagram: 'https://www.instagram.com/healing_clinic_skin_hair_laser?igsh=ZjlzaDB3cXYzY2N5',
  linkedin: '#'
};

export function SocialIcon({ type }: { type: SocialType }) {
  const Icon = icons[type];
  const href = socialLinks[type];
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-gold hover:text-slate-900"
      aria-label={type}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <Icon size={18} />
    </a>
  );
}
