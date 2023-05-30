"use client";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={style.container}>
      <SectionHeader
        title={"Projekty"}
        paragraph={"przejrzyj moje"}
        id="Projects"
      />
    </div>
  );
};

export default Projects;
