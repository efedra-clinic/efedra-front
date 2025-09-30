import SocialMedia from "../socialMedia/SocialMedia";
import FooterSubtitle from "./FooterSubtitle";
import { useTranslations } from "next-intl";

export default function FollowUs() {
  const t = useTranslations("footer");

  return (
    <div>
      <FooterSubtitle className="max-w-[154px]">{t("followUs")}</FooterSubtitle>
      <SocialMedia />
    </div>
  );
}
