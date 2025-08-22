import resultsData from "../../data/resultsData.json";
import FileItem from "./FileItem";
import styles from "../../pages/Results.module.css";
import { useState } from "react";
import { useRef } from "react";
import DownloadMenuForResults from "./DownloadMenuForResults";

export default function FilesList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    if (!menuRef.current) return;
    menuRef.current.style.display =
      menuRef.current.style.display === "block" ? "none" : "block";
  };

  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h3>Транскрибированные файлы ({resultsData.length})</h3>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
            onClick={toggleDropdown}
          >
            <i className="fas fa-download"></i> Экспорт
          </button>
          <DownloadMenuForResults menuRef={menuRef} />
        </div>
      </div>

      <div className={styles.fileList}>
        {resultsData.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}