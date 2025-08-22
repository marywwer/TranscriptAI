import CopyButton from "./CopyButton";
import styles from "../../pages/Result.module.css";

export default function DiarizedView({ data }) {
  return (
    <div className={styles.transcriptionBox}>
      <CopyButton text={data.map((item) => item.text).join(" ")} />
      {data.map((block, i) => (
        <div className={styles.speakerBlock} key={i}>
          <div className={styles.speakerLabel}>
            {block.speaker}{" "}
            <span style={{ color: "#94a3b8" }}>
              [{block.start} - {block.end}]
            </span>
          </div>
          <div className={styles.transcriptionText}>
            {block.words.map((w, j) => (
              <span key={`${i}-${j}`} data-time={w.start}>
                {w.word}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}