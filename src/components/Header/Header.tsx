import ScrollLink from "../ScrollLink/ScrollLink";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Maciek</h1>
      <ul>
        <ScrollLink href={"#AboutMe"}>
          <li> O mnie</li>
        </ScrollLink>
        <ScrollLink href={"#Skills"}>
          <li>Doświadczenie</li>
        </ScrollLink>
        <ScrollLink href={"#Projects"}>
          <li>Portfolio</li>
        </ScrollLink>
        <ScrollLink href={"#Contact"}>
          <li>Kontakt</li>
        </ScrollLink>
      </ul>
      <ThemeSwitch />
    </header>
  );
};
