import SectionTitle from "@/components/shared/titles/SectionTitle";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import RateUs from "./RateUs";
import ReviewsSlider from "./ReviewsSlider";
import ReviewCard from "./ReviewCard";
import { reviewsList } from "./data";

export default function Reviews() {
  return (
    <section id="reviews" className="pt-15 lg:pt-16 lg:pb-[115px] scroll-mt-11">
      <div className="w-full px-8 lg:pr-0 lg:pl-15 xs:max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-full mx-auto lg:mr-0 lg:ml-[calc((100%-1024px)/2)] xl:ml-[calc((100%-1280px)/2)]">
        <SectionTitle>Відгуки наших клієнтів</SectionTitle>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 30 })}
          className="max-w-[544px] mb-10 lg:mb-3 font-evolenta text-[24px] lg:text-[32px] font-normal leading-[133%] uppercase text-blue"
        >
          Вони вже довірили нам свою красу - тепер{" "}
          <span className="italic">ваша черга</span>!
        </motion.p>
        <div className="flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95 })}
            className="lg:flex lg:gap-4"
          >
            <RateUs />
            <ReviewCard
              review={reviewsList[0]}
              className="hidden lg:block shrink-0 w-[270px] flex-grow h-auto"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 30 })}
            className="w-full"
          >
            <ReviewsSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
