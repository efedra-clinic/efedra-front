import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";

import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function Founders() {
  return (
    <section className="pt-[60px] lg:pt-[176px]">
      <Container>
        <SectionTitle>Від засновників</SectionTitle>
        <div className="flex flex-col gap-8 md:gap-6 lg:pt-1">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20 })}
              className="relative w-full md:w-[344px] lg:w-[calc(50%-10px)] xl:w-[calc(106%)] h-[231px] xs:h-[330px] sm:h-[450px] md:h-[326px] lg:h-[700px] xl:h-[526px] rounded-[16px] md:rounded-[20px] overflow-hidden"
            >
              <Image
                src="/images/aboutPage/founders/founder1.webp"
                alt="cosmetolog"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-between gap-6 md:gap-2 md:w-[344px] lg:w-[calc(50%-10px)] xl:w-[calc(70%+70px)] lg:gap-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
                className="flex flex-col justify-between gap-4 lg:gap-[35px] pt-7 pr-3 pb-3 pl-4 lg:pt-10 lg:pr-6 lg:pb-4 lg:pl-9 bg-gray-light rounded-[16px]"
              >
                <p className="text-[14px] lg:text-[22px] font-evolenta leading-[136%] lg:leading-[131%] italic uppercase pr-5">
                  “Ми створили центр куди б самі хотіли приходити - з довірою,
                  без страху, з відчуттям затишку та підтримки.”
                </p>
                <div className="flex flex-col gap-[2px] lg:gap-[6px] w-fit self-end">
                  <p className="text-[12px] lg:text-[18px] font-evolenta leading-[134%] uppercase">
                    Марія Пилипенко
                  </p>
                  <p className="text-[8px] lg:text-[12px] leading-[125%]">
                    Засновниця Efedra
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
                className="hidden md:inline-block relative w-full md:h-[100px] lg:h-[323px] xl:h-[178px] rounded-[16px] md:rounded-[20px] overflow-hidden"
              >
                <Image
                  src="/images/aboutPage/founders/cosmetics.webp"
                  alt="cosmetics"
                  fill
                  className="object-cover lg:object-[center_70%] xl:object-center"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
                className="xl:self-end"
              >
                <Link href="/cosmetology">
                  <MainButton
                    variant="beige"
                    withArrow
                    className="xl:h-[56px] xl:w-[258px] xl:px-6"
                  >
                    <span className="text-[14px] lg:text-[15px] font-normal">
                      Естетична медицина
                    </span>
                  </MainButton>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-4 lg:gap-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20 })}
              className="relative w-full md:w-[344px] lg:w-[calc(50%-10px)] xl:w-[calc(106%)] h-[231px] xs:h-[330px] sm:h-[450px] md:h-[326px] lg:h-[700px] xl:h-[526px] rounded-[16px] md:rounded-[20px] overflow-hidden"
            >
              <Image
                src="/images/aboutPage/founders/founder2.webp"
                alt="dentist"
                fill
                className="object-cover object-[center_20%]"
              />
            </motion.div>
            <div className="flex flex-col justify-between gap-6 md:gap-2 md:w-[344px] lg:w-[calc(50%-10px)] xl:w-[calc(70%+70px)] lg:gap-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
                className="flex flex-col justify-between gap-[25px] lg:gap-[48.5px] pt-7 pr-3 pb-3 pl-4 lg:pt-10 lg:pr-10 lg:pb-4 lg:pl-9 bg-gray-light rounded-[16px]"
              >
                <p className="text-[14px] lg:text-[22px] font-evolenta leading-[136%] lg:leading-[131%] italic uppercase pr-5">
                  “Ретельна підготовка та точне планування - запорука найкращого
                  результату!”
                </p>

                <div className="flex flex-col gap-[2px] lg:gap-[6px] w-fit max-w-[116px] lg:max-w-[137px] self-end lg:mr-5">
                  <p className="text-[12px] lg:text-[18px]  font-evolenta leading-[134%] uppercase">
                    Олексій кіпєр
                  </p>
                  <p className="text-[8px] lg:text-[12px] leading-[125%]">
                    Головний лікар та хірург-стоматолог
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
                className="hidden md:inline-block relative w-full md:h-[100px] lg:h-[323px] xl:h-[178px] rounded-[16px] md:rounded-[20px] overflow-hidden"
              >
                <Image
                  src="/images/aboutPage/founders/instruments.webp"
                  alt="dental instruments"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: 20 })}
              >
                <Link href="/dentistry">
                  <MainButton
                    withArrow
                    className="xl:h-[56px] xl:w-[200px] xl:px-[26px]"
                  >
                    <span className="text-[14px] lg:text-[15px] font-normal">
                      Стоматологія
                    </span>
                  </MainButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
