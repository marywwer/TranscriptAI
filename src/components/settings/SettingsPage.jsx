import ModelSelection from "./ModelSelection";
import TranscriptionSettings from "./TranscriptionSettings";
import NotificationsSettings from "./NotificationsSettings";
import AdvancedSettings from "./AdvancedSettings";
import ActivityLog from "./ActivityLog";
import styles from "../../pages/Settings.module.css";
import activityLogData from "../../data/activityLogData.json";

export default function SettingsPage() {
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.pageTitle}>Настройки</h1>
      <p className={styles.pageSubtitle}>
        Настройте поведение системы под себя
      </p>

      <ModelSelection />
      <TranscriptionSettings />
      <NotificationsSettings />
      <AdvancedSettings />
      <ActivityLog data={activityLogData} />
    </div>
  );
}