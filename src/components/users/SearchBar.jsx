import styles from "../../pages/Users.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={`${styles.formInput} ${styles.searchInput}`}
        placeholder="Поиск пользователей..."
      />
      <select className={styles.formInput}>
        <option>Все роли</option>
        <option>Администраторы</option>
        <option>Транскрибаторы</option>
        <option>Наблюдатели</option>
      </select>
      <select className={styles.formInput}>
        <option>Все статусы</option>
        <option>Активные</option>
        <option>Неактивные</option>
        <option>Заблокированные</option>
      </select>
      <button className={styles.btn}>
        <i className="fas fa-plus"></i> Пригласить
      </button>
    </div>
  );
}