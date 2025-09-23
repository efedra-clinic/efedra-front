import * as motion from "motion/react-client";

import { leftContactItems, rightContactItems } from "./data";
import { listVariants } from "@/utils/animationVariants";
import ContactItem from "./ContactItem";

export default function ContactsList() {
  return (
    <div className="flex flex-col min-[360px]:flex-row gap-[15px] min-[360px]:gap-[37px] md:gap-12 lg:gap-[70px] md:w-[49%]">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
        className="flex flex-col gap-[15px] md:gap-[27px] lg:gap-[37px] xl:gap-[49px]"
      >
        {leftContactItems.map((item, idx) => (
          <ContactItem key={idx} {...item} />
        ))}
      </motion.ul>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
        className="flex-1 flex flex-col gap-[15px] md:gap-[27px] lg:gap-[37px] xl:gap-[49px]"
      >
        {rightContactItems.map((item, idx) => (
          <ContactItem key={idx} {...item} />
        ))}
      </motion.ul>
    </div>
  );
}
