import { BuilderBackedRoute } from "@/components/BuilderBackedRoute";
import { StaticHomePage } from "@/components/StaticContent";

type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  return <BuilderBackedRoute fallback={<StaticHomePage />} searchParams={(await searchParams) || {}} urlPath="/" />;
}
