export const defOpts = {
    cache: process.env.EZ_CACHE ?? "force-cache", // "force-cache" | "no-store" // Deafaults to force-cache
    revalidate: 3600,
    referrer: process.env.EZ_TOKEN ?? "",
    api_url: process.env.EZ_API ?? `https://api.ezcontent.io`,
  };