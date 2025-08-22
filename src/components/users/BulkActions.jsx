import styles from "../../pages/Users.module.css";

export default function BulkActions({ selectedCount }) {
  if (selectedCount === 0) return null;

  return (
    <div className={`${styles.bulkActions} ${styles.active}`}>
      <span>
        Выбрано пользователей: <strong>{selectedCount}</strong>
      </span>
      <button
        className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
      >
        <i className="fas fa-edit"></i> Изменить роль
      </button>
      <button
        className={`${styles.btn} ${styles.btnDanger} ${styles.btnSmall}`}
      >
        <i className="fas fa-ban"></i> Заблокировать
      </button>
      <button
        className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSmall}`}
      >
        <i className="fas fa-times"></i> Отменить
      </button>
    </div>
  );
}