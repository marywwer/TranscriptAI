import { useRef } from "react";
import styles from "../../pages/Result.module.css";

export default function DownloadDropdown() {
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    if (!menuRef.current) return;
    menuRef.current.style.display =
      menuRef.current.style.display === "block" ? "none" : "block";
  };

  return (
    <div className={styles.downloadWrapper}>
      <button className={styles.downloadBtn} onClick={toggleDropdown}>
        <i className="fas fa-download"></i>
        <span style={{ fontWeight: "600" }}>Скачать</span>
        <i className="fas fa-chevron-down"></i>
      </button>

      <div className={styles.dropdownMenu} ref={menuRef}>
        <button>
          <i className="fas fa-file-pdf" style={{ color: "#dc2626" }}></i> PDF
        </button>
        <button>
          <i className="fas fa-file-word" style={{ color: "#2563eb" }}></i> DOCX
        </button>
        <button>
          <i className="fas fa-file-alt" style={{ color: "#64748b" }}></i> TXT
        </button>
        <button>
          <i className="fas fa-code" style={{ color: "#f59e0b" }}></i> JSON
        </button>
      </div>
    </div>
  );
}