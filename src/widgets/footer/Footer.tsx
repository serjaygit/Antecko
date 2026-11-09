import Container from "@/components/shared/Container";
import { FOOTER_DATA } from "@/config/footer.data";
import CopyrightYear from "@/utils/CopyrightYear";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-8">
      <Container>
        <div className="bg-card p-8 sm:p-12 md:p-16 lg:p-24 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between border-b border-border pb-8 mb-8">
            <div>
              <h3 className="text-xl mb-2">Serjay Antsibor</h3>
              <p className="text-muted-foreground">
                Web designer and full-stack developer. <br /> Websites and
                systems for businesses in the UK and Europe.
              </p>
            </div>
            <nav className="flex flex-col sm:flex-row items-start justify-between lg:justify-end w-full gap-8 md:gap-16 lg:gap-24 xl:gap-36">
              {FOOTER_DATA.map((list) => (
                <div key={list.label}>
                  <h3 className="font-medium font-mono text-foreground mb-2">
                    {list.label}
                  </h3>
                  <ul className="space-y-2">
                    {list.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 sm:items-center sm:flex-row text-sm font-medium">
            <p className="text-muted-foreground">
              © <CopyrightYear /> Antecko. All rights reserved.
            </p>
            <ul>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="@container mt-8 select-none overflow-hidden">
            <p className="whitespace-nowrap text-center font-mono text-[20cqw] font-black uppercase leading-[0.8] tracking-tight text-muted-foreground/20">
              Antecko
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
