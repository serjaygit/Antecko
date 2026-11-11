export interface PricingPlan {
  name: string;
  duration: string;
  description: string;
  pricePrefix: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const PRICING_DATA: PricingPlan[] = [
  {
    name: "Landing",
    duration: "2-3 weeks",
    description:
      "A focused website for a product, service or campaign that needs to make an impact.",
    pricePrefix: "from",
    price: "£350",
    features: [
      "One-page custom website",
      "Up to 8 content sections",
      "Responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Performance optimisation",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Business",
    duration: "3-5 weeks",
    description:
      "A complete online presence designed to build trust and help your business grow.",
    pricePrefix: "from",
    price: "£750",
    popular: true,
    features: [
      "Up to 5 custom-designed pages",
      "Responsive design",
      "Content structure guidance",
      "CMS integration",
      "Contact forms",
      "SEO and analytics setup",
      "Performance optimisation",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Custom",
    duration: "5-7+ weeks",
    description:
      "A tailored digital experience built around your brand, goals and specific requirements.",
    pricePrefix: "from",
    price: "£1,500",
    features: [
      "Custom page structure",
      "Bespoke UI design",
      "Advanced layouts and interactions",
      "CMS and third-party integrations",
      "Responsive development",
      "Technical SEO setup",
      "Testing and quality assurance",
      "Guided handover",
    ],
  },
];
