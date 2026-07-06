import { BuilderBackedRoute } from "@/components/BuilderBackedRoute";
import { StaticRoutePage } from "@/components/StaticContent";

type ContactPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <BuilderBackedRoute
      fallback={
        <StaticRoutePage
          body="Contact delivery stays as a shell until the email provider is chosen and connected. No subscription or contact backend is implied by this fallback."
          eyebrow="Contact"
          title="Contact"
        />
      }
      searchParams={(await searchParams) || {}}
      urlPath="/contact"
    />
  );
}
