import Link from "next/link";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function AllArticles() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({ scale: 0.95, duration: 1, delay: 0.3 })}
    >
      <div className="flex gap-5 items-center px-4 py-5 mb-3 xl:mb-0 rounded-[20px] bg-blue text-white">
        <p className="mt-1 font-evolenta text-[32px] xl:text-[40px] font-normal leading-none uppercase">
          +200
        </p>
        <p className="max-w-[240px] xl:max-w-[195px]">
          статтей та корисних матеріалів в нашому блозі
        </p>
        <Link href={`/blog`} className="hidden xl:block">
          <SecondaryButton variant="white" className="px-[15px]">
            До всіх матеріалів
          </SecondaryButton>
        </Link>
      </div>
      <Link href={`/blog`} className="xl:hidden">
        <SecondaryButton variant="beige" className="px-5">
          До всіх матеріалів
        </SecondaryButton>
      </Link>
    </motion.div>
  );
}
