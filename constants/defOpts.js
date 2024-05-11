export const defOpts = {
    cache: "force-cache", // "force-cache" | "no-store" // Deafault to force-cache
    revalidate: 3600,
    referrer: process.env.EZ_TOKEN ?? "",
    api_url: process.env.EZ_API ?? `https://api.ezcontent.io/functions/v1`,
  };