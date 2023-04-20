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
        <div key={item.title}>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className={style.checkIcon} />
            {item.title}
          </li>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </ul>
  );
};

export default CheckedList;
