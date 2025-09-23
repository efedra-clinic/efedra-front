import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function MissionDescription() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({})}
      className="flex flex-col sm:flex-row sm:gap-4 lg:gap-8 mb-7 lg:mb-[43px]"
    >
      <div className="sm:w-[310px] lg:w-[472px] px-[21px] lg:px-[45px] py-[33px] bg-beige rounded-[20px] shrink-0">
        <p className="font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] uppercase text-white">
          Ми віримо, що краса починається з{" "}
          <span className="italic">впевненості в собі</span>
        </p>
      </div>
      <div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 sm:-ml-10 mb-8 lg:mb-[49px] overflow-visible">
          <MarqueeLine className="lg:text-[26px] lg:h-[65px]" />
        </div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20 })}
          className="sm:max-w-[250px] md:max-w-[330px] xl:max-w-[398px] text-[15px] font-normal leading-[120%]"
        >
          У “Ефедрі” кожна послуга — це турбота, підтримка і місце, де ви завжди
          — у центрі уваги.
        </motion.p>
      </div>
    </motion.div>
  );
}
