"use client";
import { useState } from "react";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import ScrollLink from "../ScrollLink/ScrollLink";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import style from "./Header.module.scss";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const t = useTranslations("Header");

  const getNavList = () => {
    return (
      <>
        <ScrollLink href={"#AboutMe"} aria-label="Informacje o mnie">
          <p>{t("about-me")}</p>
        </ScrollLink>
        <ScrollLink href={"#Skills"} aria-label="Technogogie które znam">
          <p>{t("skills")}</p>
        </ScrollLink>
        <ScrollLink href={"#Projects"} aria-label="Moje projekty">
          <p>{t("portfolio")}</p>
        </ScrollLink>
        <ScrollLink
          href={"#Contact"}
          aria-label="Adress mailowy i numer telefonu"
        >
          <p>{t("contact")}</p>
        </ScrollLink>
      </>
    );
  };

  return (
    <header className={style.header} data-aos="fade-down" data-aos-delay="400">
      <section>
        <button
          className={style.burgerMenu}
          onClick={() => setIsOpened((prev) => !prev)}
        >
          {isOpened ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <nav className={style.navigation}>{getNavList()}</nav>
        <div>
          <LocaleSwitcher />
          <ThemeSwitch />
        </div>
      </section>
      {isOpened ? (
        <nav className={style.navigationMobile}>{getNavList()}</nav>
      ) : null}
    </header>
  );
  ``;
};
