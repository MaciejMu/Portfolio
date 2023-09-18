import React, { FC } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonProps = {
  title: string;
  outlined?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ title, outlined, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(style.button, {
        [style.outlined]: outlined,
      })}
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default Button;
