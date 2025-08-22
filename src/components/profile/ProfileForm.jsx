import styles from "../../pages/Profile.module.css";

export default function ProfileForm() {
  return (
    <>
      <h2
        style={{
          fontSize: "1.75rem",
          marginBottom: "1.5rem",
          background: "linear-gradient(135deg, #67e8f9 0%, #8b5cf6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Основная информация
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          МИ
        </div>
        <div>
          <h3 style={{ margin: 0 }}>Мишаня</h3>
          <p style={{ color: "#94a3b8" }}>Backend Engineer • Администратор</p>
          <button className={styles.btn} style={{ marginTop: "1rem" }}>
            <i className="fas fa-camera"></i> Изменить фото
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Username</label>
        <input
          type="text"
          className={styles.formInput}
          defaultValue="mishanya_dev"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Email</label>
        <input
          type="email"
          className={styles.formInput}
          defaultValue="misha@devmail.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Полное имя</label>
        <input
          type="text"
          className={styles.formInput}
          defaultValue="Михаил Иванов"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Роль</label>
        <input
          type="text"
          className={styles.formInput}
          value="Администратор"
          disabled
        />
      </div>
    </>
  );
}