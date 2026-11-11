import QuoteModal from "@/features/quote/ui/QuoteModal";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
          {/* Left Block */}
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
                asChild
              >
                <Link href="/#services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Block */}
          <div className="relative w-full lg:max-w-lg mx-auto rounded-2xl border border-ink-700 bg-ink-900/60 backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-2xl rounded-full" />
            <div className="relative">
              <p className="font-mono text-xs text-ink-500 uppercase tracking-widest mb-6">
                Studio snapshot
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6">
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex flex-col-reverse border-l-2 border-border pl-4"
                  >
                    <h3 className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </h3>
                    <p className="font-heading text-2xl sm:text-3xl font-semibold text-ink-100">
                      {stat.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
