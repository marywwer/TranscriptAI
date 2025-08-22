import { useState } from "react";
import FileUpload from "../components/transcribe/FileUpload";
import FileItem from "../components/transcribe/FileItem";
import SourceCard from "../components/transcribe/SourceCard";
import filesData from "../data/filesData.json";
import styles from "./Transcribe.module.css";

export default function Processing() {
  const [selectedSource, setSelectedSource] = useState("upload");
  const [files, setFiles] = useState(filesData.files);

  const handleFilesSelected = (fileList) => {
    // Обработка выбранных файлов
    const newFiles = Array.from(fileList).map((file, index) => ({
      id: files.length + index + 1,
      filename: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      duration: "00:00",
      source: "Загружен",
      status: "В очереди",
    }));

    setFiles([...files, ...newFiles]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={`${styles.page} ${styles.active}`} id="processing">
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Обработка файлов</h1>
            <p className={styles.pageSubtitle}>
              Выберите источник и загрузите файлы для транскрибации
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>124</div>
              <div className={styles.statLabel}>Всего файлов</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98</div>
              <div className={styles.statLabel}>Обработано</div>
            </div>
            <div className={`${styles.statCard} ${styles.processing}`}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>Обрабатываются</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Ошибки</div>
            </div>
          </div>

          <div className={styles.card}>
            <h3 style={{ marginBottom: "1rem" }}>Выберите источник файлов</h3>
            <SourceCard />
          </div>

          <div className={styles.card}>
            <FileUpload onFilesSelected={handleFilesSelected} />
          </div>

          <div className={styles.card}>
            <h3 style={{ marginBottom: "1rem" }}>Файлы в обработке</h3>
            <div className={styles.fileList}>
              {files.map((file) => (
                <FileItem key={file.id} file={file} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}