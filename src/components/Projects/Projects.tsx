"use client";
import React, { FC, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import style from "./Projects.module.scss";
import Link from "next/link";
import Button from "../Button/Button";

type ProjectsProps = {
  cardData: {
    image: string;
    onHoverImage: string;
    alt: string;
    title: string;
    gitLink: string;
    demoLink: string;
  }[];
};

const Projects: FC<ProjectsProps> = ({ cardData }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <section className={style.section}>
      <SectionHeader title={"Projekty"} paragraph={"przejrzyj moje"} />
      <div className={style.container}>
        <div
          className={style.card}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {isHovering ? (
            <Image
              src={"/images/slowko-win.png"}
              width={300}
              height={300}
              alt={"gra słówko"}
              className={style.cardImage}
            />
          ) : (
            <Image
              src={"/images/slowko.png"}
              width={300}
              height={300}
              alt={"gra słówko"}
              className={style.cardImage}
            />
          )}
          <h3>Słówko</h3>
          <div className={style.buttonContainer}>
            <Link href={"https://github.com/MaciejMu/Slowko"}>
              <Button outlined title={"Github repo"} />
            </Link>
            <Link href={"https://maciej-muter-slowko.netlify.app/"}>
              <Button outlined title={"Live demo"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
