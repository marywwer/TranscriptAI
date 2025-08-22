import Countdown from "./Countdown.jsx";
import styles from "../../pages/Profile.module.css";

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userDetails}>
        <div className={styles.userAvatar}>МИ</div>
        <div>
          <div style={{ fontWeight: 600 }}>Мишаня</div>
          <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
            Backend Engineer
          </div>
          <Countdown />
        </div>
      </div>
    </div>
  );
}