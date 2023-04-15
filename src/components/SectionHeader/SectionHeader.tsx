import React, { FC } from "react";
import style from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  title: string;
  paragraph: string;
  id?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, paragraph, id }) => {
  return (
    <div className={style.header} id={id}>
      <p>{paragraph}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
