import React from "react";
import style from "./Profile.module.scss";
import Image from "next/image";
import image from "@/public/images/7f776081be1f74b87c17ae40bd0ba79e-sticker.png";
import Button from "../Button/Button";
import Link from "next/link";

export const Profile = () => {
  return (
    <section className={style.section}>
      <Image
        className={style.memoji}
        src={"/images/7f776081be1f74b87c17ae40bd0ba79e-sticker.png"}
        alt={"memoji"}
        width={400}
        height={400}
      />
      <div>
        <p>Cześć! nazywam się</p>
        <h2>Maciej Muter</h2>
        <h3>Frontend Developer</h3>
        <div className={style.buttonContainer}>
          <Button outlined title="Pobierz CV" />
          <Button title="Kontakt" />
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
