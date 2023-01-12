import styles from "./burgerMenu.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "../../assets/img/Logo.png";
import NFT from "../../assets/img/NFT.png";
import { Link } from "react-router-dom";

export default function BurgerMenu({ open, setOpen }) {
  return (
    <div
      className={`${styles.burger_menu} ${open && styles.burger_menu_active}`}
    >
      <div className={styles.burger_menu_nav}>
        <div className={styles.burger_menu_header}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
            <img src={NFT} alt="" />
          </div>
          <ClearIcon
            onClick={() => setOpen(false)}
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
        <div className={styles.burger_menu_items}>
          <a href="">Главная</a>
          <Link to="/study-information">Что даст обучение</Link>
        </div>
        <Link>Личный кабинет</Link>
      </div>
      <div
        className={styles.burger_menu_overlay}
        onClick={() => setOpen(false)}
      ></div>
    </div>
  );
}
