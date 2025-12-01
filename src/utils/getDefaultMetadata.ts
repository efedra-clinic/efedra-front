import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getHreflangUrls } from "./getCanonicalUrl";
import { pageMetadata } from "./pageMetadata";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getDefaultMetadata(
  locale: string = "uk",
  path: string = "/"
): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const canonical = getCanonicalUrl(locale, path);
  const baseUrl = (SITE_URL || "").replace(/\/+$/, "");

  // Check if there are custom metadata for this path
  const customMetadata = pageMetadata[path];
  const localeKey = locale === "uk" ? "uk" : "ru";

  const title = customMetadata
    ? customMetadata[localeKey]?.title
    : t("title");
  const description = customMetadata
    ? customMetadata[localeKey]?.description
    : t("description");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getHreflangUrls(path),
    },
    openGraph: {
      title: customMetadata ? title : t("openGraph.title"),
      description: customMetadata ? description : t("openGraph.description"),
      images: [
        {
          url: `${baseUrl}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Efedra Center",
        },
      ],
      type: "website",
      locale: locale === "uk" ? "uk_UA" : "ru_RU",
      siteName: "Efedra Center",
      url: canonical,
    },
  };
}
