export const revalidate = 60;

import type { Metadata } from "next";
import Advantages from "@/components/servicePage/advantages/Advantages";
import Contraindications from "@/components/servicePage/contraindications/Contraindications";
import Cost from "@/components/servicePage/cost/Cost";
import Description from "@/components/servicePage/description/Description";
import HowItGoes from "@/components/servicePage/howItGoes/HowItGoes";
import Types from "@/components/servicePage/types/Types";
import CTAFormWithBackground from "@/components/shared/cta/CTAFormWithBackground";
import MeetCenterCTA from "@/components/shared/cta/MeetCenterCTA";
import VerticalTitleHero from "@/components/shared/hero/VerticalTitleHero";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { serviceBySlugQuery } from "@/lib/queries";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { Suspense } from "react";
import Recommended from "@/components/servicePage/recommended/Recommended";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { urlFor } from "@/utils/getUrlForSanityImage";
import { getLocalizedContent, deepLocalize } from "@/utils/getLocalizedContent";
import { pageMetadata } from "@/utils/pageMetadata";

interface ServicePageProps {
  params: Promise<{ service: string; category: string; locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service, category, locale } = await params;

  const path = `/catalog/${category}/${service}`;
  const customMetadata = pageMetadata[path];
  const localeKey = locale === "uk" ? "uk" : "ru";

  const currentService = await fetchSanityDataServer(serviceBySlugQuery, {
    slug: service,
  });

  const localizedTitle = getLocalizedContent(currentService?.title, locale);
  const localizedDescription = getLocalizedContent(
    currentService?.shortDescription,
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
            urlFor(currentService?.mainImage).fit("crop").url() ||
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

export default async function ServicePpage({ params }: ServicePageProps) {
  const { service, locale } = await params;

  const currentService = await fetchSanityDataServer(serviceBySlugQuery, {
    slug: service,
  });

  if (!currentService) return null;

  // Localize the service content
  const localizedService = deepLocalize(currentService, locale);

  const { category } = currentService;

  const variant = currentService?.category === "dentistry" ? "blue" : "beige";

  return (
    <>
      <Suspense fallback={<Loader />}>
        <VerticalTitleHero
          title={localizedService?.title}
          image={urlFor(currentService?.mainImage).fit("crop").url()}
        />
        <MarqueeLine variant={variant} />
        <Description variant={variant} service={localizedService} />
        <Recommended variant={variant} service={localizedService} />
        <HowItGoes variant={variant} service={localizedService} />
        <Advantages variant={variant} service={localizedService} />
        <Contraindications variant={variant} service={localizedService} />
        <Types variant={variant} service={localizedService} />
      </Suspense>
      <Cost variant={variant} />
      {category === "dentistry" ? (
        <MeetCenterCTA
          imageOne="/images/shared/cosmetic-procedure.webp"
          imageTwo="/images/blogPage/hero/imageTwo.webp"
          className="py-15 lg:py-25"
        />
      ) : (
        <CTAFormWithBackground
          buttonVariant={variant}
          image="/images/shared/cosmetology.webp"
          className="py-15 lg:py-25"
        />
      )}
    </>
  );
}
