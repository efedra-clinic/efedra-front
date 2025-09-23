import {
  ADDRESS,
  CITY,
  EMAIL,
  GOOGLE_MAPS_URL,
  LICENSE_INFO,
  PHONE,
  SCHEDULE,
} from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";

export interface ScheduleItem {
  category: string;
  schedule: string;
}

export interface ContactItem {
  label: string;
  value: string | string[] | ScheduleItem[];
  href?: string;
}

export const leftContactItems: ContactItem[] = [
  {
    label: "Контактний номер",
    value: PHONE.replace(contactsPhoneRegex, "+38 ($1) $2 $3 $4"),
    href: `tel:${PHONE}`,
  },
  {
    label: "Адреса",
    value: [CITY, ADDRESS],
    href: GOOGLE_MAPS_URL,
  },

  LICENSE_INFO,
];

export const rightContactItems: ContactItem[] = [
  {
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    label: "Графік роботи",
    value: SCHEDULE,
  },
];
