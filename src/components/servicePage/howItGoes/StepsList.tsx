import * as motion from "motion/react-client";
import { approachItemVariants, listVariants } from "@/utils/animationVariants";

interface StepsListProps {
  list: { title: string; description: string }[];
}

export default function StepsList({ list }: StepsListProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.5, delayChildren: 0 })}
      className={`flex flex-col shrink-0 ${"-mt-4 lg:-mt-7 xl:-mt-2 gap-6 lg:gap-11 xl:gap-12"}`}
    >
      {list.map(({ title, description }, idx) => (
        <motion.li
          viewport={{ once: true, amount: 0.2 }}
          variants={approachItemVariants}
          key={idx}
          className={`flex flex-col justify-center max-w-[175px] lg:max-w-[240px] xl:max-w-[280px] min-h-20 lg:min-h-32 ${
            idx === 1 ? "-ml-12 lg:-ml-29" : ""
          } ${idx === 2 ? "-ml-5 lg:-ml-11" : ""}
          }`}
        >
          <h3 className="mb-1 font-evolenta text-[12px] lg:text-[14px] xl:text-[16px] font-normal leading-[120%] uppercase">
            {title}
          </h3>
          <p className="text-[8px] lg:text-[12px] xl:text-[14px] font-light leading-[120%]">
            {description}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
