import SectionTitle from "@/components/shared/titles/SectionTitle";
import Container from "@/components/shared/container/Container";
import TeamSlider from "./TeamSlider";
import { Doctor } from "@/types/doctor";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface TeamProps {
  doctorsList: Doctor[];
  variant: "blue" | "beige";
}

export default function Team({ doctorsList, variant }: TeamProps) {
  if (!doctorsList) return null;

  return (
    <section className="pt-16 lg:pt-[154px] lg:pb-[77px]">
      <Container>
        <SectionTitle variant={variant} className="lg:mb-[46px]">
          Наша команда
        </SectionTitle>
      </Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ scale: 0.95, duration: 1.2 })}
        className="xl:max-w-[1280px] xl:px-15 xl:mx-auto"
      >
        <TeamSlider doctorsList={doctorsList} variant={variant} />
      </motion.div>
    </section>
  );
}
