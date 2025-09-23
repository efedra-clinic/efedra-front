import * as motion from "motion/react-client";
import Image from "next/image";

import SocialMedia from "@/components/shared/socialMedia/SocialMedia";
import { GOOGLE_MAPS_URL } from "@/constants/constants";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function Map() {
  return (
    <div className="relative flex flex-col gap-4 md:gap-7 md:w-[48%]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ x: -20, delay: 0.8 })}
        className="hidden lg:block absolute md:right-0 xl:right-[22px] md:-top-[50px] lg:-top-[100px] xl:-top-[124px] md:size-[140px] lg:w-[220px] lg:h-[220px] xl:w-[280px] xl:h-[280px] bg-blue rounded-full z-0"
      ></motion.div>

      <motion.a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ x: 20, delay: 0.4 })}
        className="relative w-[100%] -mr-[25px] md:mr-0 md:w-[100%] h-[145px] md:h-[220px] lg:h-[286px] rounded-[16px] md:rounded-[20px] overflow-hidden"
      >
        <Image
          src="/images/contactsPage/contacts/map.webp"
          alt="map"
          fill
          priority
          fetchPriority="high"
          className="object-cover "
        />
      </motion.a>
    </div>
  );
}
