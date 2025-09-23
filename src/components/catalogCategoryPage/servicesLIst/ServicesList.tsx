"use client";
import { useRef } from "react";
import Container from "@/components/shared/container/Container";
import { Service } from "@/types/service";
import Pagination from "@/components/shared/pagination/Pagination";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import ServiceCard from "./ServiceCard";

interface ServicesListProps {
  services: Service[];
  variant: "blue" | "beige";
  category: string;
}

export default function ServicesList({
  services,
  variant,
  category,
}: ServicesListProps) {
  if (!services || !services?.length) return null;

  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className="pt-8 lg:pt-25 scroll-mt-21">
      <Container>
        <Pagination
          items={services}
          useItemsPerPage={() => 12}
          scrollTargetRef={sectionRef}
          variant={variant}
          renderItems={(currentItems) => (
            <ul className="flex flex-row flex-wrap gap-3 lg:gap-6">
              {currentItems.map((service) => (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeInAnimation({ y: 20 })}
                  key={`${service?.slug}`}
                  className="w-[calc(50%-6px)] md:w-[calc(33.33%-12px)] lg:w-[calc(33.33%-16px)] h-auto"
                >
                  <ServiceCard
                    service={service}
                    variant={variant}
                    category={category}
                  />
                </motion.li>
              ))}
            </ul>
          )}
        />
      </Container>
    </section>
  );
}
