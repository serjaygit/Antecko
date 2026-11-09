import { Suspense } from "react";
import { SERVICES_DATA } from "@/config/services.data";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ServicePage({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div>
      <Container>{service.title}</Container>
    </div>
  );
}
