import React from "react";
import style from "./Skills.module.scss";
import CheckedList from "../CheckedList/CheckedList";
import SectionHeader from "../SectionHeader/SectionHeader";

const Skills = () => {
  return (
    <section className={style.section} id="Skills" data-aos="fade-up">
      <SectionHeader title={"Umiejętności"} paragraph={"sprawdź moje"} />

      <div className={style.list}>
        <CheckedList
          arr={[
            { title: "Next.js", paragraph: "2023-02-14" },
            { title: "HTML", paragraph: "2022-07-17" },
            { title: "JavaScript", paragraph: "2022-11-08" },
            { title: "TypeScript", paragraph: "2023-01-31" },
            { title: "Node.js", paragraph: "2023-07-17" },
          ]}
        />
        <CheckedList
          arr={[
            { title: " React", paragraph: "2023-01-14" },
            { title: "CSS", paragraph: "2022-07-18" },
            { title: "SASS", paragraph: "2023-03-27" },
            { title: "Git", paragraph: "2022-08-16" },
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
