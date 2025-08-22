import styles from "../../pages/Result.module.css";

export default function DownloadDropdown({ menuRef }) {
  return (
    <div className={styles.downloadWrapper}>
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