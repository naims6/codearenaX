import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/service";
import { ServiceDetail } from "@/components/pages/ServiceDetail/ServiceDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found — CodeArenaX" };

  return {
    title: `${service.title} — CodeArenaX IT Solutions`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-16">
      <ServiceDetail service={service} />
    </main>
  );
}
