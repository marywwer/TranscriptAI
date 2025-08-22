import styles from "../../pages/Results.module.css";

export default function StatsGrid() {
  const stats = [
    { number: 247, label: "Всего файлов" },
    { number: "31.2", label: "Часов аудио" },
    { number: 15, label: "Активных пользователей" },
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.statCard}>
          <div className={styles.statNumber}>{stat.number}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}