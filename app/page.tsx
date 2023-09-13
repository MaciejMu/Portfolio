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
            image: "/images/projects/my-recipe.png",
            alt: "My Recipe strona z przepisami",
            title: "MyRecipe",
            gitLink: "https://github.com/MaciejMu/MyRecipe",
            demoLink: "https://my-recipe-maciejmu.vercel.app/",
          },
          {
            image: "/images/projects/waiter-helper.png",
            alt: "Waiter Helper aplikacja dla kelnerów",
            title: "Waiter Helper",
            gitLink: "https://github.com/MaciejMu/WaiterHelper",
            demoLink: "https://waiter-helper.vercel.app/",
          },
          {
            image: "/images/projects/slowko-win.png",
            alt: "gra słówko",
            title: "Słówko",
            gitLink: "https://github.com/MaciejMu/Slowko",
            demoLink: "https://maciej-muter-slowko.netlify.app/",
          },
          {
            image: "/images/projects/brokers.png",
            alt: "constans broker",
            title: "Constans Broker",
            demoLink: "https://constans-broker.vercel.app/",
          },
          {
            image: "/images/projects/portfolio.png",
            alt: "strona portfolio",
            title: "Portfolio",
            gitLink: "https://github.com/MaciejMu/Portfolio",
          },
          {
            image: "/images/projects/beers.png",
            alt: "Beers page",
            title: "Beers Ranking",
            gitLink: "https://github.com/MaciejMu/BeersPage",
            demoLink: "https://beers-page.vercel.app",
          },
          {
            image: "/images/projects/todo.png",
            alt: " aplikacja todo",
            title: "Todo",
            gitLink: "https://github.com/MaciejMu/TodoApp",
            demoLink: "https://maciej-muter-todo.netlify.app/",
          },
          {
            image: "/images/projects/calculator.png",
            alt: "kalkulator",
            title: "Kalkulator",
            gitLink: "https://github.com/MaciejMu/Calculator",
            demoLink: "https://inspiring-heliotrope-5dba82.netlify.app/",
          },
          {
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
