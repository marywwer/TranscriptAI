import styles from "./FormInput.module.css";

export default function FormInput({
  type,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <div className={styles.formGroup}>
      <input
        type={type}
        className={styles.formInput}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}