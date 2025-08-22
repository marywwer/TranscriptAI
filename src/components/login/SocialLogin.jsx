import styles from "./SocialLogin.module.css";
export default function SocialLogin() {
  return (
    <div id="social-login">
      <div className={styles.socialBtn}>
        <i className="fab fa-telegram"></i> Войти через Telegram
      </div>
      <div className={styles.socialBtn}>
        <i className="fab fa-google"></i> Войти через Google
      </div>
    </div>
  );
}