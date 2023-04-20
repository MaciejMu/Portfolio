import React from "react";
import style from "./SimpleContact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const SimpleContact = () => {
  return (
    <>
      <div className={style.contact}>
        <a href="tel:+48 608 097 803" className={style.contactLink}>
          <FontAwesomeIcon icon={faAddressBook} className={style.contactIcon} />
          <p className={style.contactInfo}>+48 608 097 803</p>
        </a>
        <a href="mailto:maciejmuter@gmail.com" className={style.contactLink}>
          <FontAwesomeIcon icon={faEnvelope} className={style.contactIcon} />
          <p className={style.contactInfo}>maciejmuter@gmail.com</p>
        </a>
      </div>
    </>
  );
};

export default SimpleContact;
