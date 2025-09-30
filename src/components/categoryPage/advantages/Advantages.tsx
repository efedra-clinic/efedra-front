import Container from "@/components/shared/container/Container";
import { Category } from "@/types/category";
import IconTextList from "@/components/shared/iconTextComponents/IconTextList";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";

interface AdvantagesProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Advantages({ category, variant }: AdvantagesProps) {
  const { advantages } = category;
  const t = useTranslations("categoryAdvantages");
  return (
    <section className="pt-15 lg:pt-[77px]">
      <Container>
        <SectionTitle className="lg:mb-10">{t("title")}</SectionTitle>
        <IconTextList title={t("subtitle")} items={advantages} />
      </Container>
    </section>
  );
}
