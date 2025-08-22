import CopyButton from "./CopyButton";
import styles from "../../pages/Result.module.css";

export default function NormalView({ data }) {
  return (
    <div className={styles.transcriptionBox}>
      <CopyButton
        text={data
          .map((item) => item.words.map((w) => w.word).join(" "))
          .join(" ")}
      />
      <div className={styles.transcriptionText}>
        {data.map((block, i) =>
          block.words.map((w, j) => (
            <span key={`${i}-${j}`} data-time={w.start}>
              {w.word}{" "}
            </span>
          ))
        )}
      </div>
    </div>
  );
}