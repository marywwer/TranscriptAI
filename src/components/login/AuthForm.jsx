import { useState } from "react";
import FormInput from "./FormInput";
import styles from "./AuthForm.module.css";

export default function AuthForm({ isLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const isPasswordValid = password.length >= 6;
  const isRepeatValid = password === repeatPassword;
  const isFormValid = isLogin || (isPasswordValid && isRepeatValid);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Вход:" : "Регистрация:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        required
      />

      <FormInput
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={setPassword}
        required
      />
      {!isLogin && password && !isPasswordValid && (
        <div
          style={{
            color: "#b5685b",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            marginBottom: "0.25rem",
          }}
        >
          Пароль должен быть не менее 6 символов
        </div>
      )}

      {!isLogin && (
        <>
          <FormInput
            type="password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={setRepeatPassword}
            required
          />
          {repeatPassword && !isRepeatValid && (
            <div
              style={{
                color: "#b5685b",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                margin: "0",
                padding: "0",
              }}
            >
              {" "}
              Пароли не совпадают
            </div>
          )}
        </>
      )}

      <button type="submit" className={styles.authBtn} disabled={!isFormValid}>
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
}