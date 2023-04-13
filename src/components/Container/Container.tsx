import { FC, ReactNode } from "react";
import style from "./Container.module.scss";

type ContainerProperties = {
  children: ReactNode;
};

const Container: FC<ContainerProperties> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
