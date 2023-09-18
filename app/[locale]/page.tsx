"use client";
import { Profile } from "@/components/Profile/Profile";
import Container from "@/components/Container/Container";
import Skills from "@/components/Skills/Skills";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "@/components/Slider/Slider";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Slider");

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 200,
      duration: 600,
    });
  }, []);

  return (
    <main>
      <Container>
        <Profile />
      </Container>
      <Container>
        <AboutMe />
      </Container>
      <Container>
        <Skills />
      </Container>
      <Projects />
      <Slider
        slideData={[
          {
            image: "/images/projects/my-recipe.webp",
            alt: t("alts.1"),
            title: "MyRecipe",
            gitLink: "https://github.com/MaciejMu/MyRecipe",
            demoLink: "https://my-recipe-maciejmu.vercel.app/",
          },
          {
            image: "/images/projects/waiter-helper.webp",
            alt: t("alts.2"),
            title: "Waiter Helper",
            gitLink: "https://github.com/MaciejMu/WaiterHelper",
            demoLink: "https://waiter-helper.vercel.app/",
          },
          {
            image: "/images/projects/slowko-win.webp",
            alt: t("alts.3"),
            title: "Słówko",
            gitLink: "https://github.com/MaciejMu/Slowko",
            demoLink: "https://maciej-muter-slowko.netlify.app/",
          },
          {
            image: "/images/projects/brokers.webp",
            alt: t("alts.4"),
            title: "Constans Broker",
            demoLink: "https://constans-broker.vercel.app/",
          },
          {
            image: "/images/projects/portfolio.webp",
            alt: t("alts.5"),
            title: "Portfolio",
            gitLink: "https://github.com/MaciejMu/Portfolio",
          },
          {
            image: "/images/projects/beers.webp",
            alt: t("alts.6"),
            title: "Beers Ranking",
            gitLink: "https://github.com/MaciejMu/BeersPage",
            demoLink: "https://beers-page.vercel.app",
          },
          {
            image: "/images/projects/todo.webp",
            alt: t("alts.7"),
            title: "Todo",
            gitLink: "https://github.com/MaciejMu/TodoApp",
            demoLink: "https://maciej-muter-todo.netlify.app/",
          },
          {
            image: "/images/projects/calculator.webp",
            alt: t("alts.8"),
            title: "Kalkulator",
            gitLink: "https://github.com/MaciejMu/Calculator",
            demoLink: "https://inspiring-heliotrope-5dba82.netlify.app/",
          },
          {
            image: "/images/projects/workout.webp",
            alt: t("alts.9"),
            title: "Workout Map",
            gitLink: "https://github.com/MaciejMu/WorkoutMap",
            demoLink: "https://workoutmap-maciejmuter.netlify.app/",
          },
        ]}
      />
      <Container>
        <Contact />
      </Container>
    </main>
  );
}
