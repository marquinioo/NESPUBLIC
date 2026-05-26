import { cn } from "@/lib/cn";
import Image from "next/image";

export function PhoneMockup({
  className,
  imageSrc,
  imageAlt = "NES Charge app screenshot",
}: {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] rounded-[2.5rem] border-[6px] border-border bg-bg-subtle p-2 shadow-2xl shadow-accent-green/10 md:w-[300px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-bg-primary" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-b from-bg-surface via-accent-green/20 to-bg-primary">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 260px, 300px"
            className="object-cover"
            quality={90}
            priority={false}
          />
        )}
        <div className="flex h-full flex-col p-4 relative z-10">
          <div className="mb-4 h-3 w-16 rounded bg-accent-green/40" />
          <div className="flex-1 space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-border/50 bg-bg-surface/80 p-2"
              >
                <div className="h-8 w-8 rounded-full bg-accent-green/30" />
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-full rounded bg-border" />
                  <div className="h-2 w-2/3 rounded bg-border/60" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 h-10 rounded-full bg-accent-green/80" />
        </div>
      </div>
    </div>
  );
}
