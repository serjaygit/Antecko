interface Props {
  title: string;
  badge: string;
  description?: string;
  /** Keep title and description in one column on large screens (for narrow columns) */
  stacked?: boolean;
}

export default function Heading({
  title,
  badge,
  description,
  stacked = false,
}: Props) {
  return (
    <div
      className={`mb-8 flex flex-col gap-4 lg:mb-12 ${
        stacked
          ? ""
          : "lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
      }`}
    >
      <div className={stacked ? "" : "lg:max-w-xl"}>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary">
          / {badge}
        </p>
        <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={`leading-relaxed text-muted-foreground ${
            stacked ? "max-w-md" : "lg:max-w-md"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
