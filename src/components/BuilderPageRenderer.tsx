"use client";

import { Content } from "@builder.io/sdk-react";
import type { ReactNode } from "react";

type BuilderPageRendererProps = {
  apiKey: string;
  content: unknown;
  fallback: ReactNode;
  hasPublicApiKey: boolean;
  isPreviewRequest: boolean;
  model: string;
  urlPath: string;
};

function PreviewNotice({ hasPublicApiKey, urlPath }: { hasPublicApiKey: boolean; urlPath: string }) {
  const message = hasPublicApiKey
    ? `Builder preview mode is active for ${urlPath}, but no Builder content matched this route yet. Static fallback content is rendering.`
    : `Builder preview mode is active for ${urlPath}, but BUILDER_PUBLIC_API_KEY is missing. Static fallback content is rendering.`;

  return <div className="builder-preview-note">{message}</div>;
}

export function BuilderPageRenderer({
  apiKey,
  content,
  fallback,
  hasPublicApiKey,
  isPreviewRequest,
  model,
  urlPath
}: BuilderPageRendererProps) {
  if (content) {
    return <Content apiKey={apiKey} content={content as never} model={model} />;
  }

  return (
    <>
      {isPreviewRequest ? <PreviewNotice hasPublicApiKey={hasPublicApiKey} urlPath={urlPath} /> : null}
      {fallback}
    </>
  );
}
