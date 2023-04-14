import React from "react";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Maciek</h1>
      <ul>
        <li>O mnie</li>
        <li>Doświadczenie</li>
        <li>Portfolio</li>
        <li>Kontakt</li>
      </ul>
    </header>
  );
};
