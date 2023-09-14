import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import style from "./AboutMe.module.scss";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("AboutMe");

  return (
    <section className={style.container} id="AboutMe" data-aos="fade-left">
      <SectionHeader
        title={t("section-header.title")}
        paragraph={t("section-header.paragraph")}
      />

      <div className={style.content}>
        <p>{t("description")}</p>
        <Image
          src={"/memojis/about-me.png"}
          width={400}
          height={400}
          alt={"memoji"}
          className={style.memoji}
        />
      </div>
    </section>
  );
};

export default AboutMe;
