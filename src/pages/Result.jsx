import { useState } from "react";
import ToggleBar from "../components/result/ToggleBar";
import NormalView from "../components/result/NormalView";
import DiarizedView from "../components/result/DiarizedView";
import SidebarForResult from "../components/result/SidebarForResult";
import styles from "./Result.module.css";
import transcriptData from "../data/transcriptData.json";

export default function Result() {
  const [isDiarized, setIsDiarized] = useState(false);

  return (
    <div className={styles.container}>
      <SidebarForResult />
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Результат транскрибации</h1>
        <ToggleBar isDiarized={isDiarized} setIsDiarized={setIsDiarized} />
        {isDiarized ? (
          <DiarizedView data={transcriptData} />
        ) : (
          <NormalView data={transcriptData} />
        )}
      </div>
    </div>
  );
}