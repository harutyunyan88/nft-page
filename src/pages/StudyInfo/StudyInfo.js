import styles from "./studyInfo.module.scss";
import shadowTop from "../../assets/img/Shadow2.png";
import shadowBottom from "../../assets/img/Shadow3.png";
import pinkEllipse from "../../assets/img/Pink_ellipse.png";
import blueEllipse from "../../assets/img/Blue_ellipse.png";
import blurEllipse from "../../assets/img/Blur_ellipse.png";
import StudyBlock from "../../component/studyBlock/StudyBlock";
import { useState } from "react";
import emoji1 from "../../assets/img/emoji1.png";
import emoji2 from "../../assets/img/emoji2.png";
import emoji3 from "../../assets/img/emoji3.png";
import emoji4 from "../../assets/img/emoji4.png";

export default function StudyInfo() {
  const [chances, setChances] = useState([
    {
      img: emoji1,
      description:
        "Откроешь свой первый криптокошелек и научишься с ним работать",
    },
    {
      img: emoji2,
      description: "Поймёшь, как выбирать правильные дропы",
    },
    {
      img: emoji3,
      description:
        "Построишь план по быстрому приумножению заработанных средств",
    },
    {
      img: emoji4,
      description: "Узнаешь кто такие холдеры и флипперы",
    },
  ]);
  return (
    <div className={styles.studySection}>
      <img className={styles.blueEllipse} src={blueEllipse} alt="" />
      <img className={styles.blurEllipse} src={blurEllipse} alt="" />
      <img className={styles.pinkEllipse} src={pinkEllipse} alt="" />
      <img className={styles.shadowTop} alt="" src={shadowTop} />
      <img className={styles.shadowBottom} alt="" src={shadowBottom} />
      <div className={styles.container}>
        <h1>Что даст тебе обучение?</h1>
        <div className={styles.studyChances}>
          {chances.map((chance, i) => {
            return (
              <StudyBlock
                key={i}
                img={chance.img}
                description={chance.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
