import QuoteModal from "@/features/quote/ui/QuoteModal";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "48h", label: "Reply to every enquiry" },
  { value: "1:1", label: "Work directly with the developer" },
  { value: "100%", label: "Mobile-ready builds" },
  { value: "£400", label: "Projects from" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-6rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[28px_28px] text-foreground/15 mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left: message */}
          <div>
            <h1 className="font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-2xl mb-6">
              Web development that{" "}
              <span className="text-muted-foreground block">
                makes your offer
              </span>{" "}
              <span className="text-secondary block">
                impossible to ignore.
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl text-base sm:text-lg mb-8">
              Hi, I&apos;m Serjay — an independent web developer creating
              thoughtful websites, dashboards and digital systems for growing
              businesses.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <QuoteModal
                title="Estimate My Project"
                variant="secondary"
                className="px-4 py-6 rounded-full"
                icon={ArrowUpRight}
              />
              <Button
                variant="outline"
                size="lg"
                className="px-4 py-6 rounded-full"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right: snapshot card */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none rounded-2xl border border-ink-700 bg-ink-900/60 backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-2xl rounded-full" />
            <div className="relative">
              <p className="font-mono text-xs text-ink-500 uppercase tracking-widest mb-6">
                Studio snapshot
              </p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse border-l-2 border-ink-700 pl-4"
                  >
                    <dt className="text-xs text-ink-500 mt-1">{stat.label}</dt>
                    <dd className="font-display text-2xl sm:text-3xl font-semibold text-ink-100">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 pt-6 border-t border-ink-700/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex -space-x-2">
                  {["#c8ff3e", "#525252", "#a1a1aa", "#71717a"].map((c) => (
                    <div
                      key={c}
                      className="w-8 h-8 rounded-full border-2 border-ink-900"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <span className="text-xs text-ink-500">
                  Trusted by founders & teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
