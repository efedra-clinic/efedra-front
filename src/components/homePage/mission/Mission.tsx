import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Services from "./Services";
import MissionDescription from "./MissionDescription";
import { useTranslations } from "next-intl";

export default function Mission() {
  const t = useTranslations("mission");

  return (
    <section className="pt-15 lg:pt-[102px] lg:pb-[75px]">
      <Container>
        <SectionTitle type="bordered">{t("title")}</SectionTitle>
        <MissionDescription />
        <Services />
      </Container>
    </section>
  );
}
