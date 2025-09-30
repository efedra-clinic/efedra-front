import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import EmpathyIcon from "@/components/shared/icons/EmpathyIcon";
import RecommendationIcon from "@/components/shared/icons/RecommendationIcon";
import ResultIcon from "@/components/shared/icons/ResultIcon";
import SafetyIcon from "@/components/shared/icons/SafetyIcon";
import GrowthIcon from "@/components/shared/icons/GrowthIcon";
import IconTextList from "@/components/shared/iconTextComponents/IconTextList";
import { useTranslations } from "next-intl";

export default function Values() {
  const t = useTranslations("values");

  const values = [
    {
      value: t("empathy.title"),
      description: t("empathy.description"),
      icon: EmpathyIcon,
    },
    {
      value: t("honest.title"),
      description: t("honest.description"),
      icon: RecommendationIcon,
    },
    {
      value: t("result.title"),
      description: t("result.description"),
      icon: ResultIcon,
    },
    {
      value: t("safety.title"),
      description: t("safety.description"),
      icon: SafetyIcon,
    },
    {
      value: t("growth.title"),
      description: t("growth.description"),
      icon: GrowthIcon,
    },
  ];

  return (
    <section className="pt-[60px] lg:pt-[102px]">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>

        <IconTextList title={t("subtitle")} items={values} />
      </Container>
    </section>
  );
}
