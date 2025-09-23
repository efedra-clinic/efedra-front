import * as motion from "motion/react-client";
import Image from "next/image";

import Container from "@/components/shared/container/Container";
import { fadeInAnimation } from "@/utils/animationVariants";
import ContactsList from "./ContactsList";
import Map from "./Map";
import SocialMedia from "@/components/shared/socialMedia/SocialMedia";

export default function Contacts() {
  return (
    <section className="pt-[26px] pb-12 lg:pt-13 lg:pb-[78px]">
      <Container className="relative">
        <div className="relative w-full flex flex-col md:gap-[42px]">
          <div className="relative w-[calc(80%+10px)] h-[93px] xs:h-[120px] sm:h-[160px] mb-[17px] md:hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20, delay: 0.8 })}
              className="absolute -right-[185px] top-[-4px] w-[207px] h-[208px] bg-blue rounded-full z-0"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20, delay: 0.3 })}
              className="relative w-full h-full rounded-[16px] overflow-hidden"
            >
              <Image
                src="/images/contactsPage/contacts/decoration.webp"
                alt="decoration"
                fill
                priority
                className="object-cover object-[20px_-55px] min-[480px]:object-[40px_-90px] sm:object-[30px_-110px] scale-[125%]"
              />
            </motion.div>
          </div>

          <div className="md:flex md:gap-10 lg:gap-[56px]">
            <div className="flex flex-col justify-between">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInAnimation({ scale: 0.95, delay: 0.3 })}
                className="font-evolenta text-[24px] md:text-[28px] lg:text-[34px] xl:text-[48px] leading-[135%] uppercase max-w-[200px] xs:max-w-full md:max-w-[200px] lg:max-w-[235px] xl:max-w-[330px] mb-[17px] md:mb-0"
              >
                звʼязатися з нами <span className="italic">легко</span>!
              </motion.h1>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation({ x: -20, delay: 0.3 })}
                className="hidden md:block w-full"
              >
                <h2 className="mb-4 font-evolenta text-[20px] leading-[133%] uppercase">
                  Слідкуйте за нами в Instagram!
                </h2>
                <SocialMedia
                  className="flex flex-col gap-3 md:gap-2"
                  buttonClassName="h-[50px] md:h-9 max-w-full md:max-w-[207px] text-[14px] md:text-[10px] font-normal md:font-medium"
                  dentistryButtonVariant="blue"
                />
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20, delay: 0.4 })}
              className="hidden md:block relative w-[calc(67%)] md:w-[calc(65%+30px)] h-[280px] lg:h-[356px] rounded-[20px] overflow-hidden z-2"
            >
              <Image
                src="/images/contactsPage/contacts/building.webp"
                alt="building"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 767px) 0px, 80vw"
                className="object-cover object-[20px_-55px] md:object-[center_31%] scale-[125%] md:scale-[130%]   xl:scale-none"
              />
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row gap-[44px] md:gap-7 lg:gap-[35px]">
            <Map />
            <ContactsList />
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: -20, delay: 0.3 })}
              className="md:hidden w-full"
            >
              <h2 className="mb-4 font-evolenta text-[20px] leading-[133%] uppercase">
                Слідкуйте за нами в Instagram!
              </h2>
              <SocialMedia
                className="flex flex-col gap-3 md:gap-2"
                buttonClassName="h-[50px] md:h-9 max-w-full md:max-w-[207px] text-[14px] md:text-[10px] font-normal md:font-medium"
                dentistryButtonVariant="blue"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
