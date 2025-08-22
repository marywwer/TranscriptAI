import styles from "../../pages/Settings.module.css";

export default function AdvancedSettings() {
  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>🛠️ Расширенные настройки</div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Webhook URL</label>
        <input
          type="text"
          className={styles.formInput}
          placeholder="https://example.com/webhook"
        />
      </div>
    </div>
  );
}