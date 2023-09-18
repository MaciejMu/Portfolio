import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import style from "./Contact.module.scss";
import ContactForm from "../ContactFormSendgrid/ContactForm";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section data-aos="fade-left">
      <SectionHeader
        title={t("section-header.title")}
        paragraph={t("section-header.paragraph")}
        id="Contact"
      />
      <div className={style.container}>
        <Image
          src={"/memojis/contact.webp"}
          width={398}
          height={398}
          alt={"memoji"}
          className={style.memoji}
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
