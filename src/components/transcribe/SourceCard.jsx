import { useState } from "react";
import styles from "../../pages/Transcribe.module.css";

const sources = [
  {
    id: "google",
    icon: "fab fa-google-drive",
    title: "Google Drive",
    description: "Синхронизация с Google Диском",
  },
  {
    id: "yandex",
    icon: "fas fa-cloud",
    title: "Яндекс.Диск",
    description: "Синхронизация с Яндекс.Диском",
  },
  {
    id: "upload",
    icon: "fas fa-upload",
    title: "Загрузка файлов",
    description: "До 100 файлов за раз",
  },
];

export default function SourceSelection() {
  const [selected, setSelected] = useState("upload");

  return (
    <div className={styles.sourceGrid}>
      {sources.map((src) => (
        <div
          key={src.id}
          className={`${styles.sourceCard} ${
            selected === src.id ? styles.selected : ""
          }`}
          onClick={() => setSelected(src.id)}
          data-source={src.id}
        >
          <div className={styles.sourceIcon}>
            <i className={src.icon}></i>
          </div>
          <h4>{src.title}</h4>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            {src.description}
          </p>
        </div>
      ))}
    </div>
  );
}