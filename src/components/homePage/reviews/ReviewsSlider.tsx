"use client";
import { reviewsList } from "./data";
import SwiperWrapper from "@/components/shared/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function ReviewsSlider() {
  const screenWidth = useScreenWidth();
  const isDesktop = screenWidth >= 1024;

  const sliderReviews = isDesktop
    ? reviewsList.slice(1, reviewsList.length)
    : reviewsList;

  return (
    <SwiperWrapper
      swiperClassName="reviews"
      wrapperClassName="lg:flex lg:flex-row-reverse lg:gap-6"
      buttonsWrapperClassName="mt-7 lg:mt-0"
      loop
      breakpoints={{
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        640: { spaceBetween: 16, slidesPerView: 2 },
        1024: { spaceBetween: 20, slidesPerView: "auto" },
      }}
    >
      {sliderReviews.map((review, idx) => (
        <SwiperSlide key={idx}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
}
