import styles from "../../pages/Results.module.css";
import DownloadMenuForResults from "./DownloadMenuForResults";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function FileItem({ file }) {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    if (!menuRef.current) return;
    menuRef.current.style.display =
      menuRef.current.style.display === "block" ? "none" : "block";
  };

  const handleClick = () => {
    navigate("/result");
  };

  const statusClass =
    {
      Готово: styles.statusCompleted,
      Обработка: styles.statusProcessing,
      Ошибка: styles.statusError,
    }[file.status] || "";

  const isProcessing = file.status === "Обработка";

  return (
    <div className={styles.fileItem}>
      <div className={styles.fileIcon}>
        <i className={file.photo}></i>
      </div>
      <div className={styles.fileInfo}>
        <div className={styles.fileName}>{file.filename}</div>
        <div className={styles.fileMeta}>
          <div className={styles.metaItem}>
            <i className="fas fa-clock"></i> {file.duration}
          </div>
          <div className={styles.metaItem}>
            <i className="fas fa-hdd"></i> {file.size}
          </div>
          <div className={styles.metaItem}>
            <i className="fas fa-calendar"></i> {file.datetime}
          </div>
          <div className={styles.metaItem}>
            <i className="fas fa-user"></i>{" "}
            <span className={styles.userBadge}>{file.user}</span>
          </div>
        </div>
      </div>

      <div className={`${styles.statusBadge} ${statusClass}`}>
        {file.status}
      </div>

      <div className={styles.fileActions}>
        {isProcessing ? (
          <button
            className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
            disabled
          >
            <i className="fas fa-spinner fa-spin"></i> Ожидание
          </button>
        ) : (
          <>
            <button
              className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
              onClick={handleClick}
            >
              <i className="fas fa-eye"></i> Просмотр
            </button>
            <div>
              <button
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
                onClick={toggleDropdown}
              >
                <i className="fas fa-download"></i>
              </button>
              <DownloadMenuForResults menuRef={menuRef} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}