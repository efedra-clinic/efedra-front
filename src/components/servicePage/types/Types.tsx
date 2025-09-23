import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface TypesProps {
  service: Service;
  variant: "beige" | "blue";
}

export default function Types({ variant, service }: TypesProps) {
  const { types } = service;

  if (!types) return null;

  const { title, list } = types;

  return (
    <section className="pt-15 lg:pt-25">
      <Container>
        <SectionTitle variant={variant}>{title}</SectionTitle>
        <ul className="flex flex-col gap-6 lg:gap-15">
          {list?.map(({ title, text, details, image }, idx) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({
                x: idx % 2 === 0 ? -20 : 20,
              })}
              key={idx}
              className="flex flex-col sm:odd:flex-row sm:even:flex-row-reverse gap-6 lg:gap-[95px]"
            >
              <div className="sm:my-auto shrink-0 sm:max-w-[45%]">
                <h3 className="mb-5 font-evolenta text-[24px] font-normal leading-[133%] uppercase">
                  {title}
                </h3>
                <p>{text}</p>
                {details && details?.length ? (
                  <ul className="mt-5 flex flex-col gap-5">
                    {details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 items-center">
                        <div
                          className={`size-2.5 rounded-full shrink-0 ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
                        />
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({
                  scale: 0.95,
                  delay: 0.3,
                })}
                className="relative w-full h-[143px] xs:h-[200px] sm:h-auto sm:min-h-[260px] lg:min-h-[310px] rounded-[20px] overflow-hidden"
              >
                <Image
                  src={urlFor(image).fit("crop").url()}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
