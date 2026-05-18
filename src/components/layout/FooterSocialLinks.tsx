import { Instagram, Linkedin } from "lucide-react";
import { FOOTER_SOCIAL_LINKS } from "@/lib/site";

const ICONS = {
  linkedin: Linkedin,
  instagram: Instagram,
} as const;

export function FooterSocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-3">
      {FOOTER_SOCIAL_LINKS.map((social) => {
        const Icon = ICONS[social.id];
        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-green hover:bg-accent-green/10 hover:text-accent-green"
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
