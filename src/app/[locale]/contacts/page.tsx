import Contacts from "@/components/contactsPage/contacts/Contacts";
import StartJourneyCTA from "@/components/shared/cta/StartJourneyCTA";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

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
