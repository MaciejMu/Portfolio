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

export default function Home() {
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
            id: 1,
            image: "/images/projects/portfolio.png",
            alt: "strona portfolio",
            title: "Portfolio",
            gitLink: "https://github.com/MaciejMu/Portfolio",
          },
          {
            id: 2,
            image: "/images/projects/slowko-win.png",
            alt: "gra słówko",
            title: "Słówko",
            gitLink: "https://github.com/MaciejMu/Slowko",
            demoLink: "https://maciej-muter-slowko.netlify.app/",
          },
          {
            id: 3,
            image: "/images/projects/brokers.png",
            alt: "constans broker",
            title: "Constans Broker",
            demoLink: "https://constans-broker.vercel.app/",
          },
          {
            id: 4,
            image: "/images/projects/beers.png",
            alt: "Beers page",
            title: "Beers Ranking",
            gitLink: "https://github.com/MaciejMu/BeersPage",
            demoLink: "https://beers-page.vercel.app",
          },
          {
            id: 5,
            image: "/images/projects/waiter-helper.png",
            alt: "WaiterHelper",
            title: "WaiterHelper",
            gitLink: "https://github.com/MaciejMu/WaiterHelper",
            demoLink: "https://lucky-haupia-8d9d79.netlify.app/",
          },
          {
            id: 6,
            image: "/images/projects/todo.png",
            alt: " aplikacja todo",
            title: "Todo",
            gitLink: "https://github.com/MaciejMu/TodoApp",
            demoLink: "https://maciej-muter-todo.netlify.app/",
          },
          {
            id: 7,
            image: "/images/projects/calculator.png",
            alt: "kalkulator",
            title: "Kalkulator",
            gitLink: "https://github.com/MaciejMu/Calculator",
            demoLink: "https://inspiring-heliotrope-5dba82.netlify.app/",
          },
          {
            id: 8,
            image: "/images/projects/newslettersportowy.png",
            alt: "newsletter sportowy",
            title: "Newsletter sportowy",
            demoLink: "https://newslettersportowy.pl/",
          },
          {
            id: 9,
            image: "/images/projects/workout.png",
            alt: "workout map",
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
