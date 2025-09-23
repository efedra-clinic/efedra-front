import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Service } from "@/types/service";
import CategoriesList from "./CategoriesListDentistry";
import CategoriesListDentistry from "./CategoriesListDentistry";
import CategoriesListAesthetic from "./CategoryListAesthetic";

interface CategoriesProps {
  categories: Service[];
  variant: "blue" | "beige";
}

export default function Categories({ categories, variant }: CategoriesProps) {
  if (
    !categories ||
    (variant === "blue" && categories?.length < 6) ||
    (variant === "beige" && categories?.length < 5)
  )
    return null;

  return (
    <section className="pt-15 lg:pt-[67px]">
      <Container>
        <SectionTitle variant={variant} className="lg:mb-14">
          Категорії послуг
        </SectionTitle>
        {variant === "blue" ? (
          <CategoriesListDentistry categories={categories} />
        ) : (
          <CategoriesListAesthetic categories={categories} />
        )}
      </Container>
    </section>
  );
}
