import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cbmcollege.com";

  const routes = [
    "",
    "/about",
    "/courses",
    "/mba-department",
    "/admission",
    "/facilities",
    "/women-empowerment",
    "/staff",
    "/gallery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
