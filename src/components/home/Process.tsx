import { Code2, LucideIcon, PenTool, Rocket, Search } from "lucide-react";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We define the goal, audience, and success metrics before a single pixel is drawn.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "A custom, responsive design system tailored to your brand and conversion goals.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Clean, performant, accessible code, with no bloated templates and no shortcuts.",
  },
  {
    icon: Rocket,
    title: "Handover",
    description:
      "Testing, documentation, and a guided walkthrough so you are fully in control.",
  },
];

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <Container>
        <Heading
          title="A clear path from first call to launch day"
          badge="Process"
        />
        <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_DATA.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="group bg-background/90 p-6 transition-colors hover:bg-muted sm:p-8"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="group-hover:border-secondary bg-card rounded-sm border border-border transition-colors p-2.5">
                  <Icon
                    className="size-5 group-hover:text-secondary transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="font-mono text-3xl font-bold text-muted-foreground/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-mono font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
