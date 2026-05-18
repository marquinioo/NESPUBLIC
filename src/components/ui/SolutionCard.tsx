import { Link } from "@/i18n/navigation";
import {
  Battery,
  BatteryCharging,
  Radio,
  Smartphone,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

const ICONS: Record<string, LucideIcon> = {
  battery: Battery,
  zap: Zap,
  truck: Truck,
  "battery-charging": BatteryCharging,
  radio: Radio,
  smartphone: Smartphone,
};

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  learnMore: string;
  className?: string;
};

export function SolutionCard({
  icon,
  title,
  description,
  href,
  learnMore,
  className,
}: SolutionCardProps) {
  const Icon = ICONS[icon] ?? Zap;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-bg-surface p-6 transition-colors hover:border-accent-green/40",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 text-sm font-medium text-accent-green transition-colors group-hover:text-accent-green-dark"
      >
        {learnMore}
      </Link>
    </article>
  );
}
