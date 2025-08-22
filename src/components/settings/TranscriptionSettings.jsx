import styles from "../../pages/Settings.module.css";

export default function TranscriptionSettings() {
  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>⚙️ 2. Параметры транскрибации</div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Язык по умолчанию</label>
        <select className={styles.formSelect}>
          <option>Авто</option>
          <option selected>Русский</option>
          <option>Английский</option>
        </select>
      </div>
      <div className={`${styles.formGroup} ${styles.formToggle}`}>
        <input type="checkbox" id="speaker-detect" checked />
        <label htmlFor="speaker-detect">Разбивка по спикерам</label>
      </div>
    </div>
  );
}