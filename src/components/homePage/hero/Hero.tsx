import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("navigation");
  return (
    <section className="pt-3.5 pb-10 lg:pt-[62px] lg:pb-[67px] overflow-hidden">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            scale: 0.95,
            duration: 1.5,
            opacity: 0.01,
          })}
          className="lg:hidden absolute left-[calc(50%-639px)] top-[30px] -z-10 pointer-events-none w-[1063px] h-auto"
        >
          <Image
            src="/images/homePage/hero/bgMob.webp"
            alt="background"
            priority
            fetchPriority="high"
            unoptimized
            sizes="(min-width: 1024px) 0px, 100vw"
            width={1063}
            height={868}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            scale: 0.95,
            duration: 1.5,
            opacity: 0.01,
          })}
          className="hidden lg:block absolute left-[calc(50%-1339px)] lg:left-[calc(50%-1349px)] top-[30px] lg:top-[-92px] -z-10 pointer-events-none w-[2295px] h-auto"
        >
          <Image
            src="/images/homePage/hero/bgDesk.webp"
            alt="background"
            priority
            fetchPriority="high"
            unoptimized
            sizes="(max-width: 1023px) 100vw, 0px"
            width={2295}
            height={1093}
            className="object-cover"
          />
        </motion.div>
        <div className="flex flex-col lg:items-center lg:ml-8 mb-[337px] lg:mb-[261px]">
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.3 })}
              className="max-w-[207px] lg:max-w-[352px] mb-4 font-evolenta text-[36px] lg:text-[62px] font-normal leading-[133%] uppercase"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ y: 20, delay: 0.6 })}
              className="max-w-[193px] lg:max-w-[307px] font-evolenta text-[16px] lg:text-[20px] font-normal leading-[120%] uppercase"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20, delay: 0.9 })}
            className="w-full max-w-[346px] mx-auto lg:mx-0"
          >
            <Link href="/dentistry">
              <MainButton className="lg:h-[69px] px-5 lg:px-5 text-[16px] lg:text-[24px] font-medium">
                {tNav("dentistry")}
              </MainButton>
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20, delay: 1.2 })}
            className="w-full max-w-[356px] mx-auto lg:mx-0"
          >
            <Link href="/aesthetic">
              <MainButton
                variant="beige"
                className="lg:h-[69px] px-5 lg:px-5 text-[16px] lg:text-[24px] font-medium"
              >
                {tNav("aesthetic")}
              </MainButton>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
