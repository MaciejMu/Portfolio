import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import ScrollLink from "../ScrollLink/ScrollLink";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import style from "./Header.module.scss";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className={style.header} data-aos="fade-down" data-aos-delay="400">
      <div className={style.list}>
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
      </div>
      <div>
        <LocaleSwitcher />
        <ThemeSwitch />
      </div>
    </header>
  );
};
