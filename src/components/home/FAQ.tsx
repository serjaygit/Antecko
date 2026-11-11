import { FAQ_DATA } from "@/config/faqs.data";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-card" id="faq">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <Heading
            badge="Frequently Asked Questions"
            title="Good questions, straight answers."
          />

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full sm:max-w-3xl rounded-lg border border-border bg-muted px-6 py-2"
          >
            {FAQ_DATA.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground whitespace-normal wrap-break-word">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
