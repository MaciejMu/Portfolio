import ScrollLink from "../ScrollLink/ScrollLink";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header} data-aos="fade-down" data-aos-delay="400">
      <h1>Maciek</h1>
      <div className={style.list}>
        <ScrollLink href={"#AboutMe"} aria-label="Informacje o mnie">
          <p>O mnie</p>
        </ScrollLink>
        <ScrollLink href={"#Skills"} aria-label="Technogogie które znam">
          <p>Doświadczenie</p>
        </ScrollLink>
        <ScrollLink href={"#Projects"} aria-label="Moje projekty">
          <p>Portfolio</p>
        </ScrollLink>
        <ScrollLink
          href={"#Contact"}
          aria-label="Adress mailowy i numer telefonu"
        >
          <p>Kontakt</p>
        </ScrollLink>
      </div>
      <ThemeSwitch />
    </header>
  );
};
