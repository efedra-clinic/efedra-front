export const revalidate = 60;

import type { Metadata } from "next";
import { Suspense } from "react";
import PriceList from "@/components/pricePage/PriceList/PriceList";
import VerticalTitleHero from "@/components/shared/hero/VerticalTitleHero";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { allPriceCategoriesQuery } from "@/lib/queries";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import CTAFormWithBackground from "@/components/shared/cta/CTAFormWithBackground";
import { getTranslations } from "next-intl/server";
import { deepLocalize } from "@/utils/getLocalizedContent";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return await getDefaultMetadata(locale, "/price");
}

export default async function PricePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const categories = await fetchSanityDataServer(allPriceCategoriesQuery);

  // Localize the categories data
  const localizedCategories = deepLocalize(categories || [], locale);

  const t = await getTranslations("price");

  return (
    <>
      <VerticalTitleHero
        title={t("title")}
        image="/images/pricePage/hero/price.webp"
      />
      <MarqueeLine variant="blue" />
      <Suspense fallback={<Loader />}>
        <PriceList categories={localizedCategories} />
      </Suspense>
      <CTAFormWithBackground
        image="/images/shared/cosmetology.webp"
        className="pb-15 lg:pb-[130px]"
        buttonVariant="beige"
      />
    </>
  );
}
