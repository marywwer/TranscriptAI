import StatsGrid from "../components/results/StatsGrid";
import FilterBar from "../components/results/FilterBar";
import FilesList from "../components/results/FilesList";
import styles from "./Results.module.css";

export default function Results() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Результаты транскрибации</h1>
          <p className={styles.pageSubtitle}>
            Просмотр и управление транскрибированными файлами
          </p>
        </div>
        <StatsGrid />
        <FilterBar />
        <FilesList />
      </div>
    </div>
  );
}
