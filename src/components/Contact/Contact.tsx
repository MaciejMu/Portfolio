import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import style from "./Contact.module.scss";
import ContactForm from "../ContactFormSendgrid/ContactForm";
import SimpleContact from "../SimpleContact/SimpleContact";

const Contact = () => {
  return (
    <section data-aos="fade-left">
      <SectionHeader title={"Kontakt"} paragraph={"złap ze mną"} id="Contact" />
      <div className={style.container}>
        <Image
          src={"/images/contact.png"}
          width={398}
          height={398}
          alt={"memoji"}
          className={style.memoji}
        />
        {/* <SimpleContact /> */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
