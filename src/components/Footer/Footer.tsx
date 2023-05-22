import Link from "next/link";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer
      className={style.footer}
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-offset="-100"
    >
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
      </ul>
    </footer>
  );
};

export default Footer;
