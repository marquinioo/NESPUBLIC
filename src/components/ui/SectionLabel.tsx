export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-green md:text-sm">
      {children}
    </p>
  );
}
