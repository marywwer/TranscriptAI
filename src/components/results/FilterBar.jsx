import { useState } from "react";
import styles from "../../pages/Results.module.css";

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("Все файлы");

  const filters = ["Все файлы", "Мои файлы", "За сегодня"];
  return (
    <div className={styles.card}>
      <div className={styles.filterBar}>
        <div className={styles.filterLeft}>
          <div className={styles.filterItem}>
            <label className={styles.formLabel}>Пользователь:</label>
            <select className={`${styles.formInput} ${styles.formSelect}`}>
              <option>Все пользователи</option>
              <option>Мишаня</option>
              <option>Анна Козлова</option>
              <option>Дмитрий Морозов</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.formLabel}>Период:</label>
            <select className={`${styles.formInput} ${styles.formSelect}`}>
              <option>За всё время</option>
              <option>Сегодня</option>
              <option>За неделю</option>
              <option>За месяц</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.formLabel}>Статус:</label>
            <select className={`${styles.formInput} ${styles.formSelect}`}>
              <option>Все статусы</option>
              <option>Завершено</option>
              <option>Обработка</option>
              <option>Ошибка</option>
            </select>
          </div>
        </div>
        <div className={styles.filterItem}>
          <input
            type="text"
            className={`${styles.formInput} ${styles.searchInput}`}
            placeholder="Поиск по названию файла..."
          />
          <button className={styles.btn}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className={styles.quickFilters}>
        {filters.map((filter) => (
          <div
            key={filter}
            className={`${styles.quickFilter} ${
              activeFilter === filter ? styles.active : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
}