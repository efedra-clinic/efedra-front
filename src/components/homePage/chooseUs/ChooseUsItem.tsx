import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";

interface ChooseUsItemProps {
  item: { title: string; description: string; number: string };
  idx: number;
}

export default function ChooseUsItem({ item, idx }: ChooseUsItemProps) {
  const { title, description, number } = item;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={`flex flex-col justify-between w-full sm:w-[calc(50%-8px)] lg:w-[calc(50%-12px)] p-5 rounded-[20px] ${
        idx === 0
          ? "text-white bg-beige"
          : idx === 1
          ? "text-black bg-blue-light"
          : idx === 2
          ? "text-white bg-blue sm:text-black sm:bg-blue-light"
          : "text-black bg-blue-light sm:text-white sm:bg-blue"
      }`}
    >
      <p className="min-h-16 mb-10 font-evolenta text-[24px] md:text-[18px] lg:text-[24px] font-normal leading-[120%] uppercase">
        {title}
      </p>
      <p className="mb-[45px] text-[14px] font-light leading-[120%]">
        {description}
      </p>

      <p className="w-full font-evolenta text-[24px] md:text-[18px] lg:text-[24px] font-normal leading-[120%] uppercase text-right">
        {number}
      </p>
    </motion.li>
  );
}
