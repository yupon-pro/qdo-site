import type { MetadataRoute } from "next";

const rootUrl = "https://kyushu-debate-open-2024.vercel.app"

export default function sitemap():MetadataRoute.Sitemap{
  const paths = [
    { path:"/", priority: 1},
    { path:"/about", priority: 0.9},
    { path:"/about/fukuoka", priority: 0.7},
    { path:"/about/kyushu-university", priority: 0.6},
    { path:"/staff", priority: 0.6 },
    { path:"/tournament", priority: 0.8 },
    { path:"/tournament/registration", priority: 0.5 },
    { path:"/tournament/visit", priority: 0.4 },
    { path:"/tournament/schedule", priority: 0.3 },
    { path:"/partners", priority: 0.2 },
    { path:"/contact", priority: 0.1 },
  ];

  return paths.map( path => ({
    url: rootUrl + path.path, 
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: path.priority
  }));
  
}