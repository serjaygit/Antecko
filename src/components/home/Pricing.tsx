import { PRICING_DATA } from "@/config/pricing.data";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import { cn } from "cn";
import { ArrowUpRight, Check } from "lucide-react";
import QuoteModal from "@/features/quote/ui/QuoteModal";

export default function Pricing() {
  return (
    <section className="py-16 lg:py-24" id="pricing">
      <Container>
        <Heading
          badge="Pricing"
          title="Transparent pricing, scoped to your project"
          description="Every engagement starts with a free scoping call. These are starting points — the final quote reflects your exact scope and priorities."
        />

        <div className="grid items-stretch gap-6 pt-4 lg:grid-cols-3 lg:gap-8 mb-8">
          {PRICING_DATA.map((item) => (
            <div
              key={item.name}
              className={cn(
                "relative flex flex-col rounded-lg border bg-card p-6 transition-colors sm:p-8",
                item.popular
                  ? "border-secondary shadow-lg ring-1 ring-secondary"
                  : "border-border shadow-xs hover:border-input",
              )}
            >
              {item.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground">
                  Most popular
                </span>
              )}

              <div className="mb-3 flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-xl font-semibold">{item.name}</h3>
                <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                  {item.duration}
                </span>
              </div>

              <p className="mb-6 min-h-10 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-mono text-sm text-muted-foreground">
                  {item.pricePrefix}
                </span>
                <p className="text-4xl font-bold tabular-nums tracking-tight">
                  {item.price}
                </p>
              </div>

              <ul className="mb-8 space-y-3 border-t border-border pt-6">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        item.popular
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <QuoteModal
                title="Discuss this option"
                icon={ArrowUpRight}
                variant={item.popular ? "secondary" : "default"}
                className="mt-auto w-full py-5"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between p-6 bg-card border border-border hover:border-input transition-colors rounded-md">
          <div>
            <h3 className="text-xl font-semibold">Need ongoing help?</h3>
            <p className="text-muted-foreground">
              Maintenance & growth support — updates, fixes, new features and
              ongoing SEO, without hiring in-house.
            </p>
          </div>
          <QuoteModal
            title="Ask about support"
            icon={ArrowUpRight}
            variant="outline"
            className="w-full sm:w-fit"
          />
        </div>
      </Container>
    </section>
  );
}
