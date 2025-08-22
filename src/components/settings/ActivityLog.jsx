import styles from "../../pages/Settings.module.css";

export default function ActivityLog({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>📝 Журнал активности</div>
      <ul className={styles.activityLog}>
        {data.map((item, index) => (
          <li key={index}>
            {item.date} — {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
}