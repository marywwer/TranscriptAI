import DownloadMenu from "./DownloadMenu";
import styles from "../../pages/Result.module.css";

export default function ToggleBar({ isDiarized, setIsDiarized }) {
  return (
    <div className={styles.toggleBar}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          fontWeight: 600,
        }}
      >
        <span>Диаризация:</span>
        <div className={styles.toggleSwitch}>
          <input
            type="checkbox"
            checked={isDiarized}
            onChange={() => setIsDiarized(!isDiarized)}
          />
          <span className={styles.slider}></span>
        </div>
      </label>
      <DownloadMenu />
    </div>
  );
}