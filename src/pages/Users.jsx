import usersData from "../data/usersdata.json";
import PageHeader from "../components/users/PageHeader";
import StatsGrid from "../components/users/StatsGrid";
import Tabs from "../components/users/Tabs";
import SearchBar from "../components/users/SearchBar";
import BulkActions from "../components/users/BulkActions";
import UsersTable from "../components/users/UsersTable";
import styles from "./Users.module.css";

export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <PageHeader
          title="Управление пользователями"
          subtitle="Добавление, редактирование и управление ролями пользователей"
        />
        <StatsGrid />
        <Tabs />
        <div className={styles.tabContent}>
          <div className={styles.card}>
            <SearchBar />
            <BulkActions />
            <UsersTable users={usersData} />
          </div>
        </div>
      </div>
    </div>
  );
}