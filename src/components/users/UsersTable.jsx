import UserRow from "./UserRow";
import styles from "../../pages/Users.module.css";

export default function UsersTable({ users }) {
  return (
    <table className={styles.userTable}>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Пользователь</th>
          <th>Роль</th>
          <th style={{ width: "10rem" }}>Статус</th>
          <th>Последняя активность</th>
          <th>Файлов</th>
          <th>Лимит минут</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}