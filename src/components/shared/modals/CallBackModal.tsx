"use client";
import { useState, Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import Backdrop from "../backdrop/Backdrop";
import NotificationPopUp from "../notifications/NotificationPopUp";
import CallBackForm from "../forms/CallBackForm";
import { useTranslations } from "next-intl";

interface CallBackFormModalProps {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackModal({
  isModalShown,
  setIsModalShown,
}: CallBackFormModalProps) {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const t = useTranslations("modals.callback");

  return (
    <>
      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown}>
        <h2 className="max-w-[212px] sm:max-w-[340px] lg:max-w-[478px] mx-auto mb-[15px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[120%] text-center uppercase">
          {t.rich("title", {
            italic: (chunks) => <span className="italic">{chunks}</span>
          })}
        </h2>
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          setIsModalShown={setIsModalShown}
        />
      </Modal>
      <NotificationPopUp
        title={isError ? t("error.title") : t("success.title")}
        description={
          isError ? t("error.description") : t("success.description")
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
      <Backdrop
        isVisible={isModalShown || isNotificationShown}
        onClick={() => {
          setIsModalShown(false);
          setIsNotificationShown(false);
        }}
      />
    </>
  );
}
