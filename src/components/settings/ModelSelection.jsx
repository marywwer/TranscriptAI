import { useState } from "react";
import styles from "../../pages/Settings.module.css";

export default function ModelSelection() {
  const [selectedModel, setSelectedModel] = useState("WhisperX");
  const models = [
    {
      name: "WhisperX",
      description: "Локальная, быстрая, без отправки данных",
    },
    {
      name: "AssemblyAI",
      description: "Облачная, высокая точность, английский приоритет",
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>1. Выбор модели</div>
      <div className={styles.radioGroup}>
        {models.map((model) => (
          <div
            key={model.name}
            className={`${styles.radioCard} ${
              selectedModel === model.name ? styles.selected : ""
            }`}
            onClick={() => setSelectedModel(model.name)}
          >
            <strong>{model.name}</strong>
            <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
              {model.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}