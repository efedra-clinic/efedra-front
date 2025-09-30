import Image from "next/image";
import * as motion from "motion/react-client";

import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";

export default function Philosophy() {
  const t = useTranslations("aboutPage.philosophy");

  return (
    <section className="pt-15 lg:pt-[88px]">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full flex flex-col md:flex-row-reverse md:justify-end md:gap-[40px] xl:gap-[54px] mb-15 min-[360px]:mb-[132px] xs:mb-10 lg:mb-0">
            <div className="w-full flex flex-col mb-7 md:mb-0  md:max-w-[314px]">
              <motion.p
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ y: 20, delay: 0.3 })}
                className="max-w-[438px] mb-[15px] lg:mb-[16px] text-[12px] md:text-[13px] leading-[125%] md:leading-[123%]"
              >
                {t("description1")}
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ y: 20, delay: 0.3 })}
                className="max-w-[438px] text-[12px] md:text-[13px] leading-[125%] md:leading-[123%]"
              >
                {t("description2")}
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
              className="relative w-full md:w-[calc(50%)] lg:w-[calc(50%+30px)] xl:w-[calc(50%+32px)] h-[195px] xs:h-[280px] sm:h-[320px] md:h-[287px] lg:h-[330px] xl:h-[425px] overflow-hidden rounded-[20px]"
            >
              <Image
                src="/images/shared/building.webp"
                alt="building"
                className="object-cover object-center"
                fill
              />
            </motion.div>
          </div>

          <div className="w-full relative lg:max-w-[264px] xl:max-h-[425px]">
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="absolute left-0 bottom-0 sm:bottom-[25%] lg:-left-[110%] xl:-left-[133%] lg:-bottom-[0px] xl:-bottom-[2px] font-evolenta italic h-fit  min-[360px]:max-h-[225px] max-w-[100px]  min-[360px]:max-w-[160px] sm:max-w-[270px] lg:max-w-[400px] xl:max-w-[472px] text-[18px] min-[360px]:text-[24px] xl:text-[32px] uppercase leading-[135%]"
            >
              {t("quote")}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
              className="relative ml-auto w-[calc(50%-28px)] md:w-[calc(50%-50px)] lg:w-[calc(50%+80px)] xl:w-[100%] h-[140px] xs:h-[260px] lg:h-[250px] xl:h-[317px] overflow-hidden rounded-[20px]"
            >
              <Image
                src="/images/aboutPage/philosophy/doctor.webp"
                alt="doctor"
                className="object-cover object-center"
                fill
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
