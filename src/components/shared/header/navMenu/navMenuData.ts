import { useTranslations } from "next-intl";

export const useNavMenuData = () => {
  const t = useTranslations("navigation");

  const navListOne = [
    { title: t("home"), link: "/" },
    { title: t("prices"), link: "/price" },
    { title: t("blog"), link: "/blog" },
    { title: t("dentistry"), link: "/dentistry" },
  ];

  const navListTwo = [
    { title: t("aesthetic"), link: "/aesthetic" },
    { title: t("about"), link: "/about" },
    { title: t("contacts"), link: "/contacts" },
  ];

  const navListThree = [{ title: t("reviews"), link: "/#reviews" }];

  return { navListOne, navListTwo, navListThree };
};
