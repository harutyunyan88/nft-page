import Header from "../../component/Header/Header";
import styles from "./home.module.scss";
import ellipse from "../../assets/img/Shadow1.png";
import Chance from "../../component/Chance/Chance";
import { useState } from "react";
import BurgerMenu from "../../component/burgerMenu/BurgerMenu";
import Popup from "../../component/Popup/Popup";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <main className={styles.mainSection}>
      <img className={styles.mainEllipse} alt="" src={ellipse} />
      <div className={styles.container}>
        <Header setOpen={setOpen} />
        <Chance popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      </div>
      <BurgerMenu open={open} setOpen={setOpen} />
      {popupOpen && <Popup  popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>}
    </main>
  );
}
