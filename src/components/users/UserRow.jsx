import styles from "../../pages/Users.module.css";

export default function UserRow({ user }) {
  return (
    <tr className={styles.userRow}>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className={styles.userAvatar}>{user.avatar}</div>
          <div>
            <div style={{ fontWeight: 600 }}>{user.name}</div>
            <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
              {user.email}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span
          className={`${styles.roleBadge} ${
            styles[user.roleClass.replace("-", "")]
          }`}
        >
          {user.role}
        </span>
      </td>
      <td>
        <span className={styles[user.statusClass.replace("-", "")]}></span>
        {user.status}
      </td>
      <td>{user.lastActive}</td>
      <td>{user.files}</td>
      <td>
        <div>{user.limit}</div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${user.limitPercent}%` }}
          ></div>
        </div>
      </td>
      <td>
        <button
          className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
        >
          <i className="fas fa-edit"></i>
        </button>
      </td>
    </tr>
  );
}