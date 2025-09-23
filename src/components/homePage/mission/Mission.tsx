import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import Services from "./Services";
import MissionDescription from "./MissionDescription";

export default function Mission() {
  return (
    <section className="pt-15 lg:pt-[102px] lg:pb-[75px]">
      <Container>
        <SectionTitle type="bordered">наша місія</SectionTitle>
        <MissionDescription />
        <Services />
      </Container>
    </section>
  );
}
