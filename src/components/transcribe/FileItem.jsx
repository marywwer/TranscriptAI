import styles from "../../pages/Transcribe.module.css";

export default function FileItem({ file }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Обработка":
        return styles.statusProcessing;
      case "Готово":
        return styles.statusCompleted;
      case "Ошибка":
        return styles.statusError;
      case "В очереди":
        return styles.statusPending;
      default:
        return "";
    }
  };

  return (
    <div className={styles.fileItem}>
      <div className={styles.fileIcon}>
        <i className="fas fa-file-audio"></i>
      </div>
      <div className={styles.fileInfo}>
        <div className={styles.fileName}>{file.filename}</div>
        <div className={styles.fileMeta}>
          {file.size} • {file.duration} • {file.source}
        </div>
        {file.progress && (
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${file.progress}%` }}
            ></div>
          </div>
        )}
      </div>
      <div className={`${styles.fileStatus} ${getStatusClass(file.status)}`}>
        {file.status}
      </div>
    </div>
  );
}