import type { Metadata } from "next";
import Contacts from "@/components/contactsPage/contacts/Contacts";
import StartJourneyCTA from "@/components/shared/cta/StartJourneyCTA";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return await getDefaultMetadata(locale, "/contacts");
}

export default function ContactsPage() {
  return (
    <>
      <Contacts />
      <MarqueeLine />
      <StartJourneyCTA
        image="/images/contactsPage/cta/cosmetics.webp"
        className="py-15 md:py-[64px]"
        imageClassName="object-cover object-center xl:object-[5px_-570px]"
      />
    </>
  );
}
