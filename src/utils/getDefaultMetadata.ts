import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getHreflangUrls } from "./getCanonicalUrl";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getDefaultMetadata(
  locale: string = "uk",
  path: string = "/"
): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const canonical = getCanonicalUrl(locale, path);
  const baseUrl = (SITE_URL || "").replace(/\/+$/, "");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getHreflangUrls(path),
    },
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      images: [
        {
          url: `${baseUrl}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Efedra Center",
        },
      ],
      type: "website",
      locale: "uk_UA",
      siteName: "Efedra Center",
      url: canonical,
    },
  };
}
