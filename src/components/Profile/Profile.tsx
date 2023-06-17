import React from "react";
import style from "./Profile.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import ScrollLink from "../ScrollLink/ScrollLink";

export const Profile = () => {
  return (
    <section className={style.section} data-aos="fade-right">
      <Image
        className={style.memoji}
        src={"/memojis/profile.png"}
        alt={"memoji"}
        width={398}
        height={398}
      />
      <div>
        <p>Cześć! nazywam się</p>
        <h2>Maciej Muter</h2>
        <h3>Frontend Developer</h3>
        <p>Pracuję dla</p>
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
          <Button outlined title="Pobierz CV" />
          <ScrollLink href={"#Contact"}>
            <Button title="Kontakt" />
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
