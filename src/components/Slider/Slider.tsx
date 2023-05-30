"use client";
import { FC, useState } from "react";
import React from "react";
import Image from "next/image";
import style from "./Slider.module.scss";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";

type SliderProps = {
  slideData: {
    id?: number;
    image: string;
    title: string;
    alt: string;
    gitLink?: string;
    demoLink?: string;
  }[];
};

const Slider: FC<SliderProps> = ({ slideData }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide < slideData.length / 2 ? slide + 1 : 0);
  };

  const prevSlide = () => {
    setSlide(slide > 0 ? slide - 1 : slideData.length / 2);
  };

  return (
    <div className={style.container}>
      <div
        className={style.inner}
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {slideData.map((slide) => {
          return (
            <div key={slide.id} className={style.caruselItem}>
              <Image
                height={500}
                width={500}
                src={slide.image}
                alt={slide.title}
                className={style.image}
                priority={true}
              />
              <div className={style.properties}>
                <h2>{slide.title}</h2>
                <div>
                  {slide.demoLink ? (
                    <Link href={slide.demoLink}>
                      <Button title={"Live Demo"}></Button>
                    </Link>
                  ) : null}
                  {slide.gitLink ? (
                    <Link href={slide.gitLink}>
                      <Button title={"Github"}></Button>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChevronLeftIcon onClick={prevSlide} className={style.arrowLeft} />
      <ChevronRightIcon onClick={nextSlide} className={style.arrowRight} />
    </div>
  );
};

export default Slider;
