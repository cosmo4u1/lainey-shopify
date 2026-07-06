import { BuilderBackedRoute } from "@/components/BuilderBackedRoute";
import { StaticRoutePage } from "@/components/StaticContent";

type ReadingListsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ReadingListsPage({ searchParams }: ReadingListsPageProps) {
  return (
    <BuilderBackedRoute
      fallback={
        <StaticRoutePage
          body="Book lists for rainy tables, late coffee, and slow weekends. This route renders Builder page content when a matching entry exists and falls back to static copy when Builder content or keys are missing."
          eyebrow="Lainey reading lists"
          title="Reading Lists"
        />
      }
      searchParams={(await searchParams) || {}}
      urlPath="/reading-lists"
    />
  );
}
