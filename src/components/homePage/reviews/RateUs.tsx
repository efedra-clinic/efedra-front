import MainButton from "@/components/shared/buttons/MainButton";
import Image from "next/image";
import { GOOGLE_MAPS_URL } from "@/constants/constants";
import { useTranslations } from "next-intl";

export default function RateUs() {
  const t = useTranslations("reviews.rateUs");

  return (
    <div className="flex flex-col items-center gap-y-4 lg:w-[270px] lg:h-[343px] py-8 px-10 lg:px-7 rounded-[20px] bg-blue text-white shrink-0">
      <Image
        src="/images/homePage/reviews/people.webp"
        alt="people"
        width={145}
        height={63}
        className="mb-4"
      />

      <h3 className="max-w-[342px] font-evolenta text-[16px] font-normal leading-[133%] uppercase text-center">
        {t("title")}
      </h3>
      <p className="max-w-[342px] lg:mb-4 text-[12px] font-normal leading-[142%] text-center">
        {t("description")}
      </p>
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <MainButton
          withArrow
          variant="white"
          className="w-full h-[58px] text-[14px] lg:text-[15px] px-5 lg:px-5 font-medium leading-[120%]"
        >
          {t("button")}
        </MainButton>
      </a>
    </div>
  );
}
