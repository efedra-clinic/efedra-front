import * as yup from "yup";
import { checkoutPhoneRegex, nameRegex } from "../regex/regex";
import { useTranslations } from "next-intl";

export const useCallBackValidation = () => {
  const t = useTranslations("validation");

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("name.minMax"))
      .max(30, t("name.minMax"))
      .matches(nameRegex, t("name.pattern"))
      .required(t("name.required")),

    phone: yup
      .string()
      .matches(checkoutPhoneRegex, t("phone.pattern"))
      .test(
        "first-digit-after-38",
        t("phone.firstDigit"),
        (value) => !!value && value.startsWith("+38 (0")
      )
      .required(t("phone.required")),
  });

  return callBackFormValidationSchema;
};
