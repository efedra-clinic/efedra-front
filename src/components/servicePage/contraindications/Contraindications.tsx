import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import ContraindicationItem from "./ContraindicationItem";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface ContraindicationsProps {
  service: Service;
  variant: "beige" | "blue";
}

export default function Contraindications({
  variant,
  service,
}: ContraindicationsProps) {
  const { contraindications } = service;

  if (!contraindications) return null;

  const { image, items } = contraindications;

  const leftItems = items?.slice(0, Math.floor(items?.length / 2));
  const rightItems = items?.slice(Math.floor(items?.length / 2), items?.length);

  return (
    <section className="pt-15 lg:pt-25">
      <Container>
        <SectionTitle variant={variant} className="mb-6 lg:mb-10">
          Протипоказання
        </SectionTitle>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: -20 })}
            className="flex flex-col lg:flex-col gap-4 h-auto lg:w-[calc(50%-140px-32px)] xl:w-[calc(50%-153px-32px)]"
          >
            {leftItems?.map((item, idx) => (
              <ContraindicationItem key={idx} item={item} variant={variant} />
            ))}
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({
              scale: 0.95,
              delay: 0.3,
            })}
            className="relative w-full lg:w-[280px] xl:w-[306px] h-[194px] sm:h-[280px] lg:h-auto rounded-[20px] overflow-hidden"
          >
            <Image
              src={urlFor(image).fit("crop").url()}
              alt="background"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20 })}
            className="flex flex-col lg:flex-col gap-4 h-auto lg:w-[calc(50%-140px-32px)] xl:w-[calc(50%-153px-32px)]"
          >
            {rightItems?.map((item, idx) => (
              <ContraindicationItem key={idx} item={item} variant={variant} />
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
