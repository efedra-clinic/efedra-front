import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import Callback from "./CallBack";

interface HeroProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Hero({ category, variant }: HeroProps) {
  const { hero } = category;
  const { title, description, imageOne, imageTwo } = hero;

  return (
    <section className="pb-10 lg:pb-8">
      <Container className="flex flex-col sm:flex-row gap-[22px] lg:gap-9">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: -20 })}
          className="relative w-full sm:w-[250px] md:w-[340px] lg:w-[480px] xl:w-[741px] h-[195px] sm:h-auto rounded-[20px] overflow-hidden shrink-0"
        >
          <Image
            src={imageOne}
            alt="hero image"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
          />
        </motion.div>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20 })}
            className="hidden xl:block relative w-full h-[162px] mb-6 rounded-[20px] overflow-hidden"
          >
            <Image
              src={imageTwo}
              alt="hero image"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1279px) 0px, 33vw"
              className="object-cover object-center"
            />
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="mb-2 lg:mb-3 font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] uppercase"
          >
            {title}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="mb-[25px] text-[14px] lg:text-[15px] leading-[120%]"
          >
            {description}
          </motion.p>

          <Callback variant={variant} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.6 })}
          >
            <Link href="/price">
              <MainButton
                variant="bordered"
                className="xl:h-14 text-[14px] lg:text-[15px] font-normal lg:font-medium leading-[120%]"
                withArrow
              >
                Дивитись ціни
              </MainButton>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
