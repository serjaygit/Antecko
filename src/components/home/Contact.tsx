import ContactForm from "@/features/contact/ui/ContactForm";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "hello@webeaver.agency",
    href: "mailto:hello@webeaver.agency",
  },
  { label: "Response time", value: "Within 1 business day" },
  { label: "Based in", value: "London, UK — working worldwide" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <Container>
        <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading
              stacked
              badge="Contact"
              title="Let's talk about your project"
              description="Tell us a bit about what you are building. We'll reply within one business day with next steps and a scoping call link."
            />

            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-border">
                {CONTACT_DETAILS.map((item) => (
                  <tr key={item.label}>
                    <th
                      scope="row"
                      className="w-40 py-4 pr-6 font-normal text-muted-foreground"
                    >
                      {item.label}
                    </th>
                    <td className="py-4">
                      {item.href ? (
                        <a href={item.href} className="hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
