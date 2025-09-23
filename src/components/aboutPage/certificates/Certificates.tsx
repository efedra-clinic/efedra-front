import * as motion from "motion/react-client";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { fadeInAnimation } from "@/utils/animationVariants";
import CertificatesSlider from "./CertificatesSlider";
import CertificateCard from "./CertificateCard";
import { certificatesList } from "./data";

export default function Certificates() {
  return (
    <section className="pt-[60px] lg:pt-[103px]">
      <Container>
        <SectionTitle>Сертифікати та ліцензії</SectionTitle>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 30 })}
          className="lg:hidden font-evolenta text-[20px] sm:text-[28px] uppercase italic leading-[135%] mb-[38px] pt-1"
        >
          Ваше здоров’я — у надійних і сертифікованих руках
        </motion.h3>

        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-6 lg:pt-3">
          <div className="hidden lg:flex flex-col">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: 30 })}
              className="font-evolenta text-[28px] xl:text-[32px] uppercase italic leading-[135%] mb-[41.65px] max-w-[560px]"
            >
              Ваше здоров’я — у надійних і сертифікованих руках
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ scale: 0.95 })}
              className="lg:flex lg:gap-4 xl:gap-[46px]"
            >
              <CertificateCard
                certificate={certificatesList[0]}
                className="w-[270px] h-auto lg:aspect-[270/255]"
              />
              <CertificateCard
                certificate={certificatesList[1]}
                className="w-[270px] h-auto lg:aspect-[270/255]"
              />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 30 })}
            className="w-full"
          >
            <CertificatesSlider />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
