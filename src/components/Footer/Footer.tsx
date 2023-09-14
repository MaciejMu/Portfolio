import Link from "next/link";
import style from "./Footer.module.scss";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className={style.footer}>
      <div className={style.list}>
        <Link href={t("about-me.href")} aria-label={t("about-me.aria-label")}>
          <p>{t("about-me.title")}</p>
        </Link>
        <Link href={t("skills.href")} aria-label={t("skills.aria-label")}>
          <p>{t("skills.title")}</p>
        </Link>
        <Link href={t("projects.href")} aria-label={t("projects.aria-label")}>
          <p>{t("projects.title")}</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
