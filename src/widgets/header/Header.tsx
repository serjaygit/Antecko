import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Navbar from "./Navbar";

import HeaderMobile from "./HeaderMobile";
import QuoteModal from "@/features/quote/ui/QuoteModal";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between rounded-full bg-card/70 px-4 shadow-xs backdrop-blur-2xl border border-border">
          <Logo />
          <Navbar />
          <div className="hidden lg:inline-flex items-center gap-2">
            <QuoteModal title="Estimate My Project" />
          </div>
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
}
