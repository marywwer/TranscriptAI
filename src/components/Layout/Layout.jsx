import { Outlet} from "react-router-dom";
import Sidebar from "../profile/Sidebar";
import styles from "../../pages/Login.module.css";

const Layout = () => {
  return (
    <div className={styles.body}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Outlet /> {/* Здесь будут отображаться страницы */}
      </div>
    </div>
  );
};

export default Layout;