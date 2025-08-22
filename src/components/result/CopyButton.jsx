import styles from "../../pages/Result.module.css";

export default function CopyButton({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Текст скопирован!");
    });
  };

  return (
    <button className={styles.copyBtn} onClick={handleCopy}>
      Копировать
    </button>
  );
}