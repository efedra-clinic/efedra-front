import Hero from "@/components/categoryPage/hero/Hero";
import { categoriesData } from "./data";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Approach from "@/components/categoryPage/approach/Approach";
import Categories from "@/components/categoryPage/categories/Categories";
import Team from "@/components/categoryPage/team/Team";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allDoctorsQuery, allServicesQuery } from "@/lib/queries";
import { Doctor } from "@/types/doctor";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import Advantages from "@/components/categoryPage/advantages/Advantages";
import MeetCenterCTA from "@/components/shared/cta/MeetCenterCTA";
import CTAFormWithBackground from "@/components/shared/cta/CTAFormWithBackground";
import { Service } from "@/types/service";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const { dentistry, aesthetic } = categoriesData;

  const doctorsList = await fetchSanityDataServer(allDoctorsQuery);

  const servicesList = await fetchSanityDataServer(allServicesQuery);

  const filteredDoctorsList = doctorsList.filter(
    (doctor: Doctor) => doctor?.direction === category
  );

  const filteredServicesList = servicesList.filter(
    (doctor: Service) => doctor?.category === category
  );

  const variant = category === "dentistry" ? "blue" : "beige";

  const currentCategory = category === "dentistry" ? dentistry : aesthetic;

  return (
    <>
      <Hero variant={variant} category={currentCategory} />
      <MarqueeLine variant={variant} />
      <Approach variant={variant} category={currentCategory} />
      <Suspense fallback={<Loader />}>
        <Categories variant={variant} categories={filteredServicesList} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Team variant={variant} doctorsList={filteredDoctorsList} />
      </Suspense>
      <Advantages variant={variant} category={currentCategory} />
      {category === "dentistry" ? (
        <MeetCenterCTA
          imageOne="/images/shared/cosmetic-procedure.webp"
          imageTwo="/images/shared/braces.webp"
          className="py-15 lg:pt-[126px] lg:pb-25"
        />
      ) : (
        <CTAFormWithBackground
          buttonVariant={variant}
          image="/images/shared/cosmetology.webp"
          className="py-15 lg:pt-[126px] lg:pb-25"
        />
      )}
    </>
  );
}
