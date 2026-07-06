import { BuilderBackedRoute } from "@/components/BuilderBackedRoute";
import { StaticRoutePage } from "@/components/StaticContent";

type EssaysPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function EssaysPage({ searchParams }: EssaysPageProps) {
  return (
    <BuilderBackedRoute
      fallback={
        <StaticRoutePage
          body="Small observations, quiet systems, and notes that stay with you. This route renders Builder page content when a matching entry exists and falls back to static copy when Builder content or keys are missing."
          eyebrow="Lainey essays"
          title="Essays"
        />
      }
      searchParams={(await searchParams) || {}}
      urlPath="/essays"
    />
  );
}
