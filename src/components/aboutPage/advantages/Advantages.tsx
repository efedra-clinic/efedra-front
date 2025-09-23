import Image from "next/image";
import * as motion from "motion/react-client";

import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { fadeInAnimation, listVariants } from "@/utils/animationVariants";
import ApproachIcon from "@/components/shared/icons/ApproachIcon";
import EquipmentIcon from "@/components/shared/icons/EquipmentIcon";
import HeartsIcon from "@/components/shared/icons/HeartsIcon";
import DoctorIcon from "@/components/shared/icons/DoctorIcon";
import AdvantageItem from "./AdvantageItem";

export default function Advantages() {
  const advantages = [
    {
      title: "Індивідуальний підхід",
      description:
        "Ми уважно вислуховуємо кожного пацієнта та пропонуємо рішення, що враховують саме ваші потреби, цілі й спосіб життя.",
      icon: <ApproachIcon />,
    },
    {
      title: "Новітнє обладнання",
      description:
        "Використовуємо сучасні технології та сертифіковане обладнання, щоб забезпечити точність, безпеку та високий результат.",
      icon: <EquipmentIcon />,
    },
    {
      title: "Турбота про комфорт",
      description:
        "Створюємо спокійну, затишну атмосферу, де вам буде комфортно на кожному етапі — від консультації до завершення лікування.",
      icon: <HeartsIcon />,
    },
    {
      title: "Досвідчені лікарі",
      description:
        "Наша команда — це лікарі з багаторічним досвідом, які поєднують професіоналізм із сучасним підходом.",
      icon: <DoctorIcon />,
    },
  ];

  return (
    <section className="pt-[60px] lg:pt-[72px]">
      <Container>
        <SectionTitle>Наші переваги</SectionTitle>
        <div className="flex flex-col gap-6 pt-1 justify-center items-center md:hidden">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={listVariants({
              staggerChildren: 0.3,
              delayChildren: 0.3,
            })}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 w-full"
          >
            {advantages.slice(0, 2).map((item, i) => (
              <AdvantageItem key={i} {...item} />
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
            className="relative w-full h-[319px] min-[480px]:max-w-[400px] sm:max-w-full sm:h-[390px] overflow-hidden rounded-tl-[300px] rounded-tr-[300px] rounded-br-[20px] rounded-bl-[300px]"
          >
            <Image
              src="/images/aboutPage/advantages/dentistry.webp"
              alt="dentistry"
              className="object-cover object-bottom"
              fill
            />
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={listVariants({
              staggerChildren: 0.3,
              delayChildren: 0.3,
            })}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 w-full"
          >
            {advantages.slice(2, 4).map((item, i) => (
              <AdvantageItem key={i} {...item} />
            ))}
          </motion.ul>
        </div>

        <div className="hidden md:flex  items-center pt-[31.17px]">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col  gap-7 lg:gap-0 md:w-[calc(50%+50px)] lg:w-[calc(50%)]"
          >
            {advantages.map((item, i) => (
              <AdvantageItem key={i} idx={i} {...item} />
            ))}
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
            className="relative w-full md:w-[calc(50%-50px)] lg:w-[calc(50%-5px)] xl:w-[calc(50%)]  md:h-[295px] lg:h-[420px] xl:h-[625px] overflow-hidden  rounded-tl-[300px] rounded-tr-[300px] rounded-br-[20px] rounded-bl-[300px]"
          >
            <Image
              src="/images/aboutPage/advantages/dentistry.webp"
              alt="dentistry"
              className="object-cover object-bottom"
              fill
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
