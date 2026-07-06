import type { ReactNode } from "react";

import { fetchBuilderPageContent, getBuilderRuntimeState, isBuilderPreviewRequest } from "@/builder/runtime";
import { BuilderPageRenderer } from "@/components/BuilderPageRenderer";

type BuilderBackedRouteProps = {
  fallback: ReactNode;
  searchParams?: Record<string, string | string[] | undefined>;
  urlPath: string;
};

export async function BuilderBackedRoute({ fallback, searchParams = {}, urlPath }: BuilderBackedRouteProps) {
  const runtimeState = getBuilderRuntimeState();
  const content = await fetchBuilderPageContent({ searchParams, urlPath });

  return (
    <BuilderPageRenderer
      apiKey={process.env.BUILDER_PUBLIC_API_KEY?.trim() || ""}
      content={content}
      fallback={fallback}
      hasPublicApiKey={runtimeState.hasPublicApiKey}
      isPreviewRequest={isBuilderPreviewRequest(searchParams)}
      model={runtimeState.pageModel}
      urlPath={urlPath}
    />
  );
}
