const builderPublicApiKey = process.env.BUILDER_PUBLIC_API_KEY?.trim() || "";
const builderPrivateKey = process.env.BUILDER_PRIVATE_KEY?.trim() || "";

export const BUILDER_MODEL_PAGE = process.env.BUILDER_MODEL_PAGE?.trim() || "page";

export function getBuilderRuntimeState() {
  return {
    hasPrivateKey: builderPrivateKey.length > 0,
    hasPublicApiKey: builderPublicApiKey.length > 0,
    pageModel: BUILDER_MODEL_PAGE
  };
}

export function isBuilderPreviewRequest(searchParams: Record<string, string | string[] | undefined>) {
  const previewKeys = [
    "builder.preview",
    "builder.space",
    "builder.cachebust",
    "builder.overrides",
    "__builder_editing__"
  ];

  return previewKeys.some((key) => key in searchParams);
}

export async function fetchBuilderPageContent(options: {
  searchParams?: Record<string, string | string[] | undefined>;
  urlPath: string;
}) {
  if (!builderPublicApiKey) {
    return null;
  }

  const previewRequest = isBuilderPreviewRequest(options.searchParams || {});
  const apiKey = previewRequest && builderPrivateKey ? builderPrivateKey : builderPublicApiKey;
  const params = new URLSearchParams({
    apiKey,
    userAttributes: JSON.stringify({ urlPath: options.urlPath })
  });

  if (previewRequest) {
    params.set("cachebust", "true");
  }

  if (previewRequest && builderPrivateKey) {
    params.set("includeUnpublished", "true");
  }

  const response = await fetch(`https://cdn.builder.io/api/v3/content/${BUILDER_MODEL_PAGE}?${params.toString()}`, {
    next: previewRequest ? { revalidate: 0 } : { revalidate: 60 }
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as {
    results?: unknown[];
  };

  return payload.results?.[0] ?? null;
}
