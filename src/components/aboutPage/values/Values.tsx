import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import EmpathyIcon from "@/components/shared/icons/EmpathyIcon";
import RecommendationIcon from "@/components/shared/icons/RecommendationIcon";
import ResultIcon from "@/components/shared/icons/ResultIcon";
import SafetyIcon from "@/components/shared/icons/SafetyIcon";
import GrowthIcon from "@/components/shared/icons/GrowthIcon";
import IconTextList from "@/components/shared/iconTextComponents/IconTextList";

export default function Values() {
  const values = [
    {
      value: "Емпатія та увага",
      description:
        "Ми вміємо слухати, розуміємо ваші переживання та ставимося до кожного з турботою та повагою.",
      icon: EmpathyIcon,
    },
    {
      value: "Чесні рекомендації",
      description:
        "Пропонуємо лише те, що справді необхідно. Жодних зайвих процедур — тільки прозорі рішення.",
      icon: RecommendationIcon,
    },
    {
      value: "Робота на результат",
      description:
        "Ми орієнтовані на ефективність — довготривалий, помітний результат і задоволення пацієнта.",
      icon: ResultIcon,
    },
    {
      value: "Безпека та стерильність",
      description:
        "Дотримуємось найвищих стандартів стерильності, дезінфекції та безпеки у всіх процедурах.",
      icon: SafetyIcon,
    },
    {
      value: "Розвиток команди",
      description:
        "Наші фахівці постійно підвищують кваліфікацію, освоюють нові методики та впроваджують інновації.",
      icon: GrowthIcon,
    },
  ];

  return (
    <section className="pt-[60px] lg:pt-[102px]">
      <Container>
        <SectionTitle>Цінності і підхід</SectionTitle>

        <IconTextList
          title="Ваше благополуччя — наш пріоритет"
          items={values}
        />
      </Container>
    </section>
  );
}
