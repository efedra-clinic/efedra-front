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

interface ServicePageProps {
  params: Promise<{ service: string; locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service, locale } = await params;

  const currentService = await fetchSanityDataServer(serviceBySlugQuery, {
    slug: service,
  });

  const localizedTitle = getLocalizedContent(currentService?.title, locale);
  const localizedDescription = getLocalizedContent(
    currentService?.shortDescription,
    locale
  );

  return {
    title: localizedTitle || (await getDefaultMetadata()).title,
    description:
      localizedDescription || (await getDefaultMetadata()).description,
    openGraph: {
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
