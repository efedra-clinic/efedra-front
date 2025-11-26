export const revalidate = 60;

import type { Metadata } from "next";
import BlogList from "@/components/blogPage/blogList/BlogList";
import Hero from "@/components/blogPage/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allPostsQuery } from "@/lib/queries";
import { deepLocalize } from "@/utils/getLocalizedContent";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return await getDefaultMetadata(locale, "/blog");
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await fetchSanityDataServer(allPostsQuery);

  // Localize the posts content
  const localizedPosts = deepLocalize(posts || [], locale);

  return (
    <>
      <Hero />
      <MarqueeLine />
      <Suspense fallback={<Loader />}>
        <BlogList posts={localizedPosts} />
      </Suspense>
    </>
  );
}
