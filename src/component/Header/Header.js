import styles from "./header.module.scss";
import Logo from "../../assets/img/Logo.png";
import NFT from "../../assets/img/NFT.png";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link } from "react-router-dom";

export default function Header({ setOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
        <img src={NFT} alt="" />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <Link to="/study-information">Что даст обучение</Link>
          </li>
          <li>
            <button type="button">Личный кабинет</button>
          </li>
        </ul>
      </nav>
      <div
        className={styles.burger_menu_button}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <DragHandleIcon
          sx={{ color: "#fff", fontSize: "50px", borderRadius: "10px" }}
        />
      </div>
    </header>
  );
}
