import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";
import styles from "../../pages/Profile.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>
          <i className="fas fa-microphone-alt"></i> TranscriptAI
        </h1>
      </div>
      <nav>
        <NavLink
          to="/transcribe"
          style={{
            display: "block",
            unicodeBidi: "isolate",
            textDecoration: "none",
            color: "#e2e8f0",
          }}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <i className="fas fa-cogs"></i> Обработка
        </NavLink>
        <NavLink
          to="/results"
          style={{
            display: "block",
            unicodeBidi: "isolate",
            textDecoration: "none",
            color: "#e2e8f0",
          }}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <i className="fas fa-file-alt"></i> Результаты
        </NavLink>
        <NavLink
          to="/profile"
          style={{
            display: "block",
            unicodeBidi: "isolate",
            textDecoration: "none",
            color: "#e2e8f0",
          }}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <i className="fas fa-user"></i> Профиль
        </NavLink>
        <NavLink
          to="/users"
          style={{
            display: "block",
            unicodeBidi: "isolate",
            textDecoration: "none",
            color: "#e2e8f0",
          }}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <i className="fas fa-users"></i> Пользователи
        </NavLink>
        <NavLink
          to="/settings"
          style={{
            display: "block",
            unicodeBidi: "isolate",
            textDecoration: "none",
            color: "#e2e8f0",
          }}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <i className="fas fa-cog"></i> Настройки
        </NavLink>
      </nav>
      <UserInfo />
    </div>
  );
}