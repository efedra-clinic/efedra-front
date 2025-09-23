import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import Container from "@/components/shared/container/Container";
import Callback from "@/components/categoryPage/hero/CallBack";
import MainButton from "@/components/shared/buttons/MainButton";

interface HeroProps {
  category: { title: string; description: string };
  variant: "blue" | "beige";
}

export default function Hero({ category, variant }: HeroProps) {
  const { title, description } = category;

  return (
    <section className="pt-4 lg:pt-5">
      <Container className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-10">
        <div
          className={`sm:flex flex-col justify-between sm:max-w-[230px] md:max-w-[400px] ${variant === "blue" ? "xl:max-w-[500px]" : "xl:max-w-[550px]"}`}
        >
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20 })}
            className="mb-2 font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] uppercase"
          >
            {title}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20, delay: 0.3 })}
            className="text-[14px] lg:text-[15px] font-normal leading-[120%]"
          >
            {description}
          </motion.p>
        </div>
        <div className="flex flex-col justify-center sm:max-w-[300px] lg:max-w-[380px] shrink-0">
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
