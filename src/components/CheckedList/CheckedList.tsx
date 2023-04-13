import React, { FC } from "react";
import style from "./CheckedList.module.scss";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CheckListProps = {
  arr: { title: string; paragraph: string }[];
};
const CheckedList: FC<CheckListProps> = ({ arr }) => {
  return (
    <ul className={style.list}>
      {arr.map((item) => (
        <>
          <li key={item.title}>
            <FontAwesomeIcon icon={faCircleCheck} className={style.checkIcon} />
            {item.title}
          </li>
          <p>{item.paragraph}</p>
        </>
      ))}
    </ul>
  );
};

export default CheckedList;
