interface Props {
  title: string;
  badge: string;
  description?: string;
}

export default function Heading({ title, badge, description }: Props) {
  return (
    <div className="grid lg:grid-cols-12 gap-4 mb-8 lg:mb-16">
      <div className="lg:col-span-4">
        <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">
          / {badge}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-5 lg:col-start-8 flex items-end">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
