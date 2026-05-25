export const defOpts = {
    cache: process.env.EZ_CACHE ?? "force-cache", // "force-cache" | "no-store" // Deafaults to force-cache
    revalidate: process.env.EZ_FRESH ?? 3600,
    hash: process.env.EZ_HASH ??'revalidate',
    referrer: process.env.EZ_TOKEN ?? "",
    api_url: process.env.EZ_API ?? `https://api.ezcontent.io`,
    preview_origin: process.env.NEXT_PUBLIC_EZ_EDITOR_ORIGIN ?? "https://my.ezcontent.io",
  };