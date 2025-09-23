import * as motion from "motion/react-client";
import Image from "next/image";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
} from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface DescriptionProps {
  service: Service;
  variant: "beige" | "blue";
}

export default function Description({ service, variant }: DescriptionProps) {
  const { procedureDescription } = service;

  if (!procedureDescription) return null;

  const { images, info, text } = procedureDescription;

  return (
    <section className="pt-15 lg:pt-25">
      <Container>
        <SectionTitle variant={variant} className="md:hidden">
          опис процедури
        </SectionTitle>
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-15 pt-1 md:pt-0">
          <div className="flex flex-col md:flex-row-reverse gap-6 xl:gap-[95px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({
                scale: 0.95,
                delay: 0.3,
              })}
              className="relative w-full h-[212px] md:min-h-[310px] md:h-auto rounded-[20px] overflow-hidden"
            >
              <Image
                src={urlFor(images[0]).fit("crop").url()}
                alt="procedure"
                fill
                priority
                fetchPriority="high"
                className="object-cover"
              />
            </motion.div>
            <div className="flex flex-col md:max-w-[350px]">
              <SectionTitle variant={variant} className="hidden md:block">
                опис процедури
              </SectionTitle>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: -20, delay: 0.3 })}
                className="font-evolenta text-[24px] leading-[133%] uppercase mb-5 md:mt-4"
              >
                Опис процедури
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: -20, delay: 0.3 })}
                className="leading-[122%]"
              >
                {text}
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-[30px] xl:gap-[94px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({
                scale: 0.95,
                delay: 0.5,
              })}
              className="md:hidden lg:block relative w-full lg:max-w-[280px] xl:max-w-[328px] h-[235px] md:min-h-[253px] md:h-auto rounded-[20px] overflow-hidden"
            >
              <Image
                src={urlFor(images[2]).fit("crop").url()}
                alt="procedure"
                fill
                sizes="(min-width: 1280px) 328px, 280px"
                className="object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-5 md:justify-center">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: -20, delay: 0.3 })}
                className="uppercase font-evolenta text-[24px] leading-[133%]"
              >
                Інформація про процедуру
              </motion.h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.4 }}
                variants={listVariants({
                  staggerChildren: 0.5,
                  delayChildren: 0.3,
                })}
                className="flex flex-col gap-3"
              >
                {info.map((item, i) => (
                  <motion.li
                    key={i}
                    viewport={{ once: true, amount: 0.4 }}
                    variants={listItemVariants}
                    className="flex gap-4 items-center"
                  >
                    <span
                      className={`w-[10px] h-[10px] rounded-[100px] bg-${variant} shrink-0`}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({
                scale: 0.95,
                delay: 0.4,
              })}
              className="hidden md:block relative w-full max-w-[360px] lg:max-w-[300px] xl:max-w-[360px] h-[235px] md:min-h-[253px] md:h-auto rounded-[20px] overflow-hidden"
            >
              <Image
                src={urlFor(images[1]).fit("crop").url()}
                alt="procedure"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
