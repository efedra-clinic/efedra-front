import Container from "../container/Container";
import Contacts from "./Contacts";
import FollowUs from "./FollowUs";
import Rights from "./Rights";
import Schedule from "./Schedule";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-dvw bg-blue py-16 text-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-[110px]">
          <h2 className="max-w-[300px] font-evolenta text-[24px] lg:text-[28px] font-normal leading-[128%] uppercase mr-auto">
            {t("title")} <span className="italic">efedra</span>
          </h2>
          <div className="flex sm:flex-row flex-col gap-10 xl:gap-[110px]">
            <Contacts />
            <div className="flex gap-4 xs:gap-[30px] lg:gap-10 xl:gap-[110px]">
              <Schedule />
              <FollowUs />
            </div>
          </div>
        </div>
        <Rights />
      </Container>
    </footer>
  );
}
