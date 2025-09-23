import * as motion from "motion/react-client";

import { ScheduleItem } from "./data";
import { listItemVariants } from "@/utils/animationVariants";

interface ContactItemProps {
  label: string;
  value: string | string[] | ScheduleItem[];
  href?: string;
}

export default function ContactItem({ label, value, href }: ContactItemProps) {
  const baseValueClasses =
    "block text-[12px] lg:text-[15px] font-medium leading-[150%] md:leading-[154%]";
  const linkClasses = "block transition-colors duration-300 hover:text-blue";
  const wrapperClasses = label.includes("Ліцензія")
    ? "max-w-[120px] md:max-w-[150px]"
    : "max-w-[150px] md:max-w-[250px]";

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={wrapperClasses}
    >
      <span className="block text-[10px] md:text-[13px] leading-[120%] md:leading-[124%] mb-2 md:mb-[10px]">
        {label}
      </span>

      {Array.isArray(value) ? (
        typeof value[0] === "string" ? (
          href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={linkClasses}
            >
              {(value as string[]).map((value, i) => (
                <span key={i} className={baseValueClasses}>
                  {value}
                </span>
              ))}
            </a>
          ) : (
            (value as string[]).map((value, i) => (
              <span key={i} className={baseValueClasses}>
                {value}
              </span>
            ))
          )
        ) : (
          <div>
            {(value as ScheduleItem[]).map((item, i) => (
              <div key={i} className="mb-2 last:mb-0">
                <span className={baseValueClasses}>{item.category}</span>
                <span className={baseValueClasses}>{item.schedule}</span>
              </div>
            ))}
          </div>
        )
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={linkClasses}
        >
          <span className="block text-[12px] lg:text-[15px] font-medium leading-[125%] md:leading-[120%]">
            {value}
          </span>
        </a>
      ) : (
        <span className={baseValueClasses}>{value}</span>
      )}
    </motion.li>
  );
}
