import { SERVICES_DATA } from "@/config/services.data";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <Container>
        <Heading
          badge="Services"
          title="What we build, and what it gives you"
          description="Four focused service tracks. Each one is a complete engagement — discovery, design, build, and handover — scoped to the outcome you need."
        />
        <ul className="border-t border-border">
          {SERVICES_DATA.map((service, index) => (
            <li
              key={service.slug}
              className="border-b border-border hover:bg-card/60"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative grid items-start gap-x-8 gap-y-3 py-6 pr-10 transition-all duration-300 hover:scale-98 md:grid-cols-[3rem_1fr_1.4fr_2rem] md:items-center md:px-4 md:py-8"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <span className="mb-1 block text-xs text-muted-foreground">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-medium transition-colors group-hover:text-secondary md:text-2xl">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-md text-muted-foreground">
                  {service.description}
                </p>

                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-0 top-6 size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary md:static"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
