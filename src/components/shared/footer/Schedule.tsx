import { SCHEDULE_UK, SCHEDULE_RU } from "@/constants/constants";
import FooterSubtitle from "./FooterSubtitle";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Schedule() {
  const locale = useLocale();
  const t = useTranslations("contacts");
  const SCHEDULE = locale === "uk" ? SCHEDULE_UK : SCHEDULE_RU;

  return (
    <div>
      <FooterSubtitle className="mb-[38px]">{t("schedule")}:</FooterSubtitle>
      {SCHEDULE.map((item, idx) => (
        <div
          key={idx}
          className={`${
            idx === 0 ? "mb-3.5 xl:mb-4" : ""
          } text-[12px] font-normal leading-[123%]`}
        >
          <p>{item.category}:</p>
          <p>{item.schedule}</p>
        </div>
      ))}
    </div>
  );
}
