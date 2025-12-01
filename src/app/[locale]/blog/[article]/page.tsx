export const revalidate = 60;

import type { Metadata } from "next";
import Hero from "@/components/articlePage/hero/Hero";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { postsAndPostBySlugQuery, postBySlugQuery } from "@/lib/queries";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Content from "@/components/articlePage/content/Content";
import RecommendedPosts from "@/components/articlePage/hero/recommendedPosts/RecommendedPosts";
import { Post } from "@/types/post";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { urlFor } from "@/utils/getUrlForSanityImage";
import { getLocalizedContent, deepLocalize } from "@/utils/getLocalizedContent";
import { pageMetadata } from "@/utils/pageMetadata";

interface ArticlePageProps {
  params: Promise<{ article: string; locale: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article, locale } = await params;

  const path = `/blog/${article}`;
  const customMetadata = pageMetadata[path];
  const localeKey = locale === "uk" ? "uk" : "ru";

  const currentPost = await fetchSanityDataServer(postBySlugQuery, {
    slug: article,
  });

  const localizedTitle = getLocalizedContent(currentPost?.title, locale);
  const localizedDescription = getLocalizedContent(
    currentPost?.description,
    locale
  );

  const defaultMetadata = await getDefaultMetadata(locale, path);

  const canonical = 
    typeof defaultMetadata.alternates?.canonical === "string"
      ? defaultMetadata.alternates.canonical
      : undefined;

  // Use custom metadata if available, otherwise use Sanity data, otherwise use default
  const title = customMetadata
    ? customMetadata[localeKey]?.title
    : localizedTitle || defaultMetadata.title;
  const description = customMetadata
    ? customMetadata[localeKey]?.description
    : localizedDescription || defaultMetadata.description;

  // Ensure title and description are strings or undefined (not null) for TypeScript
  const titleString: string | undefined =
    (title ?? null) !== null && typeof title === "string"
      ? title
      : typeof defaultMetadata.title === "string"
      ? defaultMetadata.title
      : undefined;
  const descriptionString: string | undefined =
    (description ?? null) !== null && typeof description === "string"
      ? description
      : typeof defaultMetadata.description === "string"
      ? defaultMetadata.description
      : undefined;

  return {
    title: titleString,
    description: descriptionString,
    alternates: defaultMetadata.alternates,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: titleString,
      description: descriptionString,
      images: [
        {
          url:
            urlFor(currentPost?.image).fit("crop").url() ||
            "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Efedra Center",
        },
      ],
      url: canonical,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article, locale } = await params;

  const res = await fetchSanityDataServer(postsAndPostBySlugQuery, {
    slug: article,
  });

  const post = res?.postBySlug;
  const allPosts = res?.allPosts;

  // Localize the post content
  const localizedPost = post
    ? {
        ...post,
        title: getLocalizedContent(post.title, locale),
        description: getLocalizedContent(post.description, locale),
        content: getLocalizedContent(post.content, locale),
      }
    : null;

  // Localize recommended posts
  const localizedAllPosts = deepLocalize(allPosts || [], locale);
  const recommendedPosts = localizedAllPosts
    ?.filter((post: Post) => post?.slug !== article)
    .slice(0, 12);

  return (
    <>
      <Suspense fallback={<Loader className="h-[440px] lg:h-[700px]" />}>
        <Hero post={localizedPost} />
        <MarqueeLine />
        <Content post={localizedPost} />
        <RecommendedPosts posts={recommendedPosts} />
      </Suspense>
    </>
  );
}
