import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import ChooseUsItem from "./ChooseUsItem";

export default function ChooseUsList() {
  const chooseUsList = [
    {
      title: "Сучасне обладнання",
      description:
        "Ми працюємо з новітніми технологіями — для точності, комфорту та ефективності.",
      number: "01",
    },
    {
      title: "Досвідчені лікарі",
      description:
        "Кожен спеціаліст — сертифікований, уважний та постійно вдосконалюється.",
      number: "02",
    },
    {
      title: "Індивідуальний підхід",
      description:
        "Ми не працюємо “за шаблоном” — ви отримаєте персональний план і людське ставлення.",
      number: "03",
    },
    {
      title: "Затишна атмосфера",
      description:
        "Спокійна музика, тепло і турбота — створюємо місце, де хочеться залишитися.",
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
