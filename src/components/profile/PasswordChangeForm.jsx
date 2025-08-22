import { useState } from "react";
import styles from "../../pages/Profile.module.css";

export default function PasswordChangeForm({ onValidationChange }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validate = (pwd, confirm) => {
    if (pwd.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      onValidationChange(false);
      return;
    }
    if (pwd !== confirm) {
      setError("Пароли не совпадают");
      onValidationChange(false);
      return;
    }
    setError("");
    onValidationChange(true);
  };

  const handleNewPassword = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    validate(value, confirmPassword);
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validate(newPassword, value);
  };

  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Новый пароль</label>
        <input
          type="password"
          className={styles.formInput}
          value={newPassword}
          onChange={handleNewPassword}
          placeholder="Введите новый пароль"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Подтвердите пароль</label>
        <input
          type="password"
          className={styles.formInput}
          value={confirmPassword}
          onChange={handleConfirmPassword}
          placeholder="Повторите новый пароль"
        />
      </div>

      {error && (
        <p
          style={{
            color: "#b5685b",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          {error}
        </p>
      )}

      <button type="submit" className={styles.btn} disabled={!!error}>
        <i className="fas fa-save"></i> Сохранить изменения
      </button>
    </>
  );
}