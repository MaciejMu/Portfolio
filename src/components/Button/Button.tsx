import React, { FC } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonProps = {
  title: string;
  outlined?: boolean;
};

const Button: FC<ButtonProps> = ({ title, outlined }) => {
  return (
    <button
      className={clsx(style.button, {
        [style.outlined]: outlined,
      })}
    >
      {title}
    </button>
  );
};

export default Button;
