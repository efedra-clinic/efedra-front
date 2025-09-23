"use client";
import { SwiperSlide } from "swiper/react";
import { certificatesList } from "./data";
import SwiperWrapper from "@/components/shared/swiper/SwiperWrapper";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import CertificateCard from "./CertificateCard";

export default function CertificatesSlider() {
  const screenWidth = useScreenWidth();
  const isDesktop = screenWidth >= 1024;

  const sliderCertificates = isDesktop
    ? certificatesList.slice(2, certificatesList.length)
    : certificatesList;

  return (
    <SwiperWrapper
      swiperClassName="certificates"
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
      {sliderCertificates.map((certificate, idx) => (
        <SwiperSlide key={idx}>
          <CertificateCard certificate={certificate} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
}
