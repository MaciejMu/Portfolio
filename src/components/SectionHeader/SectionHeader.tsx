import React, { FC } from "react";
import style from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  title: string;
  paragraph: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, paragraph }) => {
  return (
    <div className={style.header}>
      <p>{paragraph}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
