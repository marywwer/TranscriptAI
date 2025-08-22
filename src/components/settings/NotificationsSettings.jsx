import styles from "../../pages/Settings.module.css";

export default function NotificationsSettings() {
  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>👤 Уведомления</div>
      <div className={`${styles.formGroup} ${styles.formToggle}`}>
        <input type="checkbox" id="email-notify" checked />
        <label htmlFor="email-notify">Email-уведомления о завершении</label>
      </div>
    </div>
  );
}