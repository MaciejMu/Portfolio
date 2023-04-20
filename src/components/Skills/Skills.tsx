import React from "react";
import style from "./Skills.module.scss";
import CheckedList from "../CheckedList/CheckedList";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";

const Skills = () => {
  return (
    <section className={style.section} id="Skills">
      <SectionHeader title={"Umiejętności"} paragraph={"sprawdź moje"} />

      <div className={style.list}>
        <CheckedList
          arr={[
            { title: "Next.js", paragraph: "3 msc" },
            { title: "HTML", paragraph: "9 msc" },
            { title: "JavaScript", paragraph: "6 msc" },
            { title: "TypeScript", paragraph: "3 msc" },
          ]}
        />
        <CheckedList
          arr={[
            { title: " React", paragraph: "4 msc" },
            { title: "CSS", paragraph: "9 msc" },
            { title: "SASS", paragraph: "1 msc" },
            { title: "Git", paragraph: "7 msc" },
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
