export interface Service {
  slug: string;
  category: string;
  title: string;
  description: string;
  included: string[];
}

export const SERVICES_DATA: Service[] = [
  {
    slug: "landing-pages",
    category: "Web development",
    title: "Landing pages",
    description:
      "Focused digital experiences that turn one clear offer into action.",
    included: [
      "Single-page design built around one goal",
      "Mobile-first, responsive build",
      "Contact or enquiry form",
      "Basic on-page SEO and meta tags",
      "Analytics setup",
      "Launch on your domain",
    ],
  },
  {
    slug: "business-websites",
    category: "Web development",
    title: "Business websites",
    description:
      "Clear, credible websites that make a business easier to understand and trust.",
    included: [
      "Multi-page site (Home, About, Services, Contact)",
      "Mobile-first, responsive build",
      "Contact form",
      "Basic on-page SEO and meta tags",
      "Analytics setup",
      "Launch on your domain",
    ],
  },
  {
    slug: "custom-websites",
    category: "Web development",
    title: "Custom websites",
    description:
      "Purpose-built web experiences for ideas that do not fit a template.",
    included: [
      "Discovery call and project scoping",
      "Custom design and development",
      "Integrations and custom features as agreed",
      "Performance and accessibility checks",
      "Launch and handover",
    ],
  },
  {
    slug: "seo-optimization",
    category: "Growth & Support",
    title: "SEO optimization",
    description:
      "A stronger technical and content foundation for sustainable discovery.",
    included: [
      "Technical SEO audit",
      "Page speed and Core Web Vitals fixes",
      "Keyword and content review",
      "Meta tags, headings and structured data",
      "Written report with next steps",
    ],
  },
];
