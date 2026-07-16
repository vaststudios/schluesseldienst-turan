import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCall from "@/components/MobileCall";
import { Button } from "@/components/ui/button";
import { blogPosts, formatBlogDate, getBlogPost, getBlogWordCount } from "@/lib/blog";
import { absoluteUrl, articleDate, siteConfig } from "@/lib/site";

const baseUrl = siteConfig.url;

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/ratgeber/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/ratgeber/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Schlüsseldienst Turan"],
      images: [{ url: post.image, width: 1536, height: 1024, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image] },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((relatedPost): relatedPost is NonNullable<typeof relatedPost> => Boolean(relatedPost));

  const url = `${baseUrl}/ratgeber/${post.slug}`;
  const imageUrl = absoluteUrl(post.image);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1536,
          height: 1024,
        },
        datePublished: articleDate(post.publishedAt),
        dateModified: articleDate(post.updatedAt),
        inLanguage: "de-DE",
        articleSection: post.category,
        keywords: [post.category, "Schlüsseldienst München", "Türöffnung München"],
        wordCount: getBlogWordCount(post),
        isAccessibleForFree: true,
        author: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: siteConfig.name,
          url: baseUrl,
        },
        publisher: { "@id": `${baseUrl}/#organization` },
        mainEntityOfPage: url,
        isPartOf: { "@id": `${baseUrl}/#website` },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${baseUrl}/ratgeber` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#main-content" className="skip-to-content">Zum Hauptinhalt springen</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <nav aria-label="Brotkrümelnavigation" className="text-sm text-muted-foreground">
                <Link href="/" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">Startseite</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link href="/ratgeber" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">Ratgeber</Link>
              </nav>

              <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground sm:text-sm">
                <span className="text-primary">{post.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true">·</span>
                <span>Von {siteConfig.name}</span>
                {post.updatedAt !== post.publishedAt ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Aktualisiert <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time></span>
                  </>
                ) : null}
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{post.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">{post.excerpt}</p>
            </div>
          </header>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto aspect-[3/2] max-w-6xl overflow-hidden rounded-md bg-muted">
              <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1280px) 1152px, 94vw" className="object-cover" />
              <span className="image-outline pointer-events-none absolute inset-0 rounded-md" aria-hidden="true" />
            </div>
          </div>

          <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,720px)] lg:gap-16">
              <aside className="hidden lg:block">
                <nav aria-label="Inhaltsverzeichnis" className="sticky top-28 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">In diesem Artikel</p>
                  <ol className="mt-4 space-y-3 text-sm leading-5">
                    {post.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="rounded-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>

              <div className="min-w-0">
                <div className="space-y-5 border-l-2 border-primary pl-5 text-lg leading-8 sm:pl-7 sm:text-xl sm:leading-9">
                  {post.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>

                <div className="mt-14 space-y-14 sm:mt-20 sm:space-y-20">
                  {post.sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-28">
                      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">{section.title}</h2>
                      <div className="mt-5 space-y-5 text-base leading-8 text-foreground/85 sm:text-[1.0625rem]">
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-6 space-y-3 border-y border-border py-5 text-base leading-7 text-foreground/85">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="grid grid-cols-[12px_1fr] gap-3">
                              <span className="mt-[0.68rem] size-1.5 rounded-full bg-primary" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>

                <section aria-labelledby="faq-title" className="mt-20 border-t border-border pt-12">
                  <p className="text-sm font-semibold text-primary">Kurz beantwortet</p>
                  <h2 id="faq-title" className="mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Häufige Fragen</h2>
                  <div className="mt-7 divide-y divide-border border-y border-border">
                    {post.faq.map((item) => (
                      <div key={item.question} className="py-6">
                        <h3 className="text-base font-semibold sm:text-lg">{item.question}</h3>
                        <p className="mt-2 text-base leading-7 text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <aside className="mt-16 rounded-md bg-primary px-6 py-8 text-primary-foreground sm:px-9 sm:py-10">
                  <p className="text-sm font-semibold text-primary-foreground/75">Brauchen Sie direkte Hilfe?</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Beschreiben Sie uns kurz Ihre Türsituation.</h2>
                  <p className="mt-3 max-w-xl leading-7 text-primary-foreground/75">Wir ordnen den Aufwand ein und bestätigen den Preis vor Arbeitsbeginn.</p>
                  <Button asChild variant="secondary" size="lg" className="mt-6 h-12 rounded-md px-5">
                    <a href="tel:+4915565906604">0155 659 066 04 anrufen</a>
                  </Button>
                </aside>
              </div>
            </div>
          </div>
        </article>

        <section aria-labelledby="weitere-artikel" className="border-t border-border px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-5">
              <h2 id="weitere-artikel" className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">Weiterlesen</h2>
              <Link href="/ratgeber" className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                Alle Artikel <span className="ml-1" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-8 grid gap-x-10 gap-y-14 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => <BlogCard key={relatedPost.slug} post={relatedPost} headingLevel="h3" />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCall />
    </>
  );
}
