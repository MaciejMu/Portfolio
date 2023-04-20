import { Profile } from "@/components/Profile/Profile";
import Container from "@/components/Container/Container";
import Skills from "@/components/Skills/Skills";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
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
      <Container>
        <Projects
          cardData={[
            {
              image: "/images/projects/portfolio.png",
              alt: "strona portfolio",
              title: "Portfolio",
              gitLink: "https://github.com/MaciejMu/Portfolio",
            },
            {
              image: "/images/projects/slowko-win.png",
              alt: "gra słówko",
              title: "Słówko",
              gitLink: "https://github.com/MaciejMu/Slowko",
              demoLink: "https://maciej-muter-slowko.netlify.app/",
            },
            {
              image: "/images/projects/beers.png",
              alt: "Beers page",
              title: "Beers Ranking",
              gitLink: "https://github.com/MaciejMu/BeersPage",
              demoLink: "https://beers-page.vercel.app",
            },
            {
              image: "/images/projects/calculator.png",
              alt: "kalkulator",
              title: "Kalkulator",
              gitLink: "https://github.com/MaciejMu/Calculator",
              demoLink: "https://inspiring-heliotrope-5dba82.netlify.app/",
            },
            {
              image: "/images/projects/todo.png",
              alt: " aplikacja todo",
              title: "Todo",
              gitLink: "https://github.com/MaciejMu/TodoApp",
              demoLink: "https://maciej-muter-todo.netlify.app/",
            },
            {
              image: "/images/projects/newslettersportowy.png",
              alt: "newsletter sportowy",
              title: "Newsletter sportowy",
              demoLink: "https://newslettersportowy.pl/",
            },
            {
              image: "/images/projects/workout.png",
              alt: "workout map",
              title: "Workout Map",
              gitLink: "https://github.com/MaciejMu/WorkoutMap",
              demoLink: "https://workoutmap-maciejmuter.netlify.app/",
            },
            {
              image: "/images/projects/airbnb.png",
              alt: "klon airbnb",
              title: "Airbnb",
              gitLink: "https://github.com/MaciejMu/Airbnb-tailwind",
            },
          ]}
        />
      </Container>
      <Container>
        <Contact />
      </Container>
    </main>
  );
}
