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

  // Отримуємо title - може бути string або об'єкт
  let title = "";
  if (typeof metadata.title === "string") {
    title = metadata.title;
  } else if (metadata.title && typeof metadata.title === "object") {
    title = (metadata.title as { absolute?: string; default?: string; template?: string })
      .absolute ||
      (metadata.title as { absolute?: string; default?: string; template?: string })
        .default ||
      "";
  }

  // Отримуємо description - може бути string або undefined
  const description =
    typeof metadata.description === "string" ? metadata.description : "";

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

