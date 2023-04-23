import ScrollLink from "../ScrollLink/ScrollLink";
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
      {/* <div>
        The current theme is: {theme}
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div> */}
    </header>
  );
};
