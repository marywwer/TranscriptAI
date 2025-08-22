import { useNavigate } from "react-router-dom";
import AuthContainer from "../components/login/AuthContainer";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        display: "grid",
        minHeight: "100vh",
        placeItems: "center",
      }}
    >
      {/* Временная кнопка для перехода в профиль */}
      <button
        onClick={goToProfile}
        className={styles.authBtn}
        style={{ marginBottom: "1rem", background: "#4CAF50" }}
      >
        Временный переход в профиль
      </button>
      <div className={styles.authContainer}>
        <AuthContainer />
      </div>
    </div>
  );
};

export default Login;