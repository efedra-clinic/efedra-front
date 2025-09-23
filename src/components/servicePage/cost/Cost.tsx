import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface CostProps {
  variant: "beige" | "blue";
}

export default function Cost({ variant }: CostProps) {
  return (
    <section className="pt-15 lg:pt-25">
      <Container className="flex flex-col gap-6 sm:flex-row lg:gap-[95px]">
        <div className="xl:max-w-[350px]">
          <SectionTitle variant={variant} className="mb-7 lg:mb-10">
            Вартість
          </SectionTitle>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20, delay: 0.3 })}
            className="mb-5 font-evolenta text-[24px] font-normal leading-[133%] uppercase"
          >
            Дізнайтесь вартість послуг без сюрпризів
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20, delay: 0.3 })}
            className=" mb-6 lg:mb-14"
          >
            Усі ціни ми відкрито публікуємо на окремій сторінці. Ви можете
            ознайомитись з повним прайсом до запису на прийом.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.9, delay: 0.3 })}
          >
            <Link href="/price">
              <MainButton
                variant={variant}
                className="lg:max-w-[255px] px-5 lg:px-5"
              >
                Переглянути прайс
              </MainButton>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 20 })}
          className="relative w-full h-[230px] sm:h-auto rounded-[20px] overflow-hidden"
        >
          <Image
            src="/images/servicePage/cost/office.webp"
            alt="office"
            fill
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}
