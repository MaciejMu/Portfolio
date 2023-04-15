"use client";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import style from "./Projects.module.scss";
import Link from "next/link";
import Button from "../Button/Button";
import { FC } from "react";
import { Carousel } from "@trendyol-js/react-carousel";

type ProjectsProps = {
  cardData: {
    image: string;
    alt: string;
    title: string;
    gitLink: string;
    demoLink: string;
  }[];
};

const Projects: FC<ProjectsProps> = ({ cardData }) => {
  return (
    <>
      <SectionHeader
        title={"Projekty"}
        paragraph={"przejrzyj moje"}
        id="Projects"
      />
      <section className={style.section}>
        <Carousel
          show={3.5}
          slide={3}
          transition={1.5}
          swiping={true}
          infinite
          useArrowKeys
        >
          {cardData.map((card) => (
            <div key={card.title} className={style.card}>
              <Image
                src={card.image}
                width={300}
                height={300}
                alt={card.alt}
                className={style.cardImage}
              />
              <h3>{card.title}</h3>
              <div className={style.buttonContainer}>
                <Link href={card.gitLink}>
                  <Button outlined title={"Github repo"} />
                </Link>
                <Link href={card.demoLink}>
                  <Button outlined title={"Live demo"} />
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Projects;
