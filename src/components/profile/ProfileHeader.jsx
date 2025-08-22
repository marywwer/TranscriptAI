import styles from "../../pages/Profile.module.css";

export default function ProfileHeader() {
  return (
    <>
      <h1 className={styles.pageTitle}>Профиль пользователя</h1>
      <p className={styles.pageSubtitle}>
        Кастомизируйте свои данные и обновите пароль
      </p>
    </>
  );
}