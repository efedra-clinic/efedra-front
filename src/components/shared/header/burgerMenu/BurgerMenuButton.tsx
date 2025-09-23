"use client";
import { motion } from "framer-motion";

interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}

export default function BurgerMenuButton({
  isHeaderMenuOpened = false,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="lg:hidden group relative z-[60] w-9 h-9 px-[6.6px] py-[10px] outline-none"
    >
      <div className="w-full h-full relative">
        {/* Верхня лінія */}
        <motion.span
          className="absolute w-full h-[1.8px] rounded-md bg-black"
          initial={{
            top: "2px",
            left: "0",
            opacity: 1,
          }}
          animate={
            isHeaderMenuOpened
              ? {
                  top: "9px", // Переміщаємо в центр
                  left: "0",
                  opacity: 0,
                }
              : {
                  top: "2px", // Повертаємо на початкове місце
                  left: "0",
                  opacity: 1,
                }
          }
          transition={{ duration: 0.7, ease: "easeOut" }} // Плавний перехід
        />

        {/* Середня лінія */}
        <motion.span
          className="absolute w-full h-[1.8px] rounded-md bg-black"
          initial={{
            top: "9px",
            left: "0",
          }}
          animate={
            isHeaderMenuOpened ? { rotate: "45deg" } : { rotate: "0deg" }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* Нижня лінія */}
        <motion.span
          className="absolute w-full h-[1.9px] rounded-md bg-black"
          initial={{
            top: "16px",
            left: "0",
          }}
          animate={
            isHeaderMenuOpened
              ? {
                  rotate: "-45deg",
                  top: "9px",
                }
              : {
                  rotate: "0deg",
                  top: "16px",
                }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>
    </button>
  );
}
