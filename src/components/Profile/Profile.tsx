import React from "react";
import style from "./Profile.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import ScrollLink from "../ScrollLink/ScrollLink";
import { useTranslations } from "next-intl";

export const Profile = () => {
  const t = useTranslations("Profile");

  return (
    <section className={style.section} data-aos="fade-right">
      <Image
        priority={true}
        className={style.memoji}
        src={"/memojis/profile.webp"}
        alt={"memoji"}
        width={398}
        height={398}
      />
      <div>
        <p>{t("greetings")}</p>
        <h2>Maciej Muter</h2>
        <h3>Frontend Developer</h3>
        <p>{t("workfor")}</p>
        <a href={"https://www.scrumsoft.pl"}>
          <Image
            src={"/images/Scrumlogo.png"}
            alt={"Scrumsoft logo"}
            width={200}
            height={100}
            className={style.logo}
          ></Image>
        </a>

        <div className={style.buttonContainer}>
          <ScrollLink href={"#Contact"}>
            <Button title={t("contact")} />
          </ScrollLink>
        </div>
        <Link href={"https://github.com/MaciejMu"}>
          <Image
            className={style.githubIcon}
            src={"/images/github-mark.png"}
            alt={"github icon"}
            width={40}
            height={40}
          />
        </Link>
      </div>
    </section>
  );
};
