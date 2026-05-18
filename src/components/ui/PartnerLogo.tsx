export function PartnerLogo({ name }: { name: string }) {
  return (
    <div
      className="flex h-16 min-w-[120px] items-center justify-center rounded-xl border border-border bg-bg-surface px-6 text-sm font-semibold text-text-muted grayscale transition-all hover:grayscale-0 hover:text-text-primary"
      title={name}
    >
      {name}
    </div>
  );
}
