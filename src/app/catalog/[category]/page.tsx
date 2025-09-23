import Hero from "@/components/catalogCategoryPage/hero/Hero";
import { categoriesData } from "./data";
import ServicesList from "@/components/catalogCategoryPage/servicesLIst/ServicesList";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allServicesQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import { Service } from "@/types/service";
import MeetCenterCTA from "@/components/shared/cta/MeetCenterCTA";
import CTAFormWithBackground from "@/components/shared/cta/CTAFormWithBackground";

interface CatalogCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CatalogCategoryPage({
  params,
}: CatalogCategoryPageProps) {
  const { category } = await params;

  const { dentistry, aesthetic } = categoriesData;

  const currentCategory = category === "dentistry" ? dentistry : aesthetic;

  const variant = category === "dentistry" ? "blue" : "beige";

  const servicesList = await fetchSanityDataServer(allServicesQuery);

  const filteredServicesList = servicesList.filter(
    (doctor: Service) => doctor?.category === category
  );

  return (
    <>
      <Hero variant={variant} category={currentCategory} />
      <Suspense fallback={<Loader />}>
        <ServicesList
          services={filteredServicesList}
          variant={variant}
          category={category}
        />
      </Suspense>
      {category === "dentistry" ? (
        <MeetCenterCTA
          imageOne="/images/shared/cosmetic-procedure.webp"
          imageTwo="/images/shared/braces.webp"
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
