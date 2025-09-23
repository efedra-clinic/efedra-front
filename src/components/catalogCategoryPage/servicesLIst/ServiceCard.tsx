import MainButton from "@/components/shared/buttons/MainButton";
import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface ServiceCardProps {
  service: Service;
  variant: "blue" | "beige";
  category: string;
}

export default function ServiceCard({
  service,
  variant,
  category,
}: ServiceCardProps) {
  const { slug, title, shortDescription, categoryImage } = service;

  return (
    <Link
      href={`/catalog/${category}/${slug}`}
      className={`flex flex-col h-full border lg:border-2 rounded-[12px] lg:rounded-[20px] overflow-hidden ${variant === "blue" ? "border-blue" : "border-beige"}`}
    >
      <div className="relative w-full h-30 lg:h-60 rounded-t-[12px] lg:rounded-t-[20px]">
        <Image
          src={urlFor(categoryImage).fit("crop").url()}
          fill
          alt={title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between p-3 lg:p-6">
        <h2 className="mb-2 lg:mb-4 font-evolenta text-[12px] lg:text-[24px] font-normal leading-[133%] uppercase">
          {title}
        </h2>
        <div>
          <p className="mb-3 lg:mb-6 text-[8px] lg:text-[14px] font-normal leading-[120%] line-clamp-3">
            {shortDescription}
          </p>
          <MainButton
            className="h-8 lg:h-[50px] px-5 lg:px-5 text-[12px] lg:text-[18px] font-medium"
            variant={variant}
          >
            Детальніше
          </MainButton>
        </div>
      </div>
    </Link>
  );
}
