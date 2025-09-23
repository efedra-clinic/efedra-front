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

export const categoriesData = {
  dentistry: {
    hero: {
      title: "Стоматологія, якій можна довіряти",
      description:
        "Сучасні технології, делікатний підхід і впевненість в результаті.",
      imageOne: "/images/categoryPage/hero/dentistryOne.webp",
      imageTwo: "/images/categoryPage/hero/dentistryTwo.webp",
    },
    approach: {
      imageMob: ApproachDentistryMob,
      imageDesk: ApproachDentistryDesk,
      imageTwo: "/images/categoryPage/approach/dentistryTwo.webp",
      list: [
        {
          title: "Лікування без болю",
          description:
            "Використовуємо сучасні методи анестезії та технології, щоб лікування проходило комфортно та безболісно.",
        },
        {
          title: "Індивідуальні плани",
          description:
            "Кожен пацієнт отримує персональний план лікування з урахуванням стану здоров’я, потреб і побажань.",
        },
        {
          title: "Сучасне обладнання",
          description:
            "Оснащені новітньою технікою, що дозволяє діагностувати точно, лікувати ефективно й з мінімальним втручанням.",
        },
        {
          title: "Стерильність і безпека",
          description:
            "Дотримуємось усіх медичних протоколів стерильності та гігієни. Ваше здоров’я — під надійним захистом.",
        },
      ],
    },
    advantages: [
      {
        value: "Комфортне лікування",
        description:
          "Дотримуємось найвищих стандартів стерильності, дезінфекції та безпеки у всіх процедурах.",
        icon: HeartsIcon,
      },
      {
        value: "Досвідчені спеціалісти",
        description:
          "Дотримуємось найвищих стандартів стерильності, дезінфекції та безпеки у всіх процедурах.",
        icon: DoctorIcon,
      },
      {
        value: "Прозоре ціноутворення",
        description:
          "Працюємо прозоро — ви завжди знаєте повну ціну до початку лікування.",
        icon: DollarsIcon,
      },
      {
        value: "Естетичний підхід",
        description:
          "Досягаємо результатів, що виглядають природно та гармонійно, без надмірностей.",
        icon: StarsIcon,
      },
      {
        value: "Стерильність і безпека",
        description:
          "Дотримуємось найвищих стандартів стерильності, дезінфекції та безпеки у всіх процедурах",
        icon: SafetyIcon,
      },
    ],
  },
  aesthetic: {
    hero: {
      title: "Естетична медицина: делікатна турбота про вашу красу",
      description: "Безпечно. Ефективно. Естетично.",
      imageOne: "/images/categoryPage/hero/medicineOne.webp",
      imageTwo: "/images/categoryPage/hero/medicineTwo.webp",
    },
    approach: {
      imageMob: ApproachMedicineMob,
      imageDesk: ApproachMedicineDesk,
      imageTwo: "/images/categoryPage/approach/medicineTwo.webp",
      list: [
        {
          title: "Увага до деталей",
          description:
            "Дбайливо опрацьовуємо кожен етап — від консультації до результату.",
        },
        {
          title: "Тільки сертифіковані препарати",
          description:
            "Використовуємо офіційні, безпечні засоби з перевіреним походженням..",
        },
        {
          title: "Лікарі з кваліфікацією",
          description:
            "Процедури проводять лише фахівці з медичною освітою та досвідом.",
        },
        {
          title: "Натуральний результат",
          description: "Працюємо на гармонію, а не на перебільшений ефект.",
        },
      ],
    },
    advantages: [
      {
        value: "Натуральний результат",
        description: "Робимо акцент на природній красі без перебільшень.",
        icon: LeafInHeartIcon,
      },

      {
        value: "Стерильність і безпека",
        description:
          "Дотримуємось найвищих стандартів стерильності, дезінфекції та безпеки у всіх процедурах.",
        icon: SafetyIcon,
      },
      {
        value: "Комфортні процедури",
        description: "Дбаємо про ваш спокій до, під час і після процедури.",
        icon: SmileIcon,
      },
      {
        value: "Перевірені препарати",
        description:
          "Дотримуємось найвищих стандартів стерильності, дезінфекції та безпеки у всіх процедурах",
        icon: MedicineIcon,
      },
      {
        value: "Досвідчені спеціалісти",
        description:
          "Забезпечуємо лікування командою лікарів із багаторічною практикою та сучасним підходом.",
        icon: DoctorIcon,
      },
    ],
  },
};
