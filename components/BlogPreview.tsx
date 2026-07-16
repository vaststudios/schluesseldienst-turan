import Link from "next/link";

import BlogCard from "@/components/blog/BlogCard";
import { getBlogSummaries } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getBlogSummaries().slice(0, 3);

  return (
    <section id="ratgeber" aria-labelledby="ratgeber-title" className="border-t border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">Ratgeber</p>
            <h2 id="ratgeber-title" className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Wissen, bevor es dringend wird.
            </h2>
          </div>
          <div className="lg:justify-self-end lg:text-right">
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Klare Antworten zu Türöffnungen, Preisen und Sicherheit – verständlich erklärt für Mieter und Eigentümer in München.
            </p>
            <Link
              href="/ratgeber"
              className="mt-4 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Alle Ratgeber ansehen <span className="ml-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              headingLevel="h3"
              imageSizes="(min-width: 1344px) 400px, (min-width: 1024px) calc(33vw - 2rem), (min-width: 768px) calc(50vw - 2rem), calc(100vw - 2rem)"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
