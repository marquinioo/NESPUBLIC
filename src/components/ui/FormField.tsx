import { cn } from "@/lib/cn";

const inputClass =
  "w-full rounded-xl border border-border bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted/60 transition-colors focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green";

type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  optional?: boolean;
  error?: string;
} & (
  | { as?: "input"; defaultValue?: string }
  | { as: "textarea"; defaultValue?: string; rows?: number }
  | { as: "select"; defaultValue?: string; children: React.ReactNode }
);

export function FormField(props: FormFieldProps) {
  const { label, name, required, optional, error } = props;
  const id = `field-${name}`;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-text-primary">
        {label}
        {optional && (
          <span className="ml-1 font-normal text-text-muted">({optional})</span>
        )}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={props.rows ?? 5}
          required={required}
          defaultValue={props.defaultValue}
          className={cn(inputClass, "resize-y min-h-[120px]")}
        />
      ) : props.as === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          defaultValue={props.defaultValue ?? ""}
          className={cn(inputClass, "cursor-pointer")}
        >
          {props.children}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? "text"}
          required={required}
          defaultValue={props.defaultValue}
          className={inputClass}
        />
      )}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
