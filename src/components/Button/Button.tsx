import React, { FC } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonProps = {
  title: string;
  outlined?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: FC<ButtonProps> = ({ title, outlined, type }) => {
  return (
    <button
      type={type}
      className={clsx(style.button, {
        [style.outlined]: outlined,
      })}
    >
      {title}
    </button>
  );
};

export default Button;
