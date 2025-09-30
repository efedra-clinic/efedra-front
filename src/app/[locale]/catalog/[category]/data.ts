import { getTranslations } from "next-intl/server";

export const getCategoriesData = async () => {
  const t = await getTranslations("catalog");

  return {
    dentistry: {
      title: t("dentistry.title"),
      description: t("dentistry.description"),
    },
    aesthetic: {
      title: t("aesthetic.title"),
      description: t("aesthetic.description"),
    },
  };
};
