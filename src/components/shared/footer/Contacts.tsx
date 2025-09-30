import FooterSubtitle from "./FooterSubtitle";
import {
  ADDRESS_UK,
  ADDRESS_RU,
  CITY_UK,
  CITY_RU,
  EMAIL,
  GOOGLE_MAPS_URL,
  PHONE,
} from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";
import ArrowIcon from "../icons/ArrowIcon";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const locale = useLocale();
  const t = useTranslations("contacts");
  const CITY = locale === "uk" ? CITY_UK : CITY_RU;
  const ADDRESS = locale === "uk" ? ADDRESS_UK : ADDRESS_RU;

  return (
    <div>
      <FooterSubtitle>{t("contactsAndAddress")}</FooterSubtitle>
      <ul className="flex flex-col gap-3 mb-4.5">
        <li>
          <a
            href={`tel:${PHONE}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block text-[12px] font-normal leading-[120%] active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
          >
            {PHONE.replace(contactsPhoneRegex, "+38 ($1) $2 $3 $4")}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block text-[12px] font-normal leading-[120%] active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
          >
            {EMAIL}
          </a>
        </li>
        <li className="text-[12px] font-normal leading-[120%]">{CITY}</li>
        <li className="text-[12px] font-normal leading-[120%]">{ADDRESS}</li>
      </ul>

      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center gap-1 text-[12px] font-normal leading-[120%] uppercase active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
      >
        {t("viewOnMap")}{" "}
        <ArrowIcon className="xl:group-hover:translate-x-[1px] xl:group-hover:-translate-y-[1px] transition duration-300 ease-in-out" />
      </a>
    </div>
  );
}
