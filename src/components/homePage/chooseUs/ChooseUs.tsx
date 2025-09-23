import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ChooseUsList from "./ChooseUsList";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function ChooseUs() {
  return (
    <section className="pt-15 lg:py-20">
      <Container>
        <SectionTitle type="bordered">Чому обирають нас</SectionTitle>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-6">
          <ChooseUsList />
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({
              scale: 0.9,
              duration: 1.6,
            })}
            className="relative flex flex-col justify-between md:w-[calc(50%-90px)] lg:w-[calc(50%-130px)] xl:w-[calc(50%-12px)] rounded-[20px] p-8 overflow-hidden text-white"
          >
            <div
              className="absolute top-0 left-0 w-full h-full -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0.39deg,rgba(0,0,0,0.6)_18.49%,rgba(0,0,0,0)_45.07%),linear-gradient(346.02deg,rgba(0,0,0,0)_72.92%,rgba(0,0,0,0.4)_92.48%)] 
            xl:bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0)_59.79%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)]"
            />
            <Image
              src="/images/homePage/chooseUs/office.webp"
              alt="office"
              fill
              className="-z-20 object-cover object-bottom-right"
            />
            <p className="max-w-[380px] mb-[310px] lg:mb-[363px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[120%] uppercase">
              Ми цінуємо ваш комфорт і результат
            </p>
            <p className="max-w-[405px] text-[14px] font-light leading-[120%]">
              У центрі нашої роботи — не лише професіоналізм, а й щира турбота.
              Ми прагнемо, щоб кожен візит був для вас простим, спокійним і
              ефективним.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
