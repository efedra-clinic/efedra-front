import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import Image from "next/image";
import * as motion from "motion/react-client";
import { listVariants, listItemVariants } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface RecommendedProps {
  service: Service;
  variant: "beige" | "blue";
}

export default function Recommended({ service, variant }: RecommendedProps) {
  const { recommended } = service;

  if (!recommended || recommended?.length < 4) return null;

  const recommendedList = recommended?.slice(0, 4);

  return (
    <section className="pt-15 lg:pt-25">
      <Container>
        <SectionTitle variant={variant}>Коли рекомендовано</SectionTitle>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
          className="flex flex-wrap sm:flex-nowrap gap-x-7 gap-y-6 sm:gap-0 sm:justify-between"
        >
          {recommendedList.map(({ image, text }, idx) => (
            <motion.li
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              key={idx}
              className="flex flex-col items-center w-[calc(50%-14px)] sm:w-[calc(25%-21px)]"
            >
              <div
                className={`size-[122px] lg:size-[176px] relative mb-2 lg:mb-8 rounded-full overflow-hidden border-2 ${variant === "blue" ? "border-blue" : "border-beige"}`}
              >
                <Image
                  src={urlFor(image).fit("crop").url()}
                  alt="recommended"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="max-w-[164px] lg:max-w-[204px] font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] uppercase text-center">
                {text}
              </h3>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
