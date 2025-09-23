"use client";
import { useState } from "react";
import MainButton from "@/components/shared/buttons/MainButton";
import CallBackModal from "@/components/shared/modals/CallBackModal";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface CallbackProps {
  variant: "beige" | "blue" | "bordered";
}

export default function Callback({ variant }: CallbackProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ scale: 0.95, delay: 0.6 })}
      >
        <MainButton
          onClick={() => setIsModalShown(true)}
          variant={variant}
          className="xl:h-14 mb-3 xl:mb-[15px] text-[14px] lg:text-[15px] font-normal lg:font-medium"
          withArrow
        >
          Записатись на консультацію
        </MainButton>
      </motion.div>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </>
  );
}
