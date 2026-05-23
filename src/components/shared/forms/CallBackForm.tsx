"use client";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

import { useCallBackValidation } from "@/schemas/callBackValidation";

import CustomizedInput from "../formComponents/CustomizedInput";
import MainButton from "../buttons/MainButton";
import { useTranslations } from "next-intl";
import {
  describeSource,
  getLanding,
  getPathHistory,
} from "@/utils/leadTracking";

export interface ValuesCallBackFormType {
  name: string;
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsModalShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  buttonVariant?: "blue" | "beige";
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsModalShown,
  className = "",
  buttonVariant = "blue",
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("forms");

  const initialValues = {
    name: "",
    phone: "",
  };

  const validationSchema = useCallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const { resetForm } = formikHelpers;

    const landing = getLanding();
    const source = describeSource(landing);
    const history = getPathHistory();
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";

    const escapeHtml = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const lines: string[] = [
      `<b>Заявка "Форма зворотнього зв'язку"</b>`,
      `<b>Ім'я:</b> ${escapeHtml(values.name.trim())}`,
      `<b>Телефон:</b> ${values.phone.trim().replace(/(?!^)\D/g, "")}`,
      `<b>Джерело:</b> ${escapeHtml(source)}`,
      `<b>Поточна сторінка:</b> ${escapeHtml(currentPath)}`,
    ];

    if (landing.landingUrl) {
      lines.push(`<b>Перша сторінка:</b> ${escapeHtml(landing.landingUrl)}`);
    }
    if (landing.referrer) {
      lines.push(`<b>Реферер:</b> ${escapeHtml(landing.referrer)}`);
    }
    const utmParts = [
      landing.utm_source && `source=${landing.utm_source}`,
      landing.utm_medium && `medium=${landing.utm_medium}`,
      landing.utm_campaign && `campaign=${landing.utm_campaign}`,
      landing.utm_content && `content=${landing.utm_content}`,
      landing.utm_term && `term=${landing.utm_term}`,
    ].filter(Boolean);
    if (utmParts.length) {
      lines.push(`<b>UTM:</b> ${escapeHtml(utmParts.join(", "))}`);
    }
    if (history.length > 1) {
      lines.push(`<b>Шлях:</b> ${escapeHtml(history.join(" → "))}`);
    }

    const data = lines.join("\n") + "\n";
    try {
      setIsError(false);
      setIsLoading(true);

      await axios({
        method: "post",
        url: "/api/telegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      resetForm();
      if (setIsModalShown) {
        setIsModalShown(false);
      }
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      if (setIsModalShown) {
        setIsModalShown(false);
      }
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid }) => (
        <Form className={`${className}`}>
          <div className="flex flex-col w-full gap-y-3 lg:gap-y-3.5 mb-[22px] lg:mb-[26px]">
            <CustomizedInput fieldName="name" label={t("name")} />
            <CustomizedInput
              fieldName="phone"
              label={t("phone")}
              inputType="tel"
            />
          </div>
          <MainButton
            type="submit"
            variant={buttonVariant}
            disabled={!(dirty && isValid) || isLoading}
            isLoading={isLoading}
            loadingText={t("loading")}
            className="h-14 px-5 lg:px-5 text-[14px] lg:text-[16px] font-medium"
          >
            {t("submit")}
          </MainButton>
        </Form>
      )}
    </Formik>
  );
}
