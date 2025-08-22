import { useRef, useState } from "react";
import styles from "../../pages/Transcribe.module.css";

export default function FileUpload({ onFilesSelected }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`${styles.uploadArea} ${isDragging ? styles.dragging : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className={`${styles.uploadIcon} ${styles.floating}`}>
        <i className="fas fa-cloud-upload-alt"></i>
      </div>
      <h3>Перетащите файлы сюда или нажмите для выбора</h3>
      <p style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
        Поддерживаются: MP3, WAV, M4A, MP4 (до 100 файлов)
      </p>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={handleFileInput}
        accept=".mp3,.wav,.m4a,.mp4"
      />
    </div>
  );
}