import {
  ADDRESS_UK,
  ADDRESS_RU,
  CITY_UK,
  CITY_RU,
  EMAIL,
  GOOGLE_MAPS_URL,
  LICENSE_INFO_UK,
  LICENSE_INFO_RU,
  PHONE,
  SCHEDULE_UK,
  SCHEDULE_RU,
} from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";
import { useTranslations, useLocale } from "next-intl";

export interface ScheduleItem {
  category: string;
  schedule: string;
}

export interface ContactItem {
  label: string;
  value: string | string[] | ScheduleItem[];
  href?: string;
}

export const useContactItems = () => {
  const t = useTranslations("contacts");
  const locale = useLocale();

  const CITY = locale === "uk" ? CITY_UK : CITY_RU;
  const ADDRESS = locale === "uk" ? ADDRESS_UK : ADDRESS_RU;
  const LICENSE_INFO = locale === "uk" ? LICENSE_INFO_UK : LICENSE_INFO_RU;
  const SCHEDULE = locale === "uk" ? SCHEDULE_UK : SCHEDULE_RU;

  const leftContactItems: ContactItem[] = [
    {
      label: t("phone"),
      value: PHONE.replace(contactsPhoneRegex, "+38 ($1) $2 $3 $4"),
      href: `tel:${PHONE}`,
    },
    {
      label: t("address"),
      value: [CITY, ADDRESS],
      href: GOOGLE_MAPS_URL,
    },

    LICENSE_INFO,
  ];

  const rightContactItems: ContactItem[] = [
    {
      label: t("email"),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      label: t("schedule"),
      value: SCHEDULE,
    },
  ];

  return { leftContactItems, rightContactItems };
};
