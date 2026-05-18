import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent-green text-black font-bold hover:bg-accent-green-dark transition-colors",
  secondary:
    "border border-white/30 text-white hover:border-accent-green transition-colors",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
