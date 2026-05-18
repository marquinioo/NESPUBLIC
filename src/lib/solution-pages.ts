import { SOLUTIONS, type SolutionId } from "./site";

export type SolutionDetailId = Exclude<SolutionId, "app">;

export type DetailSection =
  | { type: "overview" }
  | { type: "bullets"; headingKey: string; items: readonly string[] }
  | { type: "specs"; items: readonly string[] }
  | { type: "text"; key: string; variant?: "default" | "highlight" }
  | { type: "grid"; headingKey: string; items: readonly string[] }
  | { type: "cta" };

export const SOLUTION_DETAIL_SECTIONS: Record<
  SolutionDetailId,
  readonly DetailSection[]
> = {
  catl: [
    { type: "overview" },
    {
      type: "bullets",
      headingKey: "services.heading",
      items: ["s1", "s2", "s3", "s4", "s5", "s6", "s7"],
    },
    { type: "text", key: "milestone", variant: "highlight" },
    { type: "cta" },
  ],
  charging: [
    { type: "overview" },
    { type: "specs", items: ["powerRange", "protocol", "features"] },
    { type: "text", key: "usecases" },
    { type: "text", key: "partners", variant: "highlight" },
    { type: "cta" },
  ],
  vehicles: [
    { type: "overview" },
    { type: "grid", headingKey: "types.heading", items: ["v1", "v2", "v3"] },
    { type: "text", key: "partners", variant: "highlight" },
    {
      type: "bullets",
      headingKey: "diffs.heading",
      items: ["d1", "d2", "d3", "d4"],
    },
    { type: "cta" },
  ],
  bess: [
    { type: "overview" },
    { type: "grid", headingKey: "usecases.heading", items: ["u1", "u2", "u3", "u4"] },
    { type: "text", key: "sdg", variant: "highlight" },
    { type: "cta" },
  ],
  iot: [
    { type: "overview" },
    {
      type: "bullets",
      headingKey: "capabilities.heading",
      items: ["c1", "c2", "c3", "c4"],
    },
    { type: "text", key: "platforms", variant: "highlight" },
    { type: "cta" },
  ],
};

export const SOLUTION_DETAIL_SLUGS = SOLUTIONS.filter((s) => s.slug).map(
  (s) => s.slug,
);

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}

export function isSolutionDetailId(id: string): id is SolutionDetailId {
  return id in SOLUTION_DETAIL_SECTIONS;
}
