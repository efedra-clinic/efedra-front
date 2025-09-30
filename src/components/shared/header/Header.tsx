"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../container/Container";
import LogoIcon from "../icons/LogoIcon";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import NavMenu from "./navMenu/NavMenu";
import { useNavMenuData } from "./navMenu/navMenuData";
import * as motion from "motion/react-client";
import { headerVariants } from "@/utils/animationVariants";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const { navListOne, navListTwo } = useNavMenuData();

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
      className="fixed z-10 top-0 left-0 w-dvw py-6 bg-white"
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-10 xl:gap-15">
          {" "}
          <NavMenu navList={navListOne} className="hidden lg:flex" />
          <Link
            href="/"
            className="relative z-60"
            onClick={() => setIsOpenBurgerMenu(false)}
          >
            <LogoIcon className="w-[86px] xl:w-[120px] h-auto xl:hover:text-beige focus-visible:text-beige transition duration-300 ease-in-out" />
          </Link>
          <NavMenu navList={navListTwo} className="hidden lg:flex" />
        </div>
        <LocaleSwitcher />
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </motion.header>
  );
}
