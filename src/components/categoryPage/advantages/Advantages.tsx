import Container from "@/components/shared/container/Container";
import { Category } from "@/types/category";
import IconTextList from "@/components/shared/iconTextComponents/IconTextList";
import SectionTitle from "@/components/shared/titles/SectionTitle";

interface AdvantagesProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Advantages({ category, variant }: AdvantagesProps) {
  const { advantages } = category;
  return (
    <section className="pt-15 lg:pt-[77px]">
      <Container>
        <SectionTitle className="lg:mb-10">Переваги центру</SectionTitle>
        <IconTextList
          title="Досвід, якому можна довіритись"
          items={advantages}
        />
      </Container>
    </section>
  );
}
