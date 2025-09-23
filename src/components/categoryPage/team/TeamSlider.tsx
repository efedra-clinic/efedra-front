"use client";

import { Doctor } from "@/types/doctor";
import { SwiperSlide } from "swiper/react";
import SwiperWrapper from "@/components/shared/swiper/SwiperWrapper";
import TeamCard from "./TeamCard";

interface TeamSliderProps {
  doctorsList: Doctor[];
  variant: "blue" | "beige";
}

export default function TeamSlider({ doctorsList, variant }: TeamSliderProps) {
  return (
    <SwiperWrapper
      swiperClassName="team"
      buttonsWrapperClassName="mt-5 lg:mt-[34px]"
      variant={variant}
      loop
      breakpoints={{
        0: {
          spaceBetween: 16,
          slidesPerView: "auto",
          centeredSlides: true,
        },
        1280: {
          spaceBetween: 26,
          slidesPerView: "auto",
          centeredSlides: true,
        },
      }}
    >
      {doctorsList.map((doctor, idx) => (
        <SwiperSlide key={idx}>
          <TeamCard doctor={doctor} variant={variant} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
}
