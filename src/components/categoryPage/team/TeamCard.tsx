import { Doctor } from "@/types/doctor";
import Image from "next/image";
import { urlFor } from "@/utils/getUrlForSanityImage";
import { useTranslations } from "next-intl";

interface TeamCardProps {
  doctor: Doctor;
  variant: "beige" | "blue";
}

export default function TeamCard({ doctor, variant }: TeamCardProps) {
  const { name, photo, position, startYear, description } = doctor;
  const t = useTranslations("team");

  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;

  const getYearWord = (num: number) => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return t("years.many");
    }
    if (lastDigit === 1) {
      return t("years.one");
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return t("years.few");
    }
    return t("years.many");
  };

  return (
    <div
      className={`h-full rounded-[20px] border-3 overflow-hidden ${
        variant === "blue" ? "border-blue" : "border-beige"
      }`}
    >
      <div className="relative h-[294px]">
        <Image
          src={urlFor(photo).fit("crop").url()}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 pt-4 pb-7 lg:pt-6 lg:pb-10 lg:px-6">
        <h3 className="mb-2 lg:mb-3 font-evolenta text-[20px] lg:text-[24px] font-normal leading-[133%] uppercase">
          {name}
        </h3>
        <div className="flex items-center gap-2 lg:mb-2">
          <p className="text-[12px] lg:text-[15px] font-medium leading-[120%]">
            {t("position")}
          </p>
          <p className="text-[12px] lg:text-[15px] font-normal leading-[120%]">
            {position}
          </p>
        </div>
        <div className="flex items-center gap-2 mb-2 lg:mb-2.5">
          <p className="text-[12px] lg:text-[15px] font-medium leading-[120%]">
            {t("experience")}
          </p>
          <p className="text-[12px] lg:text-[15px] font-normal leading-[120%]">
            {experience} {getYearWord(experience)}
          </p>
        </div>
        <p className="text-[12px] lg:text-[14px] font-normal leading-[120%]">
          {description}
        </p>
      </div>
    </div>
  );
}
