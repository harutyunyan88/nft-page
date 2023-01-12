import styles from "./chance.module.scss";
import Man from "../../assets/img/deskMan.png";
import mobileMan from "../../assets/img/mobileMan.png";
import useWindowDimensions from "../mediaScreen";

export default function Chance({ popupOpen, setPopupOpen }) {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 768 ? (
        <div className={styles.chanceSection}>
          <div className={styles.chanceInfo}>
            <p>
              Не упусти возможность войти в <strong>прибыльную нишу</strong>
            </p>
            <p>
              Получи все нужные навыки для заработка на NFT всего за 28 дней!
            </p>
            <button onClick={() => setPopupOpen(!popupOpen)}>
              Начать зарабатывать на NFT
            </button>
          </div>
          <div className={styles.chanceImg}>
            <img alt="" src={Man} />
          </div>
        </div>
      ) : (
        <div className={styles.chanceSection}>
          <div className={styles.chanceInfo}>
            <p>
              Не упусти возможность войти в <strong>прибыльную нишу</strong>
            </p>
            <img alt="" src={mobileMan} />
            <p>
              Получи все нужные навыки для заработка на NFT всего за 28 дней!
            </p>
            <button onClick={() => setPopupOpen(!popupOpen)}>
              Начать зарабатывать на NFT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
