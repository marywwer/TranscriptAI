import styles from "../../pages/Users.module.css";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>{title}</h1>
      <p className={styles.pageSubtitle}>{subtitle}</p>
    </div>
  );
}