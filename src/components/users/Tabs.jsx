import { useState } from "react";
import styles from "../../pages/Users.module.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("users");

  const tabs = [
    { id: "users", label: "Все пользователи" },
    { id: "pending", label: "Ожидают подтверждения", badge: 3 },
    { id: "usage", label: "Использование ресурсов" },
    { id: "invitations", label: "Приглашения" },
  ];

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tab} ${
            activeTab === tab.id ? styles.active : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          {tab.badge && (
            <span className={styles.notificationBadge}>{tab.badge}</span>
          )}
        </div>
      ))}
    </div>
  );
}