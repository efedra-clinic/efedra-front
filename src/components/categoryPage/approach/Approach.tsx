import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Category } from "@/types/category";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import ApproachList from "./ApproachList";

interface ApproachProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Approach({ category, variant }: ApproachProps) {
  const { approach } = category;
  const { imageMob: ImageMob, imageDesk: ImageDesk, imageTwo, list } = approach;

  return (
    <section className="pt-15 lg:py-11">
      <Container>
        <SectionTitle variant={variant}>наш підхід</SectionTitle>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.9 })}
          className="max-w-[386px] mb-7 xl:mb-0 font-evolenta text-[24px] font-normal leading-[133%] uppercase italic"
        >
          Дбаємо про вас на кожному етапі
        </motion.p>
        <div className="flex flex-col gap-8 sm:flex-row items-end">
          <div className="flex gap-3 mx-auto lg:ml-40 xl:ml-[153px] lg:mx-0 xl:-mt-4">
            <div className="xl:hidden">
              <ImageMob />
            </div>
            <div className="hidden xl:block">
              <ImageDesk />
            </div>
            <ApproachList list={list} variant={variant} />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({
              y: 50,
              x: 50,
              scale: 0.9,
              delay: 0.3,
              duration: 1.4,
            })}
            className="w-fit mx-auto sm:mx-0"
          >
            <Image
              src={imageTwo}
              alt="approach image"
              width="296"
              height="320"
              className="w-[296px] lg:w-[340px] xl:w-[541px] h-auto"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
