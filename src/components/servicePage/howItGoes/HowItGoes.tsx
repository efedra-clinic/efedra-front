import Container from "@/components/shared/container/Container";
import StepsIconDesk from "@/components/shared/icons/StepsIconDesk";
import StepsIconMob from "@/components/shared/icons/StepsIconMob";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import Image from "next/image";
import StepsList from "./StepsList";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface HowItGoesProps {
  service: Service;
  variant: "beige" | "blue";
}

export default function HowItGoes({ service, variant }: HowItGoesProps) {
  const { howItGoes } = service;

  if (!howItGoes) return null;

  const { image, steps } = howItGoes;

  return (
    <section className="pt-15 lg:pt-25">
      <Container className="flex flex-col sm:flex-row gap-6 sm:justify-between">
        <div className="flex flex-col justify-between">
          <SectionTitle variant={variant}>Як проходить процедура</SectionTitle>
          <div className="flex gap-2 lg:gap-4 items-center flex-grow h-auto w-fit mx-auto sm:mx-0">
            <StepsIconMob variant={variant} className="lg:hidden shrink-0" />
            <StepsIconDesk
              variant={variant}
              className="hidden lg:block shrink-0"
            />
            <StepsList list={steps} />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({
            y: 50,
            x: 50,
            scale: 0.9,
            delay: 0.3,
            duration: 1.4,
          })}
          className="relative aspect-square lg:aspect-[640/685] w-auto h-[319px] md:h-[369px] lg:h-[480px] xl:h-[685px] mx-auto sm:mx-0 
        rounded-t-[300px] rounded-bl-[300px] rounded-br-[20px] overflow-hidden"
        >
          <Image
            src={urlFor(image).fit("crop").url()}
            alt="background"
            fill
            className="object-cover "
          />
        </motion.div>
      </Container>
    </section>
  );
}
