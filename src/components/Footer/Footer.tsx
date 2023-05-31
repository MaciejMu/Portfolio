import Link from "next/link";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.list}>
        <Link href={"#AboutMe"} aria-label="Informacje o mnie">
          <p> O mnie</p>
        </Link>
        <Link href={"#Skills"} aria-label="Technogogie które znam">
          <p>Doświadczenie</p>
        </Link>
        <Link href={"#Projects"} aria-label="Moje projekty">
          <p>Portfolio</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
