import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface AdvantageItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  idx?: number;
}

export default function AdvantageItem({
  title,
  description,
  icon,
  idx,
}: AdvantageItemProps) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
      className={`flex justify-center items-center w-full bg-gray-light min-[360px]:h-[140px] md:h-[130px] leading-[125%] rounded-[16px] md:rounded-[40px] p-4 min-[360px]:p-0  sm:w-[50%] min-[480px]:max-w-[400px] md:w-full md:max-w-[380px] xl:max-w-[448px] ${
        idx === 0
          ? "md:ml-[40%] lg:ml-[30%] lg:mb-[38px] xl:ml-[160px]"
          : idx === 2
          ? "xl:ml-[27px] lg:ml-[0%] lg:mb-[29px]"
          : idx === 3
          ? "md:ml-[40%] lg:ml-[30%] xl:ml-[160px]"
          : "ml-0  lg:mb-[38px]"
      }`}
    >
      <div className="flex justify-between items-center break-all min-[240px]:break-normal w-full max-w-[254px] min-[380px]:max-w-[280px] xs:max-w-[350px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[360px] xl:max-w-[403px]">
        <div className="hidden md:inline-block w-[55px] h-[55px] lg:w-[65px] lg:h-[65px]">
          {icon}
        </div>
        <div className="flex flex-col gap-1 md:gap-[10.38px] break-words">
          <div className="flex items-center min-[360px]:items-start xs:items-center gap-1 min-[360px]:gap-[15.5px] max-w-[250px] min-[380px]:max-w-[280px] xs:max-w-[360px] md:max-w-[300px] ">
            <div className="md:hidden w-[35px] h-[35px]">{icon}</div>
            <h3 className=" text-[14px] min-[360px]:text-[16px] uppercase font-evolenta leading-[132%] break-words">
              {title}
            </h3>
          </div>
          <p className="text-[12px] md:text-[13px] text-gray-600 sm:h-[60px] md:h-full  md:max-w-[280px] lg:max-w-[280px] xl:max-w-[309px] font-light leading-[125%] lg:leading-[123%] ">
            {description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
