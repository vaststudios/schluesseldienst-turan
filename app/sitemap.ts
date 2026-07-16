import { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { articleDate, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const siteLastModified = new Date(siteConfig.lastUpdated);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/ratgeber`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: siteLastModified,
    },
  ];

  const articles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/ratgeber/${post.slug}`,
    lastModified: new Date(articleDate(post.updatedAt)),
  }));

  return [...staticPages, ...articles];
}
