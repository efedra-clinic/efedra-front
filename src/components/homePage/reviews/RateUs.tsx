import MainButton from "@/components/shared/buttons/MainButton";
import Image from "next/image";
import { GOOGLE_MAPS_URL } from "@/constants/constants";

export default function RateUs() {
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
        вже Користувались нашими послугами?
      </h3>
      <p className="max-w-[342px] lg:mb-4 text-[12px] font-normal leading-[142%] text-center">
        Поділіться своїми враженнями про відвідування нашого центру!
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
          Оцінити нас на Google Картах
        </MainButton>
      </a>
    </div>
  );
}
