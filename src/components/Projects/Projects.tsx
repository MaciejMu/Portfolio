"use client";
import { useTranslations } from "next-intl";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./Projects.module.scss";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <div className={style.container}>
      <SectionHeader
        title={t("section-header.title")}
        paragraph={t("section-header.paragraph")}
        id="Projects"
      />
    </div>
  );
};

export default Projects;
