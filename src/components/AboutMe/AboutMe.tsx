import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import style from "./AboutMe.module.scss";

const AboutMe = ({}) => {
  return (
    <section className={style.container} id="AboutMe">
      <SectionHeader title={"O mnie"} paragraph={"poczytaj"} />
      <div className={style.content}>
        <p>
          Moim największym atutem jest moja determinacja i chęć ciągłego
          rozwoju. Wyzwania, które stawia przed mną praca na frontendzie,
          motywują mnie do nauki i rozwijania swoich umiejętności. Ponadto,
          jestem otwarty na feedback i chętnie pracuję w zespole, ponieważ
          wierzę, że tylko dzięki współpracy możemy osiągnąć najlepsze wyniki.
          <br />
          Jeśli szukasz osoby, która z pasją podejdzie do realizacji Twojego
          projektu, to właśnie mnie szukasz!
        </p>
        <Image
          src={"/images/722578df019472e43f905f395cfe68bb-sticker.png"}
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
