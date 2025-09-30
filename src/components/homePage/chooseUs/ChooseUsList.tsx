import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import ChooseUsItem from "./ChooseUsItem";
import { useTranslations } from "next-intl";

export default function ChooseUsList() {
  const t = useTranslations("chooseUsList");

  const chooseUsList = [
    {
      title: t("equipment.title"),
      description: t("equipment.description"),
      number: "01",
    },
    {
      title: t("doctors.title"),
      description: t("doctors.description"),
      number: "02",
    },
    {
      title: t("individual.title"),
      description: t("individual.description"),
      number: "03",
    },
    {
      title: t("atmosphere.title"),
      description: t("atmosphere.description"),
      number: "04",
    },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
      className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 xl:gap-6 md:w-[calc(50%+70px)] lg:w-[calc(50%+110px)] xl:w-[calc(50%-12px)]"
    >
      {chooseUsList.map((chooseUsItem, idx) => (
        <ChooseUsItem key={idx} item={chooseUsItem} idx={idx} />
      ))}
    </motion.ul>
  );
}
