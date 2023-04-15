import Link from "next/link";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul>
        <Link href={"#AboutMe"}>
          <li> O mnie</li>
        </Link>
        <Link href={"#Skills"}>
          <li>Doświadczenie</li>
        </Link>
        <Link href={"#Projects"}>
          <li>Portfolio</li>
        </Link>
        <Link href={"#Contact"}>
          <li>Kontakt</li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
