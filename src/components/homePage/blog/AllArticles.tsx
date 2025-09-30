import { Link } from "@/i18n/navigation";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";

export default function AllArticles() {
  const t = useTranslations("blog.allArticles");

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
        <p className="max-w-[240px] xl:max-w-[195px]">{t("description")}</p>
        <Link href={`/blog`} className="hidden xl:block">
          <SecondaryButton variant="white" className="px-[15px]">
            {t("button")}
          </SecondaryButton>
        </Link>
      </div>
      <Link href={`/blog`} className="xl:hidden">
        <SecondaryButton variant="beige" className="px-5">
          {t("button")}
        </SecondaryButton>
      </Link>
    </motion.div>
  );
}
