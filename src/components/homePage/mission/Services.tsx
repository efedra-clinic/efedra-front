import Image from "next/image";
import { Link } from "@/i18n/navigation";
import MainButton from "@/components/shared/buttons/MainButton";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("mission.services");

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-7 mb-7 lg:mb-[54px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: -20 })}
          className="relative w-full h-[355px] rounded-[20px] overflow-hidden"
        >
          <Image
            src="/images/homePage/mission/dentistry.webp"
            alt="dentistry"
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
          className="flex flex-col justify-between md:w-[267px] rounded-[24px] bg-blue-light shrink-0"
        >
          <div className="px-6 pt-6">
            <h3 className="mb-[33px] font-evolenta text-[24px] font-normal leading-[133%] uppercase">
              {t("dentistry.title")}
            </h3>
            <p className="mb-12 text-[14px] font-light leading-[120%]">
              {t("dentistry.description")}
            </p>
          </div>
          <Link href="/dentistry">
            <MainButton>{t("dentistry.button")}</MainButton>
          </Link>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-7 mb-7 lg:mb-[54px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 20 })}
          className="relative w-full h-[285px] md:h-[355px] rounded-[20px] overflow-hidden"
        >
          <Image
            src="/images/homePage/mission/medicine.webp"
            alt="medicine"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: -20 })}
          className="flex flex-col justify-between md:w-[267px] rounded-[24px] bg-blue-light shrink-0"
        >
          <div className="px-6 pt-6">
            <h3 className="mb-8 font-evolenta text-[24px] font-normal leading-[133%] uppercase">
              {t("aesthetic.title")}
            </h3>
            <p className="mb-12 text-[14px] font-light leading-[120%]">
              {t("aesthetic.description")}
            </p>
          </div>
          <Link href="/aesthetic">
            <MainButton variant="beige" className="px-5 lg:px-2">
              {t("aesthetic.button")}
            </MainButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
