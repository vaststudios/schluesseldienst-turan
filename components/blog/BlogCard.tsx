import Image from "next/image";
import Link from "next/link";

import { formatBlogDate, type BlogSummary } from "@/lib/blog";

type BlogCardProps = {
  post: BlogSummary;
  headingLevel?: "h2" | "h3";
  imageSizes?: string;
};

export default function BlogCard({
  post,
  headingLevel = "h2",
  imageSizes = "(min-width: 1344px) 620px, (min-width: 768px) calc(50vw - 2.75rem), calc(100vw - 2rem)",
}: BlogCardProps) {
  const Heading = headingLevel;
  const articleHref = `/ratgeber/${post.slug}#main-content`;

  return (
    <article className="group flex h-full flex-col border-t border-border pt-4">
      <Link
        href={articleHref}
        scroll
        className="relative aspect-[3/2] overflow-hidden rounded-md bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        aria-label={`${post.title} lesen`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
        <span className="image-outline pointer-events-none absolute inset-0 rounded-md" aria-hidden="true" />
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground">
          <span className="text-primary">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        <Heading className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
          <Link
            href={articleHref}
            scroll
            className="rounded-sm decoration-primary/30 underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{post.excerpt}</p>
        <Link
          href={articleHref}
          scroll
          className="mt-5 inline-flex min-h-11 w-fit items-center rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Artikel lesen <span className="ml-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
