import Script from "next/script";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { getCanonicalUrl } from "@/utils/getCanonicalUrl";

interface WebPageSchemaProps {
  locale: string;
  path: string;
}

export default async function WebPageSchema({
  locale,
  path,
}: WebPageSchemaProps) {
  // Отримуємо метадані для поточного шляху
  const metadata = await getDefaultMetadata(locale, path);

  const title =
    typeof metadata.title === "string"
      ? metadata.title
      : metadata.title?.absolute || "";

  const description =
    typeof metadata.description === "string"
      ? metadata.description
      : metadata.description || "";

  const url = getCanonicalUrl(locale, path);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
  };

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

