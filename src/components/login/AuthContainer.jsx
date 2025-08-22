import { useState } from "react";
import SocialLogin from "./SocialLogin";
import AuthForm from "./AuthForm";
import styles from "./AuthContainer.module.css";

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
      <h2>{isLogin ? "Вход в аккаунт" : "Регистрация"}</h2>
      <SocialLogin />

      <AuthForm isLogin={isLogin} />

      <div className={styles.authToggle}>
        {isLogin ? (
          <>
            Нет аккаунта? <a onClick={toggleForm}>Зарегистрироваться</a>
          </>
        ) : (
          <>
            Уже есть аккаунт? <a onClick={toggleForm}>Войти</a>
          </>
        )}
      </div>
    </div>
  );
}