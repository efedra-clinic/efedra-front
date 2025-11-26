export const revalidate = 60;

import type { Metadata } from "next";
import Hero from "@/components/homePage/hero/Hero";
import About from "@/components/homePage/about/About";
import Blog from "@/components/homePage/blog/Blog";
import ChooseUs from "@/components/homePage/chooseUs/ChooseUs";
import Mission from "@/components/homePage/mission/Mission";
import Reviews from "@/components/homePage/reviews/Reviews";
import StartJourneyCTA from "@/components/shared/cta/StartJourneyCTA";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return await getDefaultMetadata(locale, "/");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Hero />
      <MarqueeLine />
      <About />
      <ChooseUs />
      <Mission />
      <Blog locale={locale} />
      <MarqueeLine className="hidden lg:block lg:text-[26px] lg:h-[65px]" />
      <Reviews />
      <StartJourneyCTA
        image="/images/homePage/cta/office.webp"
        className="py-15"
      />
    </>
  );
}
