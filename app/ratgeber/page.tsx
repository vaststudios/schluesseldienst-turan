import type { Metadata } from "next";
import Link from "next/link";

import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCall from "@/components/MobileCall";
import { blogCategories, getBlogSummaries, type BlogCategory } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "Ratgeber zu Türöffnung, Kosten und Sicherheit";
const description = "Praktische Ratgeber vom Schlüsseldienst Turan in München: Türöffnung, transparente Kosten, Schlüsselverlust, klemmende Schlösser und Einbruchschutz.";

type RatgeberPageProps = {
  searchParams: Promise<{ thema?: string | string[] }>;
};

function parseCategory(value: string | string[] | undefined): BlogCategory | undefined {
  const requested = Array.isArray(value) ? value[0] : value;
  return blogCategories.find(
    (category): category is BlogCategory => category !== "Alle" && category.toLowerCase() === requested?.toLowerCase(),
  );
}

export async function generateMetadata({ searchParams }: RatgeberPageProps): Promise<Metadata> {
  const { thema } = await searchParams;
  const activeCategory = parseCategory(thema);

  return {
    title,
    description,
    alternates: { canonical: "/ratgeber" },
    robots: activeCategory ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url: "/ratgeber",
      title: "Ratgeber für Türen, Schlösser und Sicherheit",
      description: "Klare Antworten zu Türöffnung, Preisen und Sicherheit – verständlich erklärt für München.",
    },
  };
}

export default async function RatgeberPage({ searchParams }: RatgeberPageProps) {
  const { thema } = await searchParams;
  const activeCategory = parseCategory(thema);
  const posts = getBlogSummaries();
  const visiblePosts = activeCategory ? posts.filter((post) => post.category === activeCategory) : posts;
  const listingUrl = absoluteUrl("/ratgeber");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${listingUrl}#collection`,
        url: listingUrl,
        name: title,
        description,
        inLanguage: siteConfig.locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: [
          { "@id": `${siteConfig.url}/#tueroeffnung` },
          { "@id": `${siteConfig.url}/#schlosswechsel` },
        ],
        mainEntity: { "@id": `${listingUrl}#articles` },
      },
      {
        "@type": "ItemList",
        "@id": `${listingUrl}#articles`,
        numberOfItems: visiblePosts.length,
        itemListElement: visiblePosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: absoluteUrl(`/ratgeber/${post.slug}`),
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#main-content" className="skip-to-content">Zum Hauptinhalt springen</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold text-primary">Ratgeber</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Türen, Schlösser und Sicherheit – klar erklärt.
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:justify-self-end">
                Praktische Orientierung für den Notfall und den Alltag. Fachlich eingeordnet, ruhig formuliert und auf typische Situationen in München zugeschnitten.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="artikel-title" className="border-t border-border px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="artikel-title" className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Alle Artikel</h2>
                <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
                  {visiblePosts.length} {visiblePosts.length === 1 ? "Beitrag" : "Beiträge"}{activeCategory ? ` zum Thema ${activeCategory}` : ""}
                </p>
              </div>

              <nav aria-label="Ratgeber nach Thema filtern">
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {blogCategories.map((category) => {
                    const isActive = category === "Alle" ? !activeCategory : activeCategory === category;
                    const href = category === "Alle" ? "/ratgeber" : `/ratgeber?thema=${category.toLowerCase()}`;
                    return (
                      <Link
                        key={category}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {category}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-16 md:grid-cols-2">
              {visiblePosts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCall />
    </>
  );
}
