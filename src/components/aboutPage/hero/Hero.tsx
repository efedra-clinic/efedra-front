import Image from "next/image";
import * as motion from "motion/react-client";
import Container from "@/components/shared/container/Container";
import BenefitsList from "@/components/shared/benefits/BenefitsList";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("aboutPage.hero");

  return (
    <section className="pt-[14px] lg:pt-[38px] pb-[48px] lg:pb-[78px]">
      <Container>
        <div className="flex flex-col md:flex-row md:gap-5 xl:gap-9">
          <div className="flex flex-col ">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20 })}
              className="max-w-[300px] lg:max-w-[395px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] lg:leading-[135%] uppercase mb-[20.3px] lg:mb-[20px]"
            >
              {t("title")}
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
              className="md:hidden relative w-full md:w-[calc(50%-84.5px)] lg:w-[calc(50%-110px)] xl:w-[calc(50%-15px)] h-[198px] xs:h-[280px] sm:h-[320px] overflow-hidden rounded-[20px] mb-[23.27px]"
            >
              <Image
                src="/images/aboutPage/hero/hero.webp"
                alt="Aesthetic medicine center"
                className="object-cover object-center"
                fill
                priority
                fetchPriority="high"
              />
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="max-w-[438px] mb-[30.8px] xl:mb-0 uppercase md:normal-case md:max-w-[360px] leading-[123%]"
            >
              {t("subtitle")}
            </motion.p>
            <BenefitsList
              className="flex flex-row gap-3 xl:gap-[19.19] flex-wrap min-[320]:flex-nowrap md:max-w-[456px] mt-auto"
              variant="hero"
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
            className="hidden md:block relative w-full md:w-[calc(50%)] lg:w-[calc(50%)] xl:w-[calc(60%)] md:h-auto overflow-hidden rounded-[20px]"
          >
            <Image
              src="/images/aboutPage/hero/hero.webp"
              alt="Aesthetic medicine center"
              className="object-cover object-center"
              fill
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
