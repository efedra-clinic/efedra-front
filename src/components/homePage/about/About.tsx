import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import BenefitsList from "@/components/shared/benefits/BenefitsList";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function About() {
  return (
    <section className="pt-15 lg:pt-[88px] lg:pb-[107px]">
      <Container>
        <SectionTitle>Про центр</SectionTitle>
        <div className="flex flex-col md:flex-row-reverse gap-3.5 lg:gap-[30px]">
          <div className="md:w-[calc(50%+70px)] lg:w-[calc(50%+80px)] xl:w-[calc(50%-15px)]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20 })}
              className="mb-5 flex justify-between items-center"
            >
              <h3 className="max-w-[225px] sm:max-w-[325px] lg:max-w-[425px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[120%] lg:leading-[134%] uppercase">
                Центр, де дбають і про здоров’я, і про красу
              </h3>
              <Link
                href="/about"
                className="group flex items-center justify-center shrink-0 size-11 lg:size-[86px] rounded-full border lg:border-[1.8px] border-beige 
            focus-visible:brightness-125 xl:hover:brightness-125 transition duration-300 ease-in-out will-change-transform"
              >
                <Image
                  src="/images/homePage/about/arrow.svg"
                  alt="arrow icon"
                  width="36"
                  height="33"
                  className="w-5 h-auto lg:w-9 group-active:scale-95 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 
              xl:group-hover:translate-x-0.5 xl:group-hover:-translate-y-0.5 transition duration-300 ease-in-out will-change-transform"
                />
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="max-w-[438px] mb-7 lg:mb-[43px]"
            >
              Центр «Ефедра» — це понад 10 років досвіду, сучасні технології та
              команда, якій довіряють. Ми поєднуємо професіоналізм з теплим
              підходом до кожного пацієнта.
            </motion.p>
            <BenefitsList />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
            className="relative w-full md:w-[calc(50%-84.5px)] lg:w-[calc(50%-110px)] xl:w-[calc(50%-15px)] h-[195px] xs:h-[280px] sm:h-[320px] md:h-[287px] lg:h-[330px] xl:h-[373px] overflow-hidden rounded-[20px]"
          >
            <Image
              src="/images/shared/building.webp"
              alt="building"
              className="object-cover object-center"
              fill
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
