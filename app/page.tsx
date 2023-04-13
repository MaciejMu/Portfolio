import { Profile } from "@/components/Profile/Profile";
import Container from "@/components/Container/Container";
import Skills from "@/components/Skills/Skills";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";

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
              image: "/images/slowko-win.png",
              onHoverImage: "/images/slowko.png",
              alt: "gra słówko",
              title: "Słówko",
              gitLink: "https://github.com/MaciejMu/Slowko",
              demoLink: "https://maciej-muter-slowko.netlify.app/",
            },
          ]}
        />
      </Container>
    </main>
  );
}
