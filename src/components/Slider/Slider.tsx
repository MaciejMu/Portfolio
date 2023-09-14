"use client";
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/image";
import style from "./Slider.module.scss";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";

type SliderProps = {
  slideData: {
    image: string;
    title: string;
    alt: string;
    gitLink?: string;
    demoLink?: string;
  }[];
};

const Slider: FC<SliderProps> = ({ slideData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide < slideData.length - 1 ? slide + 1 : 0));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide > 0 ? slide - 1 : slideData.length - 1));
  };

  useLayoutEffect(() => {
    if (ref.current) {
      setSlideWidth(ref.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      if (ref.current) {
        setSlideWidth(ref.current.clientWidth);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={style.container} data-aos="fade-right">
      <div
        className={style.inner}
        style={{
          transform: `translateX(calc(-${
            slideWidth * slide
          }px - 10vw * ${slide} ))`,
        }}
      >
        {slideData.map((slide, i) => {
          return (
            <div key={i} className={style.caruselItem} ref={ref}>
              <Image
                height={500}
                width={500}
                src={slide.image}
                alt={slide.alt}
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
