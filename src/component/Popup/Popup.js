import styles from "./popup.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
import greenShadow from "../../assets/img/greenShadow.png";

export default function Popup({ popupOpen, setPopupOpen }) {
  return (
    <div className={styles.popupSection}>
      <div className={styles.popupInfo}>
        <img src={greenShadow} alt="" />
        <div className={styles.popupClose}>
          <ClearIcon
            onClick={() => setPopupOpen(false)}
            sx={{
              color: "#fff",
              fontSize: "45px",
              borderRadius: "10px",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "0.3s",
              },
            }}
          />
        </div>
        <div className={styles.popupBody}>
          <h2>Начни прямо сейчас!</h2>
          <p>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
          <form>
            <input type="email" required placeholder="Ваш email" />
            <button type="submit">Оплатить</button>
          </form>
        </div>
      </div>
      <div
        onClick={() => setPopupOpen(!popupOpen)}
        className={styles.popupOverlay}
      ></div>
    </div>
  );
}
