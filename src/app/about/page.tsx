import { BuilderBackedRoute } from "@/components/BuilderBackedRoute";
import { StaticRoutePage } from "@/components/StaticContent";

type AboutPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AboutPage({ searchParams }: AboutPageProps) {
  return (
    <BuilderBackedRoute
      fallback={
        <StaticRoutePage
          body="A downtown reading table, a cold coffee, and the habit of noticing what most people skip. The site stays editorial and reading-first rather than store-shaped."
          eyebrow="About Lainey"
          title="About"
        />
      }
      searchParams={(await searchParams) || {}}
      urlPath="/about"
    />
  );
}
