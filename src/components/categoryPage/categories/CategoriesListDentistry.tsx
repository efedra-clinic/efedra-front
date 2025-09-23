import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface CategoriesListDentistryProps {
  categories: Service[];
}

export default function CategoriesListDentistry({
  categories,
}: CategoriesListDentistryProps) {
  const currentCategories = categories?.slice(0, 6);

  return (
    <div className="flex flex-col gap-2 lg:gap-[22px]">
      <div className="flex flex-col sm:flex-row gap-2 lg:gap-[22px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20 })}
          className="flex gap-2 lg:gap-[22px] sm:w-[calc(50%-4px)] lg:w-[calc(50%-11px)]"
        >
          <Link
            href={`/catalog/dentistry/${currentCategories[0].slug}`}
            className="group relative flex items-end w-[calc(50%-4px)] lg:w-[calc(50%-11px)] h-[130px] sm:h-full py-1.5 px-2.5 sm:p-3 lg:p-[22px] rounded-[14px] overflow-hidden"
          >
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={urlFor(currentCategories[0].categoryImage).fit("crop").url()}
              alt={currentCategories[0].title}
              fill
              className="-z-20 object-cover xl:group-hover:scale-105 transition duration-1000 ease-in-out will-change-transform"
            />
            <h3 className="font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[0].title}
            </h3>
          </Link>
          <Link
            href={`/catalog/dentistry/${currentCategories[1].slug}`}
            className="group relative flex items-end w-[calc(50%-4px)] lg:w-[calc(50%-11px)] h-[130px] sm:h-full py-1.5 px-2.5 sm:p-3 lg:p-[22px] rounded-[14px] overflow-hidden"
          >
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={urlFor(currentCategories[1].categoryImage).fit("crop").url()}
              alt={currentCategories[1].title}
              fill
              className="-z-20 object-cover xl:group-hover:scale-105 transition duration-1000 ease-in-out will-change-transform"
            />
            <h3 className="font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[1].title}
            </h3>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 20, delay: 0.3 })}
          className="flex flex-col gap-2 lg:gap-[22px] sm:w-[calc(50%-4px)] lg:w-[calc(50%-11px)]"
        >
          <Link
            href={`/catalog/dentistry/${currentCategories[2].slug}`}
            className="group relative flex items-end w-full h-[105px] lg:h-[180px] py-1.5 px-2.5 sm:p-3 lg:p-[22px] rounded-[14px] overflow-hidden"
          >
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={urlFor(currentCategories[2].categoryImage).fit("crop").url()}
              alt={currentCategories[2].title}
              fill
              className="-z-20 object-cover xl:group-hover:scale-105 transition duration-1000 ease-in-out will-change-transform"
            />
            <h3 className="font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[2].title}
            </h3>
          </Link>
          <Link
            href={`/catalog/dentistry/${currentCategories[3].slug}`}
            className="group relative flex items-end w-full h-[105px] lg:h-[180px] py-1.5 px-2.5 sm:p-3 lg:p-[22px] rounded-[14px] overflow-hidden"
          >
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={urlFor(currentCategories[3].categoryImage).fit("crop").url()}
              alt={currentCategories[3].title}
              fill
              className="-z-20 object-cover xl:group-hover:scale-105 transition duration-1000 ease-in-out will-change-transform"
            />
            <h3 className="font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[3].title}
            </h3>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ scale: 0.95, delay: 0.6 })}
        className="flex flex-col sm:flex-row gap-2 lg:gap-[22px]"
      >
        <div className="flex gap-2 lg:gap-[22px] sm:w-[calc(66.67%-4px)] lg:w-[calc(66.67%-11px)]">
          <Link
            href={`/catalog/dentistry/${currentCategories[4].slug}`}
            className="group relative flex items-end w-full h-[130px] lg:h-[179px] py-1.5 px-2.5 sm:p-3 lg:p-[22px] rounded-[14px] overflow-hidden"
          >
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={urlFor(currentCategories[4].categoryImage).fit("crop").url()}
              alt={currentCategories[4].title}
              fill
              className="-z-20 object-cover xl:group-hover:scale-105 transition duration-1000 ease-in-out will-change-transform"
            />
            <h3 className="font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[4].title}
            </h3>
          </Link>

          <Link
            href={`/catalog/dentistry/${currentCategories[5].slug}`}
            className="group relative flex items-end w-[calc(50%-4px)] lg:w-[calc(50%-11px)] h-[130px] lg:h-[179px] py-1.5 px-2.5 sm:p-3 lg:p-[22px] rounded-[14px] overflow-hidden shrink-0"
          >
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={urlFor(currentCategories[5].categoryImage).fit("crop").url()}
              alt={currentCategories[5].title}
              fill
              className="-z-20 object-cover xl:group-hover:scale-105 transition duration-1000 ease-in-out will-change-transform"
            />
            <h3 className="font-evolenta text-[10px] lg:text-[16px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[5].title}
            </h3>
          </Link>
        </div>
        <Link
          href="/catalog/dentistry"
          className="group cursor-pointer flex items-center sm:items-end justify-between sm:w-[calc(33.33%-4px)] lg:w-[calc(33.33%-11px)] px-[18px] sm:p-3 lg:p-[22px] h-14 sm:h-auto bg-blue rounded-full sm:rounded-[20px] xl:hover:brightness-125 focus-visible:brightness-125
          active:brightness-125 transition duration-300 ease-in-out shrink-0"
        >
          <p className="sm:max-w-[100px] lg:max-w-[147px] mt-1 font-evolenta text-[13px] sm:text-[10px] lg:text-[16px] font-normal leading-[133%] uppercase text-white">
            Переглянути інші послуги
          </p>
          <button
            type="button"
            aria-label="arrow button"
            className="cursor-pointer flex items-center justify-center size-[27px] lg:size-10 rounded-full bg-white shrink-0"
          >
            <ArrowIcon className="lg:w-[22px] h-auto xl:group-hover:translate-x-0.5 xl:group-hover:-translate-y-0.5 transition duration-300 ease-in-out will-change-transform" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
