import HeartsIcon from "@/components/shared/icons/HeartsIcon";
import DoctorIcon from "@/components/shared/icons/DoctorIcon";
import SafetyIcon from "@/components/shared/icons/SafetyIcon";
import DollarsIcon from "@/components/shared/icons/DollarsIcon";
import StarsIcon from "@/components/shared/icons/StarsIcon";
import LeafInHeartIcon from "@/components/shared/icons/LeafInHeartIcon";
import SmileIcon from "@/components/shared/icons/SmileIcon";

import ApproachDentistryDesk from "@/components/shared/icons/ApproachDentistryDesk";
import ApproachDentistryMob from "@/components/shared/icons/ApproachDentistryMob";
import ApproachMedicineDesk from "@/components/shared/icons/ApproachMedicineDesk";
import ApproachMedicineMob from "@/components/shared/icons/ApproachMedicineMob";
import MedicineIcon from "@/components/shared/icons/MedicineIcon";

import { getTranslations } from "next-intl/server";

export const getCategoriesData = async () => {
  const t = await getTranslations("categoryPage");

  return {
    dentistry: {
      hero: {
        title: t("dentistry.hero.title"),
        description: t("dentistry.hero.description"),
        imageOne: "/images/categoryPage/hero/dentistryOne.webp",
        imageTwo: "/images/categoryPage/hero/dentistryTwo.webp",
      },
      approach: {
        imageMob: ApproachDentistryMob,
        imageDesk: ApproachDentistryDesk,
        imageTwo: "/images/categoryPage/approach/dentistryTwo.webp",
        list: [
          {
            title: t("dentistry.approach.painless.title"),
            description: t("dentistry.approach.painless.description"),
          },
          {
            title: t("dentistry.approach.individual.title"),
            description: t("dentistry.approach.individual.description"),
          },
          {
            title: t("dentistry.approach.equipment.title"),
            description: t("dentistry.approach.equipment.description"),
          },
          {
            title: t("dentistry.approach.safety.title"),
            description: t("dentistry.approach.safety.description"),
          },
        ],
      },
      advantages: [
        {
          value: t("dentistry.advantages.comfort.title"),
          description: t("dentistry.advantages.comfort.description"),
          icon: HeartsIcon,
        },
        {
          value: t("dentistry.advantages.specialists.title"),
          description: t("dentistry.advantages.specialists.description"),
          icon: DoctorIcon,
        },
        {
          value: t("dentistry.advantages.pricing.title"),
          description: t("dentistry.advantages.pricing.description"),
          icon: DollarsIcon,
        },
        {
          value: t("dentistry.advantages.aesthetic.title"),
          description: t("dentistry.advantages.aesthetic.description"),
          icon: StarsIcon,
        },
        {
          value: t("dentistry.advantages.safety.title"),
          description: t("dentistry.advantages.safety.description"),
          icon: SafetyIcon,
        },
      ],
    },
    aesthetic: {
      hero: {
        title: t("aesthetic.hero.title"),
        description: t("aesthetic.hero.description"),
        imageOne: "/images/categoryPage/hero/medicineOne.webp",
        imageTwo: "/images/categoryPage/hero/medicineTwo.webp",
      },
      approach: {
        imageMob: ApproachMedicineMob,
        imageDesk: ApproachMedicineDesk,
        imageTwo: "/images/categoryPage/approach/medicineTwo.webp",
        list: [
          {
            title: t("aesthetic.approach.details.title"),
            description: t("aesthetic.approach.details.description"),
          },
          {
            title: t("aesthetic.approach.certified.title"),
            description: t("aesthetic.approach.certified.description"),
          },
          {
            title: t("aesthetic.approach.qualified.title"),
            description: t("aesthetic.approach.qualified.description"),
          },
          {
            title: t("aesthetic.approach.natural.title"),
            description: t("aesthetic.approach.natural.description"),
          },
        ],
      },
      advantages: [
        {
          value: t("aesthetic.advantages.natural.title"),
          description: t("aesthetic.advantages.natural.description"),
          icon: LeafInHeartIcon,
        },
        {
          value: t("aesthetic.advantages.safety.title"),
          description: t("aesthetic.advantages.safety.description"),
          icon: SafetyIcon,
        },
        {
          value: t("aesthetic.advantages.comfort.title"),
          description: t("aesthetic.advantages.comfort.description"),
          icon: SmileIcon,
        },
        {
          value: t("aesthetic.advantages.verified.title"),
          description: t("aesthetic.advantages.verified.description"),
          icon: MedicineIcon,
        },
        {
          value: t("aesthetic.advantages.specialists.title"),
          description: t("aesthetic.advantages.specialists.description"),
          icon: DoctorIcon,
        },
      ],
    },
  };
};
