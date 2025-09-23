import Advantages from "@/components/aboutPage/advantages/Advantages";
import CTAFormWithBackground from "@/components/shared/cta/CTAFormWithBackground";
import Founders from "@/components/aboutPage/founders/Founders";
import Hero from "@/components/aboutPage/hero/Hero";
import Philosophy from "@/components/aboutPage/philosophy/Philosophy";
import Values from "@/components/aboutPage/values/Values";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Certificates from "@/components/aboutPage/certificates/Certificates";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <MarqueeLine />
      <Philosophy />
      <Advantages />
      <Founders />
      <Values />
      <Certificates />
      <CTAFormWithBackground
        image="/images/shared/cosmetology.webp"
        className="py-15 lg:pt-35 lg:pb-25"
      />
    </>
  );
}
