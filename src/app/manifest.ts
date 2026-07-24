import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0B0F",
    theme_color: "#0A0B0F",
    icons: [{ src: "/icon", sizes: "any", type: "image/png" }],
  };
}
