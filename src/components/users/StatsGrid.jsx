import styles from "../../pages/Users.module.css";

export default function StatsGrid() {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>24</div>
        <div className={styles.statLabel}>Всего пользователей</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>18</div>
        <div className={styles.statLabel}>Активных</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>3</div>
        <div className={styles.statLabel}>Ожидают подтверждения</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>2.4K</div>
        <div className={styles.statLabel}>Использовано минут</div>
      </div>
    </div>
  );
}