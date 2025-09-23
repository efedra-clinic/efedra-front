import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import Image from "next/image";
import { listVariants, listItemVariants } from "@/utils/animationVariants";
import * as motion from "motion/react-client";

interface AdvantagesProps {
  service: Service;
  variant: "beige" | "blue";
}

export default function Advantages({ service, variant }: AdvantagesProps) {
  const { advantages } = service;

  if (!advantages || !advantages?.length) return null;

  return (
    <section className="pt-15 lg:pt-25">
      <Container>
        <SectionTitle variant={variant} className="mb-6 lg:mb-10">
          Переваги
        </SectionTitle>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
          className="flex flex-col md:flex-row gap-6 xl:gap-15"
        >
          {advantages?.slice(0, 3).map(({ icon, title, text }, idx) => (
            <motion.li
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              key={idx}
              className={`flex flex-col justify-between items-center md:w-[calc(33.33%-16px)] xl:w-[calc(33.33%-40px)] h-auto px-5 py-8 lg:py-10 rounded-[20px] first:rounded-t-[60px] md:first:rounded-l-[60px] 
                md:first:rounded-r-[20px] last:rounded-b-[60px] md:last:rounded-r-[60px] md:last:rounded-l-[20px] text-white overflow-hidden 
                ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={icon}
                  width={65}
                  height={65}
                  alt="icon"
                  className="mb-5 lg:mb-10"
                />
                <h3 className="mb-3 lg:mb-4 font-evolenta text-[16px] lg:text-[20px] font-normal leading-[133%] uppercase text-center">
                  {title}
                </h3>
              </div>
              <p className="text-[12px] font-light leading-[120%] text-center">
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
